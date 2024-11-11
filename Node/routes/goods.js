import express from "express";
import Goods from "../schemas/goods.js";
import mongoose from "mongoose";

//익스프레스의 라우터 생성
const router = express.Router();

  router.get('/goods/:goodsId',(req, res)=>{
    let params = req.params.goodsId;
    //해당하는 값을 숫자로 변환해주기 위해 + 기호
    const findGoods = goods.find((oneGoods)=> oneGoods.goodsId === +params);

    return res.status(200).json({"goods" : findGoods});
  });


  router.get('/goods',(req, res)=>{
    return res.status(200).json({
        goods : goods});
  });



router.post('/goods',async (req, res)=>{
    //1.name, thun, catergory, price

    const { goodsId, name, thumbnailUrl, category, price} = req.body;

    //DB에 해당 굿즈가 있는지 체크 exec(); -> promise를 반환해서 비동기 처리하기 위해 실행 : 데이터 생성 때는 사용 X, 조회 때만 사용
    const goods = await Goods.find({goodsId}).exec();

    //find는 전체에서 서치하는거라 배열을 반환합니다 length로 체크
    if(goods.length){
      return res.status(400).json({
        success : false,
        errorMessage : "이미 등록 된 상품입니다."
      });
    }
    
    const creategoodsItem = await Goods.create({
        goodsId,
        name,
        thumbnailUrl,
        category,
        price
    });


    return res.status(201).json({
        goods : creategoodsItem
    });

});


//localhost:3000/api/GET
router.get('/', (req, res) => {
    res.json("default url for goods.js GET Method");
});

//localhost:3000/api/about GET
router.get('/about', (req, res) => {
    res.json("goods.js about GET Method");
});



//router 변수를 노출
export default router;