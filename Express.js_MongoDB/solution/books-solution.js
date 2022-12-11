const { Router } = require("express");

const router = Router();

// 미들웨어에서 넘겨준 req.book에서 title, author 데이터를 받습니다.
// 해당 데이터를 "BOOK: title, author"의 형태로 반환합니다.
router.get("/", (req, res) => {
  const { title, author } = req.book;
  res.send(`BOOK: ${title}, ${author}`);
});

module.exports = router;