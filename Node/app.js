// app.js
import express from 'express';
import goodsRouter from './routes/goods.js';
import newsRouter from './routes/news.js';

const app = express();
const PORT = 3000;

//json 형태로 서버에 body데이터를 전달하면 req.body에 데이터를 변환해서 넣어준다.
app.use(express.json()); 
//from content type에서 body 데이터를 전달하면, req.body에 데이터를 변환해서 넣어 전달한다
app.use(express.urlencoded({extended : true}));

app.use('/api',[goodsRouter, newsRouter]);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//api주소로 들어오게 되면 goodsRouter에 있는 함수들을 조회하라라는 뜻


app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});