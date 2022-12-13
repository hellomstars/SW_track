const { Router } = require("express");
const { Student } = require("../models");

const router = Router();

router.get("/", async (req, res) => {
  const students = await Student.find({});

  res.json(students);
});

module.exports = router;