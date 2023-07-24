import React, {useState} from "react";
import axios from "axios";

function AddPics() {
  const [url, setUrl] = useState("")
  const [title, setTitle] = useState("")
  const validate = async () => { 
    const response = await axios.post('http://localhost:3000/api/blogs', {title, url})
    console.log(response)
  }
    return (
      <div className="add-pics">
        <input id="description" type="text" placeholder="add title.." onChange={(event)=>{setTitle(event.target.value)}}/>
        <input id="url" type="text" placeholder="add url.." onChange={(event)=>{setUrl(event.target.value)}}/>
        <button id="confirm" onClick={validate}>CONFIRM</button>
      </div>
    );
  }

  export default AddPics;