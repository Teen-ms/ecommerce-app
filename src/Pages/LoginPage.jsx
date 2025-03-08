import React, { useState } from "react";
// import { json } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const navigate = useNavigate();
  const [loginvalue, setLogivalue] = useState({
    username: "",
    password: "",
  });

  const changehandler = (e) => {
    const name = e.target.username;
    const value = e.target.value;
    setLogivalue((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const submitHandler=(e)=>{
   e.preventDefault();
   console.log(loginvalue)
   localStorage.setItem('token', json.stringify(loginvalue)); 
   alert("login Succesfully")
   navigate("/")
  }

  return (
    <>
        <div className="login-page">
          <div className="form">
            <form className="login-form" onSubmit={submitHandler}>
              <input type="text" name="username" placeholder="username" value={loginvalue.name} onChange={changehandler}/>
              <input type="password"   name="password"  placeholder="password" value={loginvalue.value} onChange={changehandler}/>
              <button className="bg-gray-900 ">login</button>
              <p class="message text-center"><br></br>
                <a href="#" className="mt-20 mr-20">Create an account</a>
              </p>
            </form>
          </div>
        </div>
        </>
  );
}
export default LoginPage;
