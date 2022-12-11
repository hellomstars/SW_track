//  window.onload를 사용, HTML 문서가 로드될 때 이벤트 핸들러가 작동
window.onload = 

    // "페이지가 열렸습니다" 문구 띄우는 함수
    function() {
        // 아이디가 "text"인 요소 선택
        var text = document.getElementById("text"); 
        text.innerHTML = "페이지가 열렸습니다";
    };