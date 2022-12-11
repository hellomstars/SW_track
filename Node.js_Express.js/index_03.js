/* 3-3. NPM과 모듈 */

// npm init 사용하기
/* 프로젝트를 package name을 myapp, version을 0.0.1, description을 my first app, 나머지는 기본값으로 설정
package name : (project_file) myapp
version : (1.0.0) 0.0.1
description : my first app
entry point : (index.js)
test command :
git repository :
keywords:
author:
license : (ISC)
*/



// 모듈 작성하기
const counter = require('./counter');

for (let i = 0; i < 10; i++) {
    console.log(counter());
}



// 모듈 사용하기
const module1 = require('./module1');
const module2 = require('./module2');
const data = require('./data');
const funcModule = require('./funcModule');

console.log(
    module1,
    module2,
    data.name,
    /* funcModule 사용 */
    funcModule()
);