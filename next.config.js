require('dotenv').config();

module.exports = {
  env: {
    JWT_ACCESS_TOKEN_KEY: process.env.JWT_ACCESS_TOKEN_KEY,
    JWT_SECRET: process.env.JWT_SECRET,
  },
};
