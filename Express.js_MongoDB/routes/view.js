const { Router } = require("express");
const { Student } = require("../models");

const router = Router();

// 추가한 학생을 확인하기 위한 router입니다.
router.get("/", async (req, res) => {
  const students = await Student.find({});

  res.render("print", { students });
});

module.exports = router;