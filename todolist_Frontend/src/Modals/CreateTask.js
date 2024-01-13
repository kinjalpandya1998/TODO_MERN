import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({modal, toggle, save}) => {
    const [task, setTask] = useState("");
   
    const handleChange = (e) =>{
        const Task =e.target.value;
        setTask(Task);
    } 

    const handleSave = () => {
       let taskObj = task;
       save(taskObj)
    }

  return (
    <div>
       <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader>Create List</ModalHeader>
            <ModalBody>
            <form>
                <div className="form-group">
                <label>To-Do List</label>
                  <textarea name="Task" rows="5" className='form-control' placeholder='Details' value={task} onChange={handleChange}required/>
                </div>
            </form>
            </ModalBody>
            <ModalFooter>
            <button className='button'onClick={handleSave}>
               Submit
            </button>{' '}
            <button className='buttoncancle' onClick={toggle}>
                Cancel
            </button>
            </ModalFooter>
      </Modal>
    </div>
  );
}

export default CreateTask;
