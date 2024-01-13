import mongoose from "mongoose";

const TodoListSchema = new mongoose.Schema({
    task : String
})

const todoListModel = mongoose.model("task",TodoListSchema)

export default todoListModel
