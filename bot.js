const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

// require('dotenv').config();

const test_ram = require("./helpers/telegram-test-ram");

const init = () => {
  test_ram(6, 1000 * 60 * 30);
};

init();
