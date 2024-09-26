module.exports = {
    plugins: [
      require('postcss-import')(),
      require('tailwindcss')(),
      require('autoprefixer')(),
    ],
    syntax: 'postcss-scss',
  };