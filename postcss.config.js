const autoprefixer = require('autoprefixer'); // eslint-disable-line import/no-extraneous-dependencies
const mqpacker = require('css-mqpacker'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  plugins: [
    autoprefixer({
      browsers: ['last 2 versions'],
    }),
    mqpacker({
      sort: true,
    }),
  ],
};
