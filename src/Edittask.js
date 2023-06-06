import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { edit ,filt } from "./Redux/action";


const Edittask = ({el}) => {
  const [modalIsOpen , setIsOpen] = useState(false);
  const [description , setDescription] = useState(el.description);
  const [isDone , setIsDone] = useState(el.isDone);
  const Dispatch = useDispatch();
  console.log(el.id,"hhhhh")
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const editt = () => {
    const newtask={
  
     description,
     
      
  };
  Dispatch(edit({...el,description:description}));
  closeModal();
}
const delt = () => {
  
  Dispatch(filt(el.id));
 
}

  return ( 
    <div>
      <div >
        <div className="Add-btn-container">
          <div className="btn-play" onClick={openModal}>
            <span>
              {" "}
              <ion-icon className="icon" name="play"></ion-icon>{" "}
            </span>
           <p className="karim"> edit</p>
          </div>
          <Modal
            className="add-modal"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            <h1 className="addMovie-h1">Add Task</h1>
            <form>
              <label>Description</label>
              <input
                type="text"
                name="name"
                
                value={description}
                onChange={(event) =>setDescription(event.target.value)}
              />
              <label>IsDone</label>
              <input
                type="text"
                name="name"
                
                value={isDone}
                onChange={(event) =>setIsDone(event.target.value)}
              />
            </form>
            <button className="Modal-btn" onClick={editt}>
              Submit
            </button>
            
          </Modal>
          <button onClick={delt}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Edittask;
