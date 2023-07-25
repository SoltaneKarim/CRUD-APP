import React from "react";

function ListPic(props) {
    const handleDelete = () => {
      props.delete(props.title)
    }
  return (
    <div className="container-list-pic">
        <span>{props.title}</span>
        <img src={props.url} alt={props.title} />
        <button  className="button-delete" onClick={handleDelete}>DELETE</button>
        <button className="button-update">UPDATE</button>
    </div>
  );
}

export default ListPic;
