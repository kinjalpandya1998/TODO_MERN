import React, { useEffect, useState } from 'react';
import CreateTask from '../Modals/CreateTask';
import Card from "../Components/Card/Card.js";
import axios from "axios";

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);
   
    const toggle = () => {
        setModal(!modal);
    }

    useEffect(() => {
        axios.get('http://localhost:3001/get')
        .then(result =>setTaskList(result.data))
        .catch(err => console.log(err))
         // let arr = localStorage.getItem("taskList")
        // if(arr){
        //     let obj = JSON.parse(arr)
        //     setTaskList(obj)
        // }
    }, [taskList]);

    const saveTask = (taskObj) =>{
        axios.post('http://localhost:3001/create',{task:taskObj})
        .then(result =>console.log(result))
        .catch(err => console.log(err))
        setModal(false)
        // let tempList = taskList;
        // tempList.push(taskObj);
        // setTaskList(taskList);
        // localStorage.setItem ("taskList",JSON.stringify(tempList))
       // setModal(false)

    }

    const deleteTask = (id) => {
      axios.delete('http://localhost:3001/delete/'+id)
      .then(result =>console.log(result))
      .catch(err => console.log(err))
      // let tempList = taskList
      // tempList.splice(id, 1)
      // localStorage.setItem("taskList", JSON.stringify(tempList))
      // setTaskList(tempList)
      // window.location.reload()
    }

    const updateTask = (obj, id) => {
      axios.put('http://localhost:3001/update/'+id,{task:obj})
      .then(result =>window.location.reload())
      .catch(err => console.log(err))
      // let tempList = taskList
      // tempList[index] = obj
      // localStorage.setItem("taskList", JSON.stringify(tempList))
      // setTaskList(tempList)
      // window.location.reload()
    }


  return (
     <div className='main'>
      <header className='header text-center'> 
      <h3>My Tasks</h3></header>
      <div className="tasklist">
      <div className='p-4 mb-4'>
        <button className="button" style={{"float":"right"}} onClick={()=>setModal(true)}  ><i className="fa fa-plus"></i> Create Task</button>
     </div> 
     <div className="task-container">
        {taskList && taskList.map((task,index)=> <Card taskObj ={task} index={index} deleteTask={deleteTask} updateTask={updateTask}/>)}
     </div>
     <footer className='text-center'> <i className="fa-regular fa-copyright"></i> Lorem ipsum dolor sit amet consectetur. </footer>
    <CreateTask modal={modal} toggle={toggle} save={saveTask} />
      </div>
    </div>
  );
}

export default TodoList;
