// 필요한 모듈 불러오기
const express = require('express');
const app = express()

// 정적 파일 (HTML, CSS, Javascript0)을 제공하기 위해 'public' 디렉토리 설정
app.use(express.static('public'))

