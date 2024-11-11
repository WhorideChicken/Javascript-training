import express from 'express';
import connect from './schemas/index.js';
import todoRouter from './routes/todos.router.js';

const app = express();
const PORT = 3000;

connect();
//Express에서 req.body에 접근하여 body 데이터를 사용할 수 있도록 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//프론트 파일 service하는것
//./assets 걍러에 있는 파일을 아무런 가공 없이 그대로 전달해주는 미들웨어
//자동으로 index.html 파일이 열리도록 자동으로 되어있다 경로에 파일이름을 붙이면 해당 파일이 열린다.
app.use(express.static('./assets'));

const router = express.Router();

router.get("/", (req, res) => {
    return res.json({ message: " hi" });
});

app.use('/api', [router, todoRouter]);

app.listen(PORT, () => {
    console.log(PORT, '포트로 서버가 열렸어요!');
});