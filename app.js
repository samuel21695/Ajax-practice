// 필요한 모듈 불러오기
const express = require('express');
const app = express()

// 정적 파일 (HTML, CSS, Javascript0)을 제공하기 위해 'public' 디렉토리 설정
app.use(express.static('public'))

// API 엔드포인트 생성
app.get('/api/data', (req, res) => {
  // 이 API는 "데이터 창고"와 같습니다. 데이터를 요청하면 창고에서 데이터를 꺼내 반환합니다.
  const data = {message: 'Hello, Ajax! This is a data from the server.'}
  res.json(data);
})
