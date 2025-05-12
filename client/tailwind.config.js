/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Saaspo-inspired palette (example, can be refined)
        'brand-background': '#0F172A', // Very dark blue (slate-900)
        'brand-surface': '#1E293B',   // Dark blue-gray (slate-800)
        'brand-primary': '#38BDF8',    // Sky blue (sky-400)
        'brand-primary-hover': '#0EA5E9', // Darker sky blue (sky-500)
        'brand-secondary': '#818CF8',  // Indigo (indigo-400)
        'brand-text-primary': '#F1F5F9',    // Very light gray (slate-100)
        'brand-text-secondary': '#94A3B8', // Medium gray (slate-400)
        'brand-border': '#334155',     // Grayish blue (slate-700)
        'brand-error': '#F43F5E',       // Rose (rose-500)
        'brand-success': '#22C55E',    // Green (green-500)
        'brand-input-bg': '#1E293B', // Same as surface or slightly different
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ensuring Inter is the default sans-serif
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
