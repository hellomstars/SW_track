/* 2-3. 자바스크립트 제어문 */

// 조건문 - else if
var a = 20;
var b = 40;
var c = 60;

if ( a > b ) { 
    document.writeln("a > b");
} 

else if ( b > c ) { 
    document.writeln("b > c");
} 

else if ( a < c ) { 
    document.writeln("a < c");
} 

else if ( b < c ) { 
    document.writeln("b > c");
} 

else { 
    document.writeln("모든 조건을 만족하지 않는다.");
}



// 반복문 - while
var num = 0;

while (num < 10) {
    document.write(num);
    num++;
}



// 반복문 - for
for(var i = 1; i < 10; i++) {
    document.write(2 * i);
}



// 문자열을 거꾸로 출력하는 함수 구현하기
function reverse(str){                        
    var reverStr = "";                    
    for(var i = str.length-1; i>=0; i--) {    
        reverStr = reverStr + str.charAt(i); 
    }
    return reverStr;
}
document.write(reverse("Nice to meet you"));



// 사용자가 입력한 숫자에 대응하는 구구단 만들기
function timesTable(num) {
    for(var i = 1; i < 10; i++ ) {
        document.write(num)
        document.write(" x ");
        document.write(i);
        document.write(" = ");
        document.write(num * i);
        document.write("<br/>");
    }
}

timesTable(2); // 2단만 출력
timesTable(3); // 3단만 출력