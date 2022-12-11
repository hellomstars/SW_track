// books.json을 불러오세요.
const books = require("../data/books");

// 불러온 책 데이터 중 request의 query로 요청된 데이터를 넘겨주는 미들웨어를 만드세요.
// query는 "?bookNumber=1" 형태로 받습니다. 넘겨받은 숫자로 books.json에 있는 데이터를 "req.book"으로 넘겨줍니다.
const setBook = (req, res, next) => {
  const { bookNumber } = req.query;

  req.book = books[bookNumber];
  next();
};

// 생성한 모듈은 export하세요.
module.exports = setBook;