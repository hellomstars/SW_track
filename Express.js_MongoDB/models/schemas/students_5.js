const { Schema } = require("mongoose");

const shortId = require('./types/short-id_2');

const StudentSchema = new Schema({
  shortId,
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  major: {
    type: String,
  },
});

module.exports = StudentSchema;