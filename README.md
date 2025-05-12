<div align="center">
  <h1>🎒 College Lost & Found</h1>
  <p>A modern, full-stack web application for managing lost and found items on college campuses. Built with the MERN stack, this platform empowers students and staff to report, search, and recover lost items efficiently and securely.</p>
</div>

---

## 🚀 Features

- **User Authentication**: Secure login and registration using roll numbers.
- **Report Lost/Found Items**: Submit detailed reports with images and contact info.
- **Browse & Search**: Filter and sort all reported items by category, status, and date.
- **Item Recovery Workflow**: Mark items as returned, track recovery stats.
- **Responsive UI**: Mobile-friendly, accessible design with Tailwind CSS.
- **Admin-Ready**: Easily extendable for moderation and analytics.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, Axios, React Router
- **Backend**: Node.js, Express.js, MongoDB (Atlas), JWT Auth, Multer (file uploads)
- **Database**: MongoDB Atlas (cloud) or local MongoDB
- **Deployment**: Render.com (free tier compatible)
- **Other**: dotenv for environment variables, express-validator for input validation

---

## 🏗️ Architecture

```
[ React Client ]  <--REST API-->  [ Express Server ]  <--ODM-->  [ MongoDB Atlas ]
        |                                 |                          |
   (Tailwind UI)                  (JWT Auth, Multer)           (Cloud DB)
```

- **Monorepo**: `/client` (React) and `/server` (Express) in one repository.
- **API**: `/api/users` for auth, `/api/items` for item management.
- **Static Assets**: React build served by Express in production.

---

## ⚡ Getting Started (Local Development)

### 1. Clone the Repository

```sh
git clone https://github.com/G26karthik/Lost-and-Found.git
cd Lost-and-Found
```

### 2. Install Dependencies

```sh
cd server
npm install
cd ../client
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in `/server`:

```
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4. Run the App Locally

**Start the backend:**

```sh
cd server
npm run dev
```

**Start the frontend:**

```sh
cd client
npm start
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend/API: [http://localhost:5000](http://localhost:5000)

---

## ☁️ Deploying to Render.com

### 1. Prepare for Deployment

- Ensure all secrets are in `.env` (never hardcoded).
- The backend serves the React build in production.
- CORS is enabled for production.

### 2. Add `render.yaml` (already included):

```yaml
services:
  - type: web
    name: college-lost-and-found-server
    env: node
    buildCommand: cd ../client && npm install && npm run build && cd ../server && npm install
    startCommand: node server.js
    envVars:
      - key: MONGO_URI
        sync: false
      - key: JWT_SECRET
        sync: false
      - key: NODE_ENV
        value: production
    rootDir: server
    plan: free
    autoDeploy: true
```

### 3. Push to GitHub

```sh
git init
git add .
git commit -m "Initial commit: College Lost & Found MERN app"
git remote add origin https://github.com/G26karthik/Lost-and-Found.git
git branch -M main
git push -u origin main
```

### 4. Deploy on Render

- Go to [Render.com](https://render.com).
- Click **New Web Service** → **Connect your GitHub repo**.
- Select your repo and use the following settings:
  - **Root Directory**: `server`
  - **Build Command**: `cd ../client && npm install && npm run build && cd ../server && npm install`
  - **Start Command**: `node server.js`
  - **Environment Variables**: Add `MONGO_URI`, `JWT_SECRET`, `NODE_ENV=production`
- Click **Create Web Service**.

**Frontend will be served by Express. No separate frontend service is needed.**

---

## 📝 Example `.env` for Render

```
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=production
```

---

## 🏆 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

[ISC](LICENSE)

---

## 💡 Credits

Built with ❤️ by your team.
