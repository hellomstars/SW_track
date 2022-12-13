const { Router } = require("express");
const { Student } = require("../models");

const router = Router();

router.get("/", async (req, res) => {
  const search_major = req.query.major;

  const student = await Student.find({ major: search_major });
  
  res.json(student);
});


module.exports = router;