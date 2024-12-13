/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
        },
      },
      fontSize: {
        'custom-6xl': '61px',
        'custom-xl': '22px',
      },
      lineHeight: {
        'custom-lg': '136%',
        'custom-2xl': '150%',
      },
      colors: {
        'gray':'#525252',
      }
    },
  },
  plugins: [],
};
