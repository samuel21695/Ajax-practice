// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();

// 요청을 열고 설정
// xhr.open(method, url, async)
// method: HTTP 요청 메서드를 지정합니다. 주로 "GET" 또는 "POST"를 사용합니다.
xhr.open('GET', 'https://api.example.com/data', true);

// 요청을 보내고 응답을 처리
// 서버로부터 응답을 성공적으로 받았을 때 호출됩니다.
xhr.onload = () => {
  // 200번대 상태 코드는 성공을 나타냅니다. 
  if (xhr.status >= 200 && xhr.status < 300) {
    // 성공적인 응답 처리
    let responseData = xhr.responseText;
    console.log(responseData);
  } else {
    // 오류 처리
    console.error('요청 실패');
  }
};