const express = require("express");
const bookRouter = require("./routes/books");
// set-books에서 작성한 미들웨어를 추가하고, "/books" 경로에 추가로 연결하세요.
const setBook = require("./middlewares/set-book");

const app = express();

app.get("/", (req, res) => {
  res.send("root page");
});

app.use("/books", setBook, bookRouter);

app.listen(8080);