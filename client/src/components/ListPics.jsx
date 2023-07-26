import React, {useState,useEffect} from "react";
import ListPic from "./ListPic.jsx";
import axios from "axios";

function ListPics() {
  const [data, setData] = useState({results : []})
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/blogs');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (title, url) => {
    console.log("title", title)

    const response = await axios.delete('http://localhost:3000/api/blogs', {title})
  }

  return (
    <div>
        <button className="refresh-data" onClick={fetchData}>Refresh Data</button>
        {data?.results?.map((element, index) => (
            <ListPic key={index} title={element.title} url={element.url} delete={handleDelete}/>
        ))}
    </div>
  );
}

export default ListPics;
