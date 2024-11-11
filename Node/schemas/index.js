
import mongoose from 'mongoose';

const connect = () => {
  mongoose
    .connect(
      'mongodb+srv://wlsdndnjs:nRmP0xs4V4rSKq7G@cluster0.7ex83.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      {
        dbName: 'spa_mall', // spa_mall 데이터베이스명을 사용합니다.
      },
    )
    .catch((err) => console.log(err))
    .then(() => console.log('몽고디비 연결 성공'));
};


//사용 중 에러
mongoose.connection.on('error', (err) => {
  console.error('몽고디비 연결 에러', err);
});

export default connect;