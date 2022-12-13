// mongoose 모듈과 Book 모델을 불러오세요.
const mongoose = require("mongoose");
const { Book } = require("./models");

// 삽입할 데이터입니다.
let data = [
  { title: "War and Peace", author: "Leo Tolstoy" },
  { title: "The Old Man and the Sea", author: "Ernest Hemingway" },
];

// connect 함수를 이용해 mongodb를 연결하세요. mongoose의 connect는 promise를 반환합니다.
// 데이터 베이스 연결 이후 비동기 처리를 통해 데이터를 삽입하고 검색해봅시다.
mongoose
  .connect("mongodb://localhost:27017/myLibrary")
  .then(() => main())
  .catch((err) => {
    console.error("오류가 발생했습니다.", err);
  })
  .finally(() => {
    process.exit();
  });

// MongoDB에 데이터를 삽입하고 검색할 비동기 함수를 선언하세요.
async function main() {
  // Book 모델에 create() 함수를 이용해 데이터를 삽입하세요.
  await Book.create(data);
  
  // Book 모델에 find() 함수를 이용해 데이터를 검색하세요.
  const books = await Book.find({});
  
  // 데이터는 title과 author 속성을 가집니다.
  // 검색한 데이터를 "Book: 책 제목, 작가" 형태로 출력하세요.
  books.map(({ title, author}) => {
    console.log(`Book: ${title}, ${author}`);
  });
}