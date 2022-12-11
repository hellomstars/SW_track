/* 2-1. 자바스크립트 시작하기 */

// 변수 생성
var fruit;
fruit = "apple";
var box = "banana";

document.write(fruit);
document.write(box);

box = "tomato";

document.write(box);



// 데이터 타입 - 문자열
var str1 = "Hello World";
var str2 = "Nice to meet you";
var str3 = "She's a girl";

document.write(str1);
document.write(str2);
document.write(str3);


// 데이터 타입 - 숫자
var num1 = 10;
var num2 = 3.14;
document.write(num1+num2);



// 데이터 타입 - 함수
var sum = function(num1, num2) {
    return num1 + num2;
  }
  
  document.write(sum(10, 20));
  
  function mul(num3, num4) {
    return num3 * num4;
  }
  
  document.write(mul(3,4));


// 데이터 타입 - 배열
var fruit = ["Apple", "Banana"];

document.write(fruit);
document.write(fruit[0]);

fruit[0] = "Tomato";

document.write(fruit);


// 데이터 타입 - 객체
var student = {
    name: "Elice",
    age: 20,
    skills: ["Java", "HTML", "CSS", "JavaScript"],
    sum: function(num1,num2) {
     return num1 + num2;
    }
  }
  student.name = "park";
  
  document.write(student.name);
  document.write(student.sum(10, 20));



// 데이터 타입 - undefined, null
var str1;

document.write(str1);

var empty = null;

document.write(empty);



// 데이터 타입 - Boolean
var t= true;
var f= false;

document.write(t);
document.write(f);



// 배열 안의 배열 데이터에 접근하기
var arrTest = [
    [100, 200, 300],
    [1000, 2000, 3000],
    [1111, 2222, 3333]
];

document.write(arrTest[1][2]);  // 3000 출력