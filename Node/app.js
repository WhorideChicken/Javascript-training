// app.js
import express from 'express';
import goodsRouter from './routes/goods.js';
import newsRouter from './routes/news.js';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//api주소로 들어오게 되면 goodsRouter에 있는 함수들을 조회하라라는 뜻
app.use('/api',[goodsRouter, newsRouter]);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});