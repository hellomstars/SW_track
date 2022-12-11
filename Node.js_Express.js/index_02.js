/* 3-2. Node.js 이해하기 */

// ES6 let, const 사용하기
let variable = 1;
const constant = 2;

console.log('variable', 1);
console.log('constant', 2);



// ES6 template string 사용하기
const animal = 'Cat';
const legs = 4;
const sound = 'meow';

const explain = `${animal} has ${legs} legs.
${animal} says "${sound}".
`;
    
console.log(explain);



// ES6 arrow function 사용하기
const add = (a, b) => {
    return `${a}+${b}=${a+b}`;
}

module.exports = add;



// ES6 class 사용하기
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    
    explain() {
        console.log(`${this.name} says ${this.sound}`)
    }
}

const duck = new Animal("duck", "quack");

module.exports = duck;



// ES6 destructing 사용하기
const duck = {
    name: "duck",
    sound: "quack",
};

const { name: newName, sound: newSound } = duck;

console.log("name", newName);
console.log("sound", newSound);

const animals = ["duck", "cat", "bear"];

const [one, two, three] = animals;

console.log("first", one);
console.log("second", two,);
console.log("third", three);



// callback 사용하기
const countDown = require('./countdown');

countDown(5, () => {
    console.log("BOOM!")
});



// prormise 작성과 사용
function adder(a, b, callback) {
    if (a == 0 || b == 0) {
        callback("no zero", null);
        return;
    }


    console.log(`${a}+${b}=${a + b}`);
    
    callback(null, a + b);
}



function handle_error(error) {
    console.log("ERROR: ", error);
}

function adder_promise(a, b) {
    return new Promise((resolve, reject) => {
        adder(a, b, (err, result) => {
            if (err) {


                /* 1. promise 에서 에러 처리하기 */
                
                reject(err);
                
                return;
            }
            /* 2. promise 에서 결과값 처리하기 */
            resolve(a + b);
        });
    });
}



function add_all(a, b, c) {
    adder_promise(a, b)
        /* 3. then 을 활용하여 result 와 c 를 add_promise 하기 */
        .then(result => {
            return adder_promise(result, c)
        })
        .then(result2 => {
            console.log(`${a}+${b}+${c}=${result2}`);
        })
        /* 4. catch 를 활용하여 promise 의 에러를 handle_error 함수로 전달하기 */
        .catch(error => handle_error(error))
}

module.exports = add_all;



// async - await 사용하기
const adder_promise = require('./promise');

function main_promise(a, b, c, d) {
    Promise.all([
        adder_promise(a, b),
        adder_promise(c, d),
    ])
    .then(([r1, r2]) => {
        return adder_promise(r1, r2);
    })
    .then((r3) => {
        console.log(`${a}+${b}+${c}+${d}=${r3}`);
    });
}

async function main(a, b, c, d) {
    const [r1, r2] = await Promise.all([
        adder_promise(a, b),
        adder_promise(c, d),
    ]);
    const r3 = await adder_promise(r1, r2);
    console.log(`${a}+${b}+${c}+${d}=${r3}`);
}

main(1,2,3,4);