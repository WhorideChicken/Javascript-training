import express from "express";

//익스프레스의 라우터 생성
const router = express.Router();

const goods = [
    {
      goodsId: 1,
      name: '상품 1',
      thumbnailUrl:
        'https://cdn.pixabay.com/photo/2016/09/07/19/54/wines-1652455_1280.jpg',
      category: 'drink',
      price: 6.2,
    },
    {
      goodsId: 2,
      name: '상품 2',
      thumbnailUrl:
        'https://cdn.pixabay.com/photo/2014/08/26/19/19/wine-428316_1280.jpg',
      category: 'drink',
      price: 0.11,
    },
    {
      goodsId: 3,
      name: '상품 3',
      thumbnailUrl:
        'https://cdn.pixabay.com/photo/2016/09/07/02/12/frogs-1650658_1280.jpg',
      category: 'drink',
      price: 2.2,
    },
    {
      goodsId: 4,
      name: '상품 4',
      thumbnailUrl:
        'https://cdn.pixabay.com/photo/2016/09/07/02/11/frogs-1650657_1280.jpg',
      category: 'drink',
      price: 0.1,
    },
  ];

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


//등록 : POST
//POST 메서드의 경우 클라이언트가 전달하는 데이터를 수신해야합나디, 이때 클라이언트가 전달하는
//데이터는 Express.js에서 req.body로 접근하여 사용할 수 있습니다.
//하지만 Express.js에서는 req.body에 접근하기 위해서는 Body Parser라는 미들웨어를 적용해야합니다.
//Body Parser는 클라이언트가 전송하는 데이터를 해석하여 req.body 객체로 반들어주는 역할을합니다.
router.post('/goods',(req, res)=>{
    //1.name, thun, catergory, price

    const {name, thumbnailUrl, category, price} = req.body;
    const goodsId = goods[goods.length-1].goodsId +1;

    const goodsItem ={
        goodsId,
        name,
        thumbnailUrl,
        category,
        price
    }

    goods.push(goodsItem);

    return res.status(201).json({
        goods : goodsItem
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