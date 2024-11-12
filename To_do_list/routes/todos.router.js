import express from "express";
import Todo from "../schemas/todo.schema.js";
import Joi from "joi";
import { Schema } from "mongoose";
const router = express.Router();

const createSchema = Joi.object({
    value: Joi.string().min(1).max(50).required()
});

//할일 등록 API
//할일 등록 ; DB 조회를 위해 async 사용
router.post("/todos", async (req, res) => {
    //1. 클라이언트로 부터 받아온 value 데이터를 가져온다

    try {
        const validation = await createSchema.validateAsync(req.body);
        //2. 해당하는 마지막 order 데이터를 조회한다.
        //한재의 데이터만 조회한다. : order라는 필드를 기준으로 -를 붙이면 내림 차순 안붙이면 오름 차순
        const todoMaxOrder = await Todo.findOne().sort("-order").exec();
        const { value } = validation;


        //3. 만약 존재한다면 현재해야할일을 +1 하고 없으면 1로 할당
        const order = todoMaxOrder ? todoMaxOrder.order + 1 : 1;

        //4. 할일 등록
        const todo = new Todo({ value, order });
        await todo.save(); //실제 DB에 저장하는 생위

        //5. 클라이언트에 반환
        return res.status(201).json({ todo: todo });
    }
    catch (error) {
        if(error.name === "ValidationError")
        {
            return res.status(400).json({
                errorMessage: error.message
            });    
        }

        //500번은 서버에 문제가 있을 때 이슈
        return res.status(500).json({
            errorMessage: error.message
        });
    }

});


//해야할일 목록 조회
router.get("/todos", async (req, res) => {
    const todolist = await Todo.find().sort("-order").exec();

    if (todolist.length) {
        return res.status(200).json({
            totolist: todolist
        })
    }
    else {
        return res.status(404).json({
            message: "리스트가 없습니다."
        })
    }
})

//업데이트 : 할일 순서 변경하기
router.patch("/todos/:todoId", async (req, res) => {
    const { todoId } = req.params;
    const { order, done, value } = req.body;

    const currenttodo = await Todo.findById(todoId).exec();

    if (!currenttodo) {
        return res.status(404).json({
            message: "해당 데이터가 없습니다"
        })
    }

    //order가 있을 경우만
    if (order) {
        const targetTodo = await Todo.findOne({ order }).exec();
        if (targetTodo) {
            targetTodo.order = currenttodo.order;
            await targetTodo.save();
        }
        currenttodo.order = order;
    }

    //done을 넘겨 받고 true면 현재 시간을 넣는다.
    if (done !== undefined) {
        //시간은 한국시간대가 아니라 UTC(협정 세계시)를 기준으로 설정 된다.
        //AWS에 올리면 서버를 국가별로 다르게 둘 수 있는데 서버별 시간이 다를 수 있어서 UTC로 맞추자(한국으로 맞추면 문제가 있을 수 있다.)
        currenttodo.doneAt = done ? new Date() : null;
    }

    if (value !== undefined) {
        currenttodo.value = value;
    }

    await currenttodo.save();

    return res.status(200).json({});
});

//삭제
router.delete("/todos/:todoId", async (req, res) => {
    const { todoId } = req.params;
    const currenttodo = await Todo.findById(todoId).exec();

    if (!currenttodo) {
        return res.status(404).json({
            message: "해당 데이터가 없습니다"
        });
    }

    await Todo.deleteOne({ _id: todoId });
    return res.status(200).json({});
});
export default router;