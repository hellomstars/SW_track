const { Router } = require("express");
const { Student } = require("../models");

const router = Router();

// 데이터를 확인하기 위한 페이지를 render합니다.
router.get("/", async (req, res) => {
  const students = await Student.find({});

  res.render("print", { students });
});

module.exports = router;