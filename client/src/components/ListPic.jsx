import React from "react";

function ListPic(props) {
    const handleDelete = () => {
      props.delete(props.title)
    }
  return (
    <div>
        <span>{props.title}</span>
        <img src={props.url} alt={props.title} />
        <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default ListPic;
