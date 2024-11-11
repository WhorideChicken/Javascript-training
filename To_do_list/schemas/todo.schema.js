import mongoose from "mongoose";
import { type } from "os";

//value : 문자열, 필수 요소
//order : 숫자, 필수 요소
//doneAt : 날짜, 필수 X
const TodoSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: true
    },
    doneAt: {
        type: Date,
        required: false
    }
});

// 프론트엔드 서빙을 위한 코드입니다. 모르셔도 괜찮아요!
TodoSchema.virtual('todoId').get(function () {
    return this._id.toHexString();
});
TodoSchema.set('toJSON', {
    virtuals: true,
});

export default mongoose.model('Todo', TodoSchema);

