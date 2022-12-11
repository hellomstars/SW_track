/* 4-1. Express.js의 미들웨어 */

// 미들웨어의 작성과 사용
/*
Express.js 로 구현된 간단한 웹 프로그램입니다.
./middlwares/set-user.js 파일은 쿼리 파라미터를 확인하여 유저를 req 객체에 저장하는 미들웨어입니다.
유저 정보는 ./data 디렉터리의 json 파일을 사용합니다.
/users?userName=alice 경로로 접근하면 alice 유저의 정보가 출력되도록 작성되어 있습니다.
------------------------------------------------------------------------------------------
./middlewares/set-user.js 의 setUser 함수는 쿼리파라미터의 userName 값을 받아, users 객체에서 유저를 찾아 req 객체에 저장하는 미들웨어입니다.
setUser 미들웨어를 admins 객체에서 관리자를 찾는 모드로 사용할 수 있도록 수정합니다.

set-user.js 파일에서 미들웨어를 추가하지 않고, setUser 미들웨어를 수정하여 admin을 찾는 모드로도 동작할 수 있도록 합니다.
admin 모드로 동작하는 미들웨어는 users에 있는 유저 정보는 접근하지 못해야 합니다.
*/
const express = require('express');

const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');
const setUser = require('./middlewares/set-user');
const adjuerQuery = require('./middlewares/adjust-query');


const app_1 = express();

app_1.use(adjuerQuery);

app_1.get('/', (req, res) => {
    res.send("OK");
});

app_1.use('/users', setUser(), usersRouter);
app_1.use('/admin', setUser("admin"), adminRouter);

app_1.listen(8080);



// 오류처리 미들웨어의 작성과 사용
/* 다음은 Express.js 로 구현된 간단한 서버의 코드입니다.
------------------------------------------------------------------------
index.js 파일에는 “/success” 와 “/fail” 두 경로의 라우팅이 설정되어 있습니다.
“GET /success” 요청은 정상적으로 동작하지만, “GET /fail” 요청은 hasError 미들웨어에서 오류를 next에 전달하고 있기 때문에, Request Handler가 정상적으로 동작하지 않습니다.
오류처리 미들웨어를 추가하여 미들웨어에서 전달된 오류를 “Request failed with {error}” 형태로 응답으로 보내도록 작성합니다.
*/
const express = require('express');

const app_2 = express();

const hasError = (req, res, next) => {
    next("ERROR");
}

app_2.get('/', (req, res) => {
    res.send("OK");
});

app_2.get('/success', (req, res) => {
    res.send("SUCCESS");
});

app_2.get('/fail', hasError, (req, res) => {
    res.send("FAIL");
});

// 오류처리 미들웨어 추가하기
app_2.use((err, req, res, next) => {
    res.send(`Request failed with ${err}`);
});

app_2.listen(8080);


// 책 미들웨어 만들기
/*
미들웨어를 이용해 ./data/books.json에 들어있는 책 데이터를 출력하는 웹 페이지를 만들기
------------------------------------------------------------------------------------
./middlewares/set-book.js에서 책 데이터를 불러오고, URI에 입력된 bookNumber query에 해당하는 책 데이터를 request로 넘겨주는 미들웨어를 만드세요.
  >> query는 "?bookNumber=1" 형태로 받습니다. 넘겨받은 숫자로 books.json에 있는 데이터를 "req.book"으로 넘겨줍니다.
./routes/books.js에서 작성된 라우터에 req.book 내에 있는 title과 author 데이터를 받아 반환하세요.
  >> 반환하는 데이터의 형태는 "BOOK: title, author"입니다.
index.js에서 set-books.js에서 작성한 미들웨어를 추가하고, “/books” 경로에 추가로 연결하세요.
*/
const express = require("express");
const bookRouter = require("./routes/books");
  // set-books에서 작성한 미들웨어를 추가하고, "/books" 경로에 추가로 연결
const setBook = require("./middlewares/set-book");

const app_3 = express();

app_3.get("/", (req, res) => {
  res.send("root page");
});

app_3.use("/books", setBook, bookRouter);

app_3.listen(8080);