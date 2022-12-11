/* 2-4. DOM과 이벤트 */

// DOM 요소의 선택
var selectedTagName = document.getElementsByTagName("div"); 
var selectedId = document.getElementById("banana");
var selectedClassNameS = document.getElementsByClassName("vegetable"); 
var selectedNameS = document.getElementsByName("red"); 

document.write(selectedTagName);
document.write(selectedId);
document.write(selectedClassNameS);
document.write(selectedNameS);



// DOM 요소의 스타일 변경
var selectedId = document.getElementById("apple");
selectedId.style.color = "red";  

var selectedId = document.getElementById("banana");
selectedId.style.color = "yellow";
   // selectedItem.style.color ="변경할 내용" > 선택된 요소의 색깔 변경



// DOM 요소의 내용 변경
var selectedId = document.getElementById('apple');
selectedId.innerHTML = 'strawberry'; 

var selectedId = document.getElementById('onion');
selectedId.innerHTML = 'garlic'; 
   // selectedItem.innerHTML = "변경할 내용" > 선택된 요소의 내용 변경



// 노드의 값 접근 - 이름
var node1 = document.childNodes[1];
var node2 = node1.childNodes[2];
var node3 = node2.childNodes[1];

document.write(node1.nodeName);
document.write(node2.nodeName);
document.write(node3.nodeName);

console.log(node2.childNodes);



// 노드의 값 접근 - 값
var apple_node = document.getElementById("apple");
apple_node.firstChild.nodeValue = "apple_pie";



// 노드의 값 접근 - 타입
var apple_node = document.getElementById('apple').childNodes[0];
var apple_node_value = apple_node.nodeValue;
var apple_node_type = apple_node.nodeType;

document.write(apple_node_value+'\n');
document.write(apple_node_type);



// 이벤트(event) 핸들러 1
   // window.onload를 사용, HTML 문서가 로드될 때 이벤트 핸들러가 작동
window.onload = 

    // "페이지가 열렸습니다" 문구 띄우는 함수
    function() {
        // 아이디가 "text"인 요소 선택
        var text = document.getElementById("text"); 
        text.innerHTML = "페이지가 열렸습니다";
    };



// 이벤트(event) 핸들러 2
var carrot_btn = document.getElementById("carrot"); 

function showText() {
    document.getElementById("text").innerHTML = "토끼가 나타났어요!!";
};

carrot_btn.addEventListener("click", showText);  
   // 대상객체.addEventListener(이벤트명, 실행할이벤트핸들러, 이벤트전파방식)


// 누르면 바뀌게
var target = document.getElementById("btn");

function changeButtonOnclick() {
  target.classList.add("changeColor");
  target.innerText = "버튼 클릭 성공!";
}

target.addEventListener("click", changeButtonOnclick);