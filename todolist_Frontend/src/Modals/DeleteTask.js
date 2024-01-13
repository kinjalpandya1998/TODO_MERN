import React from 'react';
import {  Modal, ModalBody } from 'reactstrap';


const DeleteTask = ({modal,toggle,Delete}) => {
  return (
    <div>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
        <i className="fa-regular fa-trash-can deleteIcon"></i>
        <p class="text-center pt-3 fw-bold fs-30"> Are you sure you want to delete selected contacts?</p>
        </ModalBody>
        <div className='text-center mb-3'>
          <button className='button'  onClick={Delete}>
          Delete
          </button>{' '}
          <button className='buttoncancle' onClick={toggle}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default DeleteTask;
