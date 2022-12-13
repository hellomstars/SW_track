/* 4-3. MongoDB와 Mongoose */

// Mongoose 사용하기
const mongoose = require('mongoose');
const { Post } = require('./models');

async function main() {
  console.log('------게시글을 생성합니다-----');
  await Post.create([
    { title: 'first', content: 'first post' },
    { title: 'second', content: 'second post' },
  ]);

  const posts = await Post.find({});

  console.log('------게시글이 생성되었습니다-----');
  posts.map(({ title, content, createdAt }) => {
    console.log(`제목: ${title}, 내용: ${content}, 작성일자: ${createdAt}`);
  });

  console.log('------제목이 없는 게시글을 생성합니다-----');
  try {
    await Post.create({ content: 'post with no title' });
  } catch(err) {
    console.log('------게시글이 생성에 오류가 발생했습니다-----');
    console.log(err.message);
  }
}

async function cleanUp() {
  await mongoose.connection.dropDatabase();
}

mongoose.connect("mongodb://localhost:27017/simpleBoard")
  .then(() => cleanUp())
  .then(() => main())
  .catch((err) => {
    console.error("오류가 발생했습니다.", err);
  })
  .finally(() => {
    process.exit();
  });

/*
1. PostSchema를 정의합니다.
- PostSchema는 ./models/schemas/post.js 파일에 모듈로 작성합니다.
- Post는 title, content 속성을 가집니다.
- title은 String 타입으로 필수 속성입니다.
- content 또한 String 타입으로 필수 속성입니다.
- 필수속성을 정의하기 위해서는 required 옵션을 사용합니다.
- required 옵션의 사용 예는 다음과 같습니다.

{
    name: {
        type: String,
        required: true,
    },
}

// ./models/schemas/post.js에 작성

title: {
        type: String,
        required: true,
},
content: {
        type: String,
        required: true,
},

2. 정의한 Schema를 이용하여 모델을 생성합니다.
- ./models/index.js 파일의 exports.Post = 뒤에 모델을 완성합니다.
- 모델의 이름은 'Post'로 사용합니다.
- 모델 생성의 예제 코드는 다음과 같습니다.

mongoose.model('Name', Schema);

// ./models/index.js에 작성
const PostSchema = require('./schemas/post');
exports.Post = mongoose.model('Post', PostSchema);

3. 작성한 코드가 정상 동작하는지 확인합니다.
- 실행 시 모델의 정상적인 동작을 확인하는 두 개의 코드가 실행됩니다.
- 첫 번째로 게시글이 정상적으로 생성되는지 확인합니다.
- 두 번째로 제목이 없는 게시글 작성 시 오류가 발생하는지 확인합니다.
- 정상적인 출력은 다음과 같습니다.

------게시글이 생성되었습니다-----
제목: first, 내용: first post, 작성일자: Tue Nov 23 2021 14:25:45 GMT+0000 (GMT)
제목: second, 내용: second post, 작성일자: Tue Nov 23 2021 14:25:45 GMT+0000 (GMT)
------제목이 없는 게시글을 생성합니다-----
------게시글이 생성에 오류가 발생했습니다-----
Post validation failed: title: Path `title` is required.
*/



// Mongoose ODM Query
const mongoose = require('mongoose');
const { Post } = require('./models');
// 몽고디비 연결
mongoose.connect("mongodb://localhost:27017/exam_5");

async function main() {
  const posts = await Post.find({
    // 쿼리 작성하기
    author: ["andy", "bob", "kate"],
    likes: {
      $gt: 5,
      $lte: 10,
    },
    $or: [
        { category: { $exists: false } },
        { category: 'notice' },
    ]
  });
  return posts;
}

main()
  .then((posts) => {
    console.log("---검색 결과---");
    console.log(posts);
    console.log("---------------");
    return;
  })
  .catch(err => {
    console.error('에러가 발생했습니다.', err)
    return;
  })
  .finally(() => {
    process.exit();
  });

/*
1. mongoose.connect 에 몽고디비 커넥션 문자열을 추가하여 디비에 접속합니다.
접속 주소는 "mongodb://localhost:27017/exam_5" 입니다.
mongoose.connect("mongodb://localhost:27017/exam_5");

2. 다음 조건에 해당하는 게시글을 쿼리로 검색하는 코드를 작성합니다.
- 작성자는 "andy", "bob", "kate" 중에 한 명입니다.
- 좋아요("likes") 수는 5개보다 크고, 10개보다 작거나 같습니다.
- 게시글 분류("category")는 없거나 "notice" 입니다.

// Post.find()에 작성
author: ["andy", "bob", "kate"],
likes: {
$gt: 5,
$lte: 10,
},
$or: [
    { category: { $exists: false } },
    { category: 'notice' },
]

3. MongoDB에서 Document의 속성 유무를 체크하기 위해서는 $exists operator를 사용할 수 있습니다.
$exists를 사용하여 속성이 없는지를 확인하는 예제는 다음과 같습니다.
{
  status: { $exists: false },
}
*/


// Mongoose ODM Populate
const mongoose = require('mongoose');
const { Post } = require('./models');

mongoose.connect("mongodb://localhost:27017/exam_6");

async function main() {
  const posts = await Post.find({}).populate("author"); // populate 사용하기
  return posts;
}

module.exports = main;

/*
Populate를 사용하기 위해, 스키마를 선언하고 모델을 생성합니다.
이후, populate() 함수를 이용하여 reference 된 Document를 주입합니다.

1. UserSchema를 완성합니다.
- User는 name, level 속성을 갖습니다.
- name의 타입은 String이고 필수값입니다.
- level의 타입은 Number이고 필수값입니다.
- level의 값이 없을 경우 기본값은 0입니다.
- Schema 작성 시 기본값을 설정하는 예제는 다음과 같습니다.
{
    attr: {
        type: String,
        default: "Default Value",
    },
}

2. User 모델을 생성합니다.
- ./models/index.js에 User 모델을 추가합니다.
- 모듈의 export되는 이름을 User로 설정합니다.
- 모델의 이름은 'User'로 선언합니다.

3. PostSchema에 User를 reference 하도록 추가합니다.
- Post에 author 속성을 추가합니다.
- author는 필수값으로 추가합니다.
- populate()가 동작하도록 author의 타입과 ref를 정확하게 선언합니다.

4. ./index.js에 모델을 사용하여 populate를 수행하는 main() 함수의 코드를 완성합니다.
- Post.find()에 populate()를 추가하여 author가 주입되도록 코드를 완성합니다.
*/