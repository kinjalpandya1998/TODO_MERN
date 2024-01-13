import React ,{useState} from 'react';
import DeleteTask from '../../Modals/DeleteTask';
import EditTask from '../../Modals/EditTask';

const Card = ({taskObj,index,deleteTask,updateTask}) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  
  const deleteToggle = () => {
      setDeleteModal(!deleteModal);
  }
  const editToggle = () => {
    setEditModal(!editModal);
  }
  

  const handleDelete = () => {
   // deleteTask(index)
    deleteTask(taskObj._id)
  }

  const handleUpdate = (obj) => {
    // updateTask(obj, index)
    updateTask(obj,taskObj._id)
}

  return (
<div className = "card-wrapper">
        <div className = "task-holder" style={{"background-color":index%2 ===0?"#F2FDFF":"#F4F1FF"}}>
        <span className = "card-header" style={{"border-left-color":index%2 ===0?"#208597":"#7965C0"}}>{taskObj.task}</span>
             <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
            <i className = "far fa-edit light   m-2 circle-icon" onClick = {() => setEditModal(true)}></i>
             <i className="fa-regular fa-trash-can   circle-icon" onClick = {() => setDeleteModal(true)}></i>
         </div>
    </div>
    <DeleteTask modal={deleteModal} toggle={deleteToggle}  Delete = {handleDelete} />
    <EditTask modal={editModal} toggle={editToggle} update={handleUpdate} taskObj={taskObj}/>

    </div>
    
    
  );
}

export default Card;
