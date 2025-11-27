const User = require('../models/userModel.js');
const Item = require('../models/itemModel.js');
const { generateToken } = require('../middleware/authMiddleware.js');

// @desc    Get stats for helped users and items recovered
// @route   GET /api/users/stats
// @access  Private
const getStats = async (req, res) => {
  try {
    // Base stats (historical data before the system was implemented)
    const BASE_HELPED_USERS = 361;
    const BASE_ITEMS_RECOVERED = 180;
    
    // Get current dynamic counts from database
    const currentUsers = await User.countDocuments();
    const currentItemsRecovered = await Item.countDocuments({ status: 'returned' });
    
    // Combine base stats with dynamic counts
    const helpedUsers = BASE_HELPED_USERS + currentUsers;
    const itemsRecovered = BASE_ITEMS_RECOVERED + currentItemsRecovered;
    
    res.json({
      helpedUsers,
      itemsRecovered
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = async (req, res) => {
  const { rollNumber, password } = req.body;

  try {
    const user = await User.findOne({ rollNumber });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        rollNumber: user.rollNumber,
        token: generateToken(user._id)
      });
    } else {
      res.status(401).json({ message: 'Invalid roll number or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
  const { rollNumber } = req.body;

  try {
    const userExists = await User.findOne({ rollNumber });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Password will be the uppercase version of roll number
    const password = rollNumber.toUpperCase();

    const user = await User.create({
      rollNumber,
      password
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        rollNumber: user.rollNumber,
        token: generateToken(user._id)
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  authUser,
  registerUser,
  getStats
};
