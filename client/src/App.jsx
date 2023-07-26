import './App.css';
import AddPics from './components/AddPics.jsx';
import ListPics from './components/ListPics.jsx'
import Login from './components/authentication/Login.jsx'
import React, { useState, useEffect } from "react";

function App() {
  const [authenticated, setAuthenticated] = useState(false)
  useEffect(() => {
    setAuthenticated(false)
  }, [])
  const authenticate = () => {
    setAuthenticated(true)
  }
  const renderContent = () => {
     if(authenticated) {
      return (
        <div>
          <AddPics />
          <ListPics />
        </div>
      )
    } else {
      return <Login click={authenticate}/> 
    }
  }
  return (
    <div>
      {renderContent()}
    </div>
  );
}

export default App;