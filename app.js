// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();

// 요청을 열고 설정
// xhr.open(method, url, async)
// method: HTTP 요청 메서드를 지정합니다. 주로 "GET" 또는 "POST"를 사용합니다.
xhr.open('GET', 'https://api.example.com/data', true);
