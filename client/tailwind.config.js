// andreJarboeCodes/client/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e53e3e',
        secondary: '#3f3d56',
        // ...
      }
    },
  },
  plugins: [
  ],
}