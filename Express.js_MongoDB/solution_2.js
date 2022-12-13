const { Router } = require("express");
const { Student } = require("../models");

const router = Router();

// 지시사항을 참고하여 코드를 완성하세요.
router.get("/", async (req, res) => {
  const students = await Student.find({});

  res.json(students);
});

module.exports = router;