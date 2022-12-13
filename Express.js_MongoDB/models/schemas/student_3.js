const { Schema } = require("mongoose");

const StudentSchema = new Schema({
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