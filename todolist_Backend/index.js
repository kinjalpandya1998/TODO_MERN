import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoListModel from "./Models/TodoList.js";


const app = express();
app.use(cors()) 
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/TodoDB')

//view
app.get('/get', (req, res) => {
    todoListModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))

})

//Add New
app.post('/create', (req, res) => {
    const task = req.body.task;
    todoListModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))

})

//Update
app.put('/update/:id',(req,res)=>{
    const {id} = req.params;
    const task = req.body.task;

    todoListModel.findOneAndUpdate({_id: id},{
        $set:{task:task}})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})


//Delete
app.delete('/delete/:id',(req,res)=>{
    const {id} = req.params;
    todoListModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(3001,()=>{
    console.log("server is Running on port 3001");
})
