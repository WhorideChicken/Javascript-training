import mongoose from 'mongoose'

// defaultSchema를 정의합니다. 
const goodsSchema = new mongoose.Schema({
  goodsId: { 
    type: Number, 
    required: true, 
    unique: true 
  },
  name: { 
    type: String, 
    required: true, 
    unique: true 
  },
  thumbnailUrl: { 
    type: String, 
    required: false, 
    unique: false 
  },
  category: { 
    type: String, 
    required: false, 
    unique: false 
  },
  price: { 
    type: Number, 
    required: false, 
    unique: false 
  }
});

// 외부로 스키마 보내기
export default mongoose.model("Goods", goodsSchema);