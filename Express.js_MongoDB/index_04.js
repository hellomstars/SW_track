/* 4-4. Mongoose 활용하기 */

// Express.js + Mongoose 연결하기
const express = require('express');
const mongoose = require('mongoose');

const postsRouter = require('./routes/posts');

const app_1 = express();

mongoose.connect("mongodb://localhost:27017/exam_7");

mongoose.connection.on("connected", () => {
  console.log("Successfully connected to MongoDB");
})

app_1.get('/', (req, res) => {
  res.send("OK");
});

app_1.use('/posts', postsRouter);

app_1.listen(8080);



// Mongoose로 책 데이터 다루기

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

/*
1. ./models/schemas/book.js에서 Schema 모듈을 불러오고, 책의 제목인 title과 작가인 author를 가지는 BookSchema를 정의하세요.

title과 author 두 가지 모두 String 타입이며, 필수 속성입니다.
정의한 스키마를 export하세요.

// Schema 모듈을 불러오세요.
const { Schema } = require("mongoose");
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
    ```

2. ./models/index.js에서 생성한 스키마를 마탕으로 Book 모델을 만드세요.

// 정의한 BookSchema를 이용해 모델을 만드세요.
const mongoose = require("mongoose");
const BookSchema = require("./schemas/book");

// 정의한 BookSchema모델을 export하세요.
exports.Book = mongoose.model("Book", BookSchema);

3. ./index.js에서 mongoose 모듈과 생성한 Book 모델을 불러오세요.
const mongoose = require("mongoose");
const { Book } = require("./models");

4. ./index.js에서 mongoose의 connect()를 이용해 MongoDB를 연결하세요.
"mongodb://localhost:27017/myLibrary" 주소로 연결하세요.

mongoose
    .connect("mongodb://localhost:27017/myLibrary")
    .then(() => main())
    .catch((err) => {
        console.error("오류가 발생했습니다.", err);
    })
    .finally(() => {
        process.exit();
    });

5. connect() 이후 실행할 비동기 함수를 정의하고, then을 통해 실행되도록 코드를 작성하세요.
- 에러 발생 시 catch에서는 에러 내용을 콘솔로 출력합니다.
- 실행이 끝나면 finally에서 process.exit()으로 프로세스를 종료합니다.

6. 실행할 비동기 함수에서는 Book() 모델에 create()를 이용해 data를 삽입하고, find()를 이용해 전체 데이터를 검색하세요.
- find({})와 같이 조건을 넣지 않으면 전체 데이터를 검색할 수 있습니다.
- 검색한 데이터의 title과 author를 찾아 Book: 책 제목, 작가와 같은 형태로 콘솔에 출력하세요.

async function main() {

    await Book.create(data);
    const books = await Book.find({});
    books.map(({ title, author}) => {
        console.log(`Book: ${title}, ${author}`);
    });
}

------------실행 결과---------------
Book: The Old Man and the Sea, Ernest Hemingway
Book: War and Peace, Leo Tolstoy
*/


// MongoDB 스키마 및 모델 구성하기
const express = require("express");
const mongoose = require("mongoose");

// model을 불러옵니다.
const { Student } = require("./models");

// app을 생성하고 mongoDB를 연결합니다.
const app_2 = express();
mongoose.connect("mongodb://localhost:27017/college");

// 8080번 포트에 연결합니다.
app_2.listen(8080);

// 학생 데이터를 데이터베이스에 삽입합니다.
async function run() {
  let students = [
    {
      name: "하병지",
      age: 20,
      major: "컴퓨터공학과",
    },
    {
      name: "양기현",
    },
    {
      name: "전진수",
      age: 23,
    },
    {
      name: "강현숙",
      major: "기계공학과",
    },
    {
      name: "허선진",
      age: 21,
      major: "컴퓨터공학과",
    },
    {
      name: "박지석",
      age: 21,
      major: "화학공학과",
    },
    {
      name: "송형빈",
      major: "컴퓨터공학과",
    },
    {
      name: "설효주",
      age: 23,
      major: "화학공학과",
    },
    {
      name: "윤동윤",
      age: 25,
      major: "컴퓨터공학과",
    },
    {
      name: "장지민",
      major: "기계공학과",
    },
    {
      name: "추재영",
      age: 23,
      major: "기계공학과",
    },
  ];

  await Student.create(students);
}

// 데이터베이스에 삽입한 학생 데이터를 출력합니다.
async function get() {
  const students = await Student.find({});

  console.log(students);
}

// 데이터 삽입 및 출력 이후 app을 종료합니다.
run();
get()
  .finally(() => {
    process.exit();
  });



// GET 요청을 처리하는 API 만들기
const express = require("express");
const mongoose = require("mongoose");

// router와 model을 불러옵니다.
const studentRouter = require("./routes/students");
const { Student } = require("./models");

// app을 생성하고 mongoDB를 연결합니다.
const app_3 = express();
mongoose.connect("mongodb://localhost:27017/college");

// JSON 데이터를 제대로 파싱하기 위한 코드입니다.
app_3.use(express.json());
app_3.use(express.urlencoded({ extended: true }));

// "/" 경로 페이지에서 기본 문구를 띄웁니다.
app_3.get("/", (req, res) => {
  res.send("Home Page");
});

// router를 연결합니다.
app_3.use("/students", studentRouter);

// favicon 에러를 해결하기 위한 코드입니다.
app_3.get("/favicon.ico", (req, res) => res.status(204));

// 8080번 포트에 연결합니다.
app_3.listen(8080);

// 학생 데이터를 데이터베이스에 삽입합니다.
async function run() {
  let students = [
    {
      name: "하병지",
      age: 20,
      major: "컴퓨터공학과",
    },
    {
      name: "양기현",
    },
    {
      name: "전진수",
      age: 23,
    },
    {
      name: "강현숙",
      major: "기계공학과",
    },
    {
      name: "허선진",
      age: 21,
      major: "컴퓨터공학과",
    },
    {
      name: "박지석",
      age: 21,
      major: "화학공학과",
    },
    {
      name: "송형빈",
      major: "컴퓨터공학과",
    },
    {
      name: "설효주",
      age: 23,
      major: "화학공학과",
    },
    {
      name: "윤동윤",
      age: 25,
      major: "컴퓨터공학과",
    },
    {
      name: "장지민",
      major: "기계공학과",
    },
    {
      name: "추재영",
      age: 23,
      major: "기계공학과",
    },
  ];

  await Student.create(students);
}

run();




// POST 요청을 처리하는 API 만들기
const express = require("express");
const mongoose = require("mongoose");
const path = require('path');

// router와 model을 불러옵니다.
const studentRouter = require("./routes/students");
const viewRouter = require('./routes/view');
const { Student } = require("./models");

// app을 생성하고 mongoDB를 연결합니다.
const app_4 = express();
mongoose.connect("mongodb://localhost:27017/college");

// pug 엔진을 설정합니다.
app_4.set('views', path.join(__dirname, 'views'));
app_4.set('view engine', 'pug');

// JSON 데이터를 제대로 파싱하기 위한 코드입니다.
app_4.use(express.json());
app_4.use(express.urlencoded({ extended: true }));

// "/" 경로 페이지에서 기본 문구를 띄웁니다.
app_4.get("/", (req, res) => {
  res.send("Home Page");
});

// router를 연결합니다.
app_4.use("/students", studentRouter);
app_4.use("/view", viewRouter);

// favicon 에러를 해결하기 위한 코드입니다.
app_4.get("/favicon.ico", (req, res) => res.status(204));

// 8080번 포트에 연결합니다.
app_4.listen(8080);



// PUT 요청을 처리하는 API 만들기
const express = require("express");
const mongoose = require("mongoose");
const path = require('path');

// router와 model을 불러옵니다.
const studentRouter = require("./routes/students");
const viewRouter = require('./routes/view');
const { Student } = require("./models");

// app을 생성하고 mongoDB를 연결합니다.
const app_5 = express();
mongoose.connect("mongodb://localhost:27017/college");

// pug 엔진을 설정합니다.
app_5.set('views', path.join(__dirname, 'views'));
app_5.set('view engine', 'pug');

// JSON 데이터를 제대로 파싱하기 위한 코드입니다.
app_5.use(express.json());
app_5.use(express.urlencoded({ extended: true }));

// "/" 경로 페이지에서 기본 문구를 띄웁니다.
app_5.get("/", (req, res) => {
  res.send("Home Page");
});

// router를 연결합니다.
app_5.use("/students", studentRouter);
app_5.use("/view", viewRouter);

// favicon 에러를 해결하기 위한 코드입니다.
app_5.get("/favicon.ico", (req, res) => res.status(204));

// 8080번 포트에 연결합니다.
app_5.listen(8080);

// 학생 데이터를 데이터베이스에 삽입합니다.
async function run() {
  let students = [
    {
      name: "하병지",
      age: 20,
      major: "컴퓨터공학과",
    },
    {
      name: "양기현",
    },
    {
      name: "전진수",
      age: 23,
    },
  ];

  await Student.create(students);
}

run();



// DELETE 요청을 처리하는 API 만들기
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// router와 model을 불러옵니다.
const studentRouter = require("./routes/students");
const viewRouter = require('./routes/view');
const { Student } = require("./models");

// app을 생성하고 mongoDB를 연결합니다.
const app_6 = express();
mongoose.connect("mongodb://localhost:27017/college");

// pug 엔진을 설정합니다.
app_6.set('views', path.join(__dirname, 'views'));
app_6.set('view engine', 'pug');

// JSON 데이터를 제대로 파싱하기 위한 코드입니다.
app_6.use(express.json());
app_6.use(express.urlencoded({ extended: true }));

// "/" 경로 페이지에서 기본 문구를 띄웁니다.
app_6.get("/", (req, res) => {
  res.send("Home Page");
});

// router를 연결합니다.
app_6.use("/students", studentRouter);
app_6.use("/view", viewRouter);

// favicon 에러를 해결하기 위한 코드입니다.
app_6.get("/favicon.ico", (req, res) => res.status(204));

// 8080번 포트에 연결합니다.
app_6.listen(8080);

// 학생 데이터를 데이터베이스에 삽입합니다.
async function run() {
  let students = [
    {
      name: "하병지",
      age: 20,
      major: "컴퓨터공학과",
    },
    {
      name: "양기현",
    },
    {
      name: "전진수",
      age: 23,
    },
  ];

  await Student.create(students);
}

run();



// 특정 조건이 포함된 GET 요청을 처리하기
const express = require("express");
const mongoose = require("mongoose");

// router와 model을 불러옵니다.
const studentRouter = require("./routes/students");
const { Student } = require("./models");

// app을 생성하고 mongoDB를 연결합니다.
const app_7 = express();
mongoose.connect("mongodb://localhost:27017/college");

// JSON 데이터를 제대로 파싱하기 위한 코드입니다.
app_7.use(express.json());
app_7.use(express.urlencoded({ extended: true }));

// "/" 경로 페이지에서 기본 문구를 띄웁니다.
app_7.get("/", (req, res) => {
  res.send("Home Page");
});

// router를 연결합니다.
app_7.use("/students", studentRouter);

// favicon 에러를 해결하기 위한 코드입니다.
app_7.get("/favicon.ico", (req, res) => res.status(204));

// 8080번 포트에 연결합니다.
app_7.listen(8080);

// 학생 데이터를 데이터베이스에 삽입합니다.
async function run() {
  let students = [
    {
      name: "하병지",
      age: 20,
      major: "컴퓨터공학과",
    },
    {
      name: "양기현",
    },
    {
      name: "전진수",
      age: 23,
    },
    {
      name: "강현숙",
      major: "기계공학과",
    },
    {
      name: "허선진",
      age: 21,
      major: "컴퓨터공학과",
    },
    {
      name: "박지석",
      age: 21,
      major: "화학공학과",
    },
    {
      name: "송형빈",
      major: "컴퓨터공학과",
    },
    {
      name: "설효주",
      age: 23,
      major: "화학공학과",
    },
    {
      name: "윤동윤",
      age: 25,
      major: "컴퓨터공학과",
    },
    {
      name: "장지민",
      major: "기계공학과",
    },
    {
      name: "추재영",
      age: 23,
      major: "기계공학과",
    },
  ];

  await Student.create(students);
}

run();