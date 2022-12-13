/* 4-2. REST API */

// Express.js로 REST API 구현하기
const express = require('express');

const noteRouter = require('./routes/notes');
const authorRouter = require('./routes/authors');

const app_1 = express();

app_1.use(express.json());

app_1.get('/', (req, res) => {
    res.send('OK');
});

app_1.use('/notes', noteRouter);

app_1.use('/authors', authorRouter);

app_1.use((err, req, res, next) => {
    res.status(500);
    res.json({
        result: 'fail',
        error: err.message,
    });
});

app_1.use((req, res, next) => {
    res.status(404);
    res.json({
        result: 'fail',
        error: `Page not found ${req.path}`,
    });
});

app_1.listen(8080);

/*
1. 
./routes/authors.js 라우터는 /authors 경로에 연결되어 있습니다.
“GET /authors” 요청이 들어왔을 때, 메모 작성자 목록을 json 으로 응답을 보내도록 ./routes/authors.js 에 라우팅을 추가합니다.
작성자 목록을 배열로 받는 기능은
./models/note.js 모델의 authorList 함수를 사용합니다.

// ./routes/authors.js에 추가 

router.get("/", (req, res, next) => {
        const notes = Note.authorList();
        res.json(notes);
});

router.get("/:author/notes", (req, res, next) => {
        const { author } = req.params;
        try {
                const notes = Note.findByAuthor(author);
                res.json(notes);
        } catch (e) {
                next(e);
        }
});

2.
./models/note.js 모듈에 author를 이용해 메모를 필터링 할 수 있는 함수 findByAuthor 를 추가합니다. 필터링 기능은 JavaScript Array 함수 중 filter 함수를 사용합니다.
작성한 함수를 이용하여 “GET /authors/:author/notes” 요청이 들어왔을 때, 해당 작성자의 메모를 json 으로 응답을 보내도록 ./routes/authors.js 에 라우팅을 추가합니다.

// ./models/note.js에 추가

exports.findByAuthor = (author) => {


        const filtered = notes.filter(note => note.author === author);
        
        // 지시사항 3번 - 오류출력 추가예정
        
        return filtered;
    }

3.
작성자로 전체 메모를 받아오는 “GET /authors/:author/notes” 요청에 만약 작성자의 메모가 한 개도 없다면 “:author has no note” 라는 오류를 출력하도록 구현합니다.
오류는 findByAuthor 에서 throw 되어야 하며,
오류의 출력은 index.js 에 설정된 오류처리 미들웨어를 통해 이루어지도록 구성합니다.

// findByAuthor 함수에 추가
...
if (filtered.length < 1) {
        throw new Error(`${author} has no note`);
}
...

*/



// REST API 완성하기
const express = require('express');
const auth = require('./middlewares/auth');
const noteRouter = require('./routes/notes');

const app_2 = express();

app_2.use(express.json());

app_2.get('/', (req, res) => {
    res.send('OK');
});

app_2.use('/notes', auth, noteRouter);

app_2.use((req, res, next) => {
    res.status(404);
    res.json({
        result: 'fail',
        error: `Page not found ${req.path}`,
    });
});

app_2.use((err, req, res, next) => {
    res.status(500);
    res.json({
        result: 'fail',
        error: err.message,
    });
});

app_2.listen(8080);

/*
1.
./models/note.js 모듈의 create, update, delete 함수에 각각 “author” 라는 인자가 추가되어 있지만
./routes/notes.js 라우터에서 위 함수들을 사용할 때 아직 인자를 전달하고 있지 않습니다.
req.get(“author”) 를 이용하여 헤더에서 값을 받아, 각 함수에 전달할 수 있도록 라우터의 request handler 들을 수정합니다.

2.
./models/note.js 모듈에 search 함수가 추가되어 있습니다. 이 함수는 전달받은 인자가 메모 제목에 포함된 메모 목록을 반환하는 함수입니다.
이 함수를 사용하여
“GET /notes” 요청에 search 라는 쿼리 파라미터가 전달되었을 경우, 메모 검색 기능이 동작하도록 합니다.
예를 들어, “GET /notes?search=작성” 이라는 요청에 해당하는 응답은 다음과 같습니다.

[{
    "id": 2, 
    "title": "두 번째는 밥이 작성했습니다.",
    "author": "bob"
}, {
    "id": 4, 
    "title": "크리스도 메모를 작성했습니다.",
    "author": "chris"
}]

다음은 쿼리 파라미터를 사용하는 예제입니다.

// /path?name=elice 요청일 경우
req.get('/path', (req, res, next) => {
    const { name } = req.query;
    if (name) {
        res.send(`name: ${name}`);
        return;
    }
    res.send('No Name');
});

3.
./middlewares/auth.js 모듈에는 auth 라는 미들웨어가 정의되어 있습니다.
이 미들웨어는 author 헤더가 없을 경우 “No Author” 라는 오류를 오류처리 미들웨어로 전달합니다.
이를 수정하여 author 헤더 값이 “admin” 인 경우, password 헤더값을 확인하여 password 헤더값이 “1234” 가 아닌경우 “Invalid Admin Password” 라는 오류를 오류처리 미들웨어로 전달하도록 합니다.
또한, 완성된 auth 미들웨어를 “/notes” 경로에만 사용하도록 연결합니다.
*/



// 코드 : https://github.com/ChoiKyubum/rest-api-example.git