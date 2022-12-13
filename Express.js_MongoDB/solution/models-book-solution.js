// Schema 모듈을 불러오세요.
const { Schema } = require("mongoose");

// BookSchema를 정의하고 책의 제목인 title과 작가인 author 두 속성을 String 타입에 필수 속성으로 지정하세요.
const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

// 정의한 BookSchema를 export하세요.
module.exports = BookSchema;