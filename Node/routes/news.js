import express from "express";

const router = express.Router();

//status : 200 -> 성공했을 때 status 값
router.get('/news',(req, res)=>{
    return res
    .status(200)
    .send('뉴스 목록 조회 API입니다.');
});

// :newsId -> 경로 변수입니다. req.params를 통해 사용할 수 있고
//해당 데이터를 params 변수에 할당하여, 그중 newsId만을 따로 추출하여 사용하도록 구현 할 수 있습니다.
//이 API는 클라이언트로 받은 newId를 서버 콘솔에 출력한 후 결과를 JSON 형태로 반환합니다.
//localhost:3000/api/news/여기 
//즉 /뒤에 파라메타를 던져주면 아래의 get으로 해당 파라메터로 던져주게 되고 
//newsId와 매칭 되는 req.params에 할당이 됩니다.
router.get('/news/:newsId',(req, res)=>{

    const params = req.params;
    const newID = params.newsId;

    console.log("클라이언트로 부터 받은 뉴스 ID :", newID);

    return res.status(200).json({
        data : '뉴스 세부 조회 API 입니다'

    });
});
export default router;