// 정의한 BookSchema를 이용해 모델을 만드세요.
const mongoose = require("mongoose");
const BookSchema = require("./schemas/book");

exports.Book = mongoose.model("Book", BookSchema);