module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust to match your project structure
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#121212', // Dark background
        lightBg: '#ffffff', // Light background
        darkText: '#ffffff', // Dark mode text
        lightText: '#000000', // Light mode text
      },
    },
  },
  plugins: [],
};
