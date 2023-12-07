import React from "react";

const DisplayNote = (props) => {
  const handleCLick = (id) => {
    props.getId(id);
  };

  const handleUpdate = (note) => {
    props.getUpdateNoteID(note);
  };
  return (
    <div className="note" key={props.id}>
      <p className="title">{props.title}</p>
      <p className="content">{props.content}</p>
      <button onClick={() => handleCLick(props.id)}>Delete</button>
      <button style={{marginLeft: "10px"}} type="button" onClick={() => handleUpdate(props.id)}>
        Update
      </button>
    </div>
  );
};

export default DisplayNote;
