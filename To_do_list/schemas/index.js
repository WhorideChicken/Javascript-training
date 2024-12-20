import mongoose from 'mongoose';

const connect = () => {
  mongoose
    .connect(
      // 빨간색으로 표시된 부분은 대여한 ID, Password, 주소에 맞게끔 수정해주세요!
      'mongodb+srv://wlsdndnjs:nRmP0xs4V4rSKq7G@cluster0.7ex83.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      {
        dbName: 'todo_memo',
      },
    )
    .then(() => console.log('MongoDB 연결에 성공하였습니다.'))
    .catch((err) => console.log(`MongoDB 연결에 실패하였습니다. ${err}`));
};

mongoose.connection.on('error', (err) => {
  console.error('MongoDB 연결 에러', err);
});

export default connect;