/* 2-2. 자바스크립트의 객체와 연산 */

// 프로퍼티와 메서드 - 문자열
var str1 = "Hello World";

document.write(str1.length);
document.write(str1.charAt(0));
document.write(str1.split(" "));

   // + exapmle
var str1 = "Hi!Elice";

str1.length;  // 8
str1.charAt(1);  // i
str1.split("!");  // [Hi, Elice]



// 프로퍼티와 메서드 - 배열
var fruit = ["Apple", "Banana", "Tomato"];

document.write(fruit.length);

fruit.push("A");
fruit.unshift("B");

document.write(fruit);

fruit.pop();
fruit.shift();

document.write(fruit);

   // + example
var fruit = ["사과", "배", "포도"];

fruit.length;  //3
fruit.push("딸기");  // ["사과", "배", "포도", "딸기"]
fruit.unshift("레몬");  // ["레몬", "사과", "배", "포도", "딸기"]
fruit.pop();  // ["레몬", "사과", "배", "포도"]
fruit.shift();  // ["사과", "배", "포도"]



// 프로퍼티와 메서드 - 문자를 숫자로 변환하는 메서드
var str1 = "20.14";

document.write(parseInt(str1));
document.write(parseFloat(str1));

   // + example
parseInt("20.6");  // 20
parseFloat("20.6");  // 20.6



// 산술 연산자
document.write(20 + 10);
document.write(20 - 10);
document.write(20 * 10);
document.write(20 / 10);
document.write(20 % 10);

document.write("20" + "10");
document.write("20" - "10");
document.write("20" * "10");
document.write("20" / "10");
document.write("20" % "10");

document.write("Elice " + "Lee");



// 증감 연산자
var num = 20;

document.write(++num);

document.write(--num);

document.write(num++);
document.write(num);

document.write(num--);
document.write(num);



// 비교 연산자
document.writeln(10 == 10);
document.writeln(10 === 10);

document.writeln(10 == "10");
document.writeln(10 === "10");

document.writeln(10 !== 20);

document.writeln(10 > 20);
document.writeln(10 >= 20);
document.writeln(10 < 20);
document.writeln(10 <= 20);



// 논리 연산자
document.write(10 === 10 && 20 === 30);
document.write(10 === 10 || 20 === 30);



// 삼각형의 넓이를 구하는 함수 생성하기
// 삼각형의 넓이를 구하는 함수를 완성시켜 보세요.
function triangle(width, height) {

    return width*height/2

}

document.write(triangle(5, 7)); 