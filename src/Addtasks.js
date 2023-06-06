import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { addtask } from "./Redux/action";

const Addtasks = () => {
  const [modalIsOpen , setIsOpen] = useState(false);
  const [description , setDescription] = useState("");
  const [isDone , setIsDone] = useState("");
  const Dispatch = useDispatch();
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const add = () => {
    const newtask={
    id: Math.random(),
     description,
      isDone
  };
  Dispatch(addtask(newtask));
  closeModal();
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
           <p className="karim"> +</p>
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
                placeholder=""
                onChange={(event) =>setDescription(event.target.value)}
              />
              <label>IsDone</label>
              <input
                type="text"
                name="name"
                placeholder="yes or no?"
                onChange={(event) =>setIsDone(event.target.value)}
              />
            </form>
            <button className="Modal-btn" onClick={add}>
              Submit
            </button>
            
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Addtasks;
