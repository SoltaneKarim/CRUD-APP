import React, { useState } from "react";

function Login(props) {
    const[userName, setUserName] = useState("")
    const[password, setPassword] = useState("")

  return (
    <div class="container">
        <div class="title">Login</div>
        <div class="input-box underline">
          <input type="text" placeholder="Enter Your Username" required onChange={(e) => setUserName(e.target.value)}/>
          <div class="underline"></div>
        </div>
        <div class="input-box">
          <input type="password" placeholder="Enter Your Password" required onChange={(e) => setPassword(e.target.value)}/>
          <div class="underline"></div>
        </div>
        <div class="input-box button">
          <input type="submit" name="" value="Continue" onClick={props.click} />
        </div>
    </div>
  );
}

export default Login;