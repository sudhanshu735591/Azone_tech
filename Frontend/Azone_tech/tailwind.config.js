/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'below-xs': { max: '375px' },
      'xs': '480px',    // Extra small screens
      'sm': '640px',    // Small screens
      'md': '768px',    // Medium screens
      'lg': '1024px',   // Large screens
      'xl': '1280px',   // Extra large screens
      '2xl': '1536px',  // 2X large screens
      '3xl': '1600px',  // Custom larger screens
    },
  },
  plugins: [],
}