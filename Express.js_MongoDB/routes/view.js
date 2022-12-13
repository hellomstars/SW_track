const { Router } = require("express");
const { Student } = require("../models");
const router = Router();

router.get("/", async (req, res) => {
  const students = await Student.find({});

  res.render("print", { students });
});

module.exports = router;