import React, { useState , useEffect} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({modal, toggle,taskObj, update}) => {
    const [task, setTask] = useState("");
   
    useEffect(() => {
        setTask(taskObj.task)
    },[taskObj.task])

    const handleChange = (e) =>{
        const Task =e.target.value;
        setTask(Task);
    } 

    const handleUpdate = () => {
       let taskObj = task;
       update(taskObj)
    }

  return (
    <div>
       <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader>Edit List</ModalHeader>
            <ModalBody>                 
            <form>
                <div className="form-group">
                <label>To-Do List</label>
                    <textarea name="Task" rows="5" className='form-control' placeholder='Details' value={task} onChange={handleChange}required/>
                </div>
            </form>
            </ModalBody>
            <ModalFooter>
            <button className='button' onClick={handleUpdate}>
               Update
            </button>{' '}
            <button className='buttoncancle' onClick={toggle}>
                Cancel
            </button>
            </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditTask;
