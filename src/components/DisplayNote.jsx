import React from "react";

const DisplayNote = (props) => {
  const handleCLick = (id) => {
    props.getId(id);
  };

  const handleUpdate = (id) => {
    props.getUpdateNoteID(id);
  };
  return (
    <div className="note" key={props.id}>
      <p className="title">{props.title}</p>
      <p className="content">{props.content}</p>
      <button onClick={() => handleCLick(props.id)}>Delete</button>
      <button
        style={{ marginLeft: "10px" }}
        type="button"
        onClick={() =>
          handleUpdate({ content: props.content, title: props.title })
        }
        id={props.id}
      >
        Edit
      </button>
    </div>
  );
};

export default DisplayNote;
