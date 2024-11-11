// app.js
import express from 'express';
import goodsRouter from './routes/goods.js';
import newsRouter from './routes/news.js';
import connect from './schemas/index.js';

const app = express();
const PORT = 3000;

//connect 실행
connect();

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

import mongoose from 'mongoose'

// defaultSchema를 정의합니다. 
const defaultSchema = new mongoose.Schema({
  defaultId: { // 이 필드는 실제 사용될 데이터의 이름입니다.
    type: Number, // 이 필드의 데이터 타입이 숫자임을 나타냅니다.
    required: true, // 이 필드가 반드시 있어야 함을 나타냅니다.
    unique: true // 이 필드의 값이 유일해야 함을 나타냅니다.
  }
});

// defaultSchema를 사용하여 'Defaults'라는 이름의 mongoose 모델을 생성합니다.
export default mongoose.model("Defaults", defaultSchema);