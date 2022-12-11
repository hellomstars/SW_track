/* 3-4. 웹과 Express.js */

// Path parameter 사용하기
const express = require('express');

const app_1 = express();

app_1.get('/', (req, res) => {
    res.send("OK");
});

   // path parameter 사용하기
   app_1.get('/say/:greeting', (req, res) => {
    const { greeting } = req.params;
    res.send(greeting);
});

app_1.listen(8080);



// Router 사용하기
const express = require('express');
const userRouter = require('./routes/users');

const app_2 = express();

app_2.get('/', (req, res) => {
    res.send("OK");
});

   /* 라우터를 '/users' 경로에 연결 */
app_2.use('/users', userRouter)

app_2.listen(8080);



// 계층적 구조의 라우터 사용하기 - users.js
const express = require('express');

const userRouter = require('./routes/users');

const app = express();

app.get('/', (req, res) => {
    res.send("OK");
});

   /* 라우터를 '/users' 경로에 연결 */
app.use('/users', userRouter);

app.listen(8080);