/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xss': '0.55rem'
      },
      colors: {
        'main-red': {
          '50': '#fce4e4',   // Lightest shade
          '100': '#f8baba',  // Lighter shade
          '200': '#f48f8f',  // Light shade
          '300': '#f06565',  // Medium light shade
          '400': '#ec3a3a',  // Medium shade
          '500': '#DD1212',  // Default shade
          '600': '#c41111',  // Slightly darker shade
          '700': '#aa0f0f',  // Darker shade
          '800': '#910e0e',  // Much darker shade
          '900': '#6d0a0a',  // Darkest shade
          '950': '#4b0707',  // Almost black shade
          'DEFAULT': '#DD1212', // Original default color
        }
      }
    },
    screens: {
      xxs: '360px',
      xs: '475px',
      sm: '640px',
      md: '768px',
      // screens: {
      //   'xxs': '360px',
      //   'xs': '475px',
      //   'sm': '640px',
      //   'md': '768px',
      // }
    }
  },
  plugins: [],
}

