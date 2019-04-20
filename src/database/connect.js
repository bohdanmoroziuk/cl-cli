const mongoose = require('mongoose');
const { database } = require('../config');

mongoose
  .connect(
    `${database.url}/${database.name}`,
    database.options,
  );