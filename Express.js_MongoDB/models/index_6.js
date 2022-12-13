const mongoose = require("mongoose");
const StudentSchema = require("./schemas/student");

exports.Student = mongoose.model("Student", StudentSchema);
