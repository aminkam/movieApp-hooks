import React, { useState } from "react";
import { FaRandom } from "react-icons/fa";
import Modal from "react-modal";
import StarRating from "./StarRating";

const Add = ({ add }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState(1);
  const [image, setImage] = useState("");
  //handle the rating;
  let handleRating = (x) => {
    setRating(x);
  };
  //handle Submit
  let handleSubmit = (e) => {
    e.preventDefault();
    let newone = { id: Math.random(), name, image, date, rating };

    add(newone);
    setRating(1);
    setName("");
    setDate("");
    setImage("");
    closeModal();
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      
    },
  };
  Modal.setAppElement("#root");

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
   <div className="modall">  
     <div >
      <button className="amin" onClick={openModal}>Movie Add</button>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        
      >
        <form onSubmit={handleSubmit} className="form">
          <div className="mov"></div>
          <label htmlFor="">Movie Name :</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="">Movie Url :</label>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <div className="rat">
          <label htmlFor="">Rating : </label>
          <StarRating rating={rating} handleRating={handleRating} className="sam" />
          </div>
         
          <label htmlFor="">Movie Date :</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div className="but">
            <button type="submit">Save</button>
            <button onClick={() => closeModal()}>Cancel</button>
          </div>
        </form>
      </Modal>
      </div>
     
    </div>
    
    
  );
};

export default Add;
