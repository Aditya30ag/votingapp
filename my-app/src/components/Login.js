import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login(props) {
  const [credentials, setcredential] = useState({ email: "",aadharNumber:"", password: "" });
  const navigate = useNavigate();
  const [content, setcontent] = useState("");
  const password = document.querySelector("#exampleInputPassword1");

  const handleonClick = async (e) => {
    e.preventDefault();
    const url = "https://votingapp-zcwd.onrender.com/api/auth/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        aadharNumber: credentials.aadharNumber,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json)
    if (json.success === true) {
      localStorage.setItem("token", json.token);
      navigate("/home");
      props.showalert();
    } else {
      props.showalert();
      if(json.success1===false){
        setcontent(json.error);
      }
      password.style.border = "1px solid red";
      setcontent(json.error);
    }
  };
  const onchange = async(e) => {
    //setcredential({ ...credentials, [e.target.name]: e.target.value });
    await setcredential({ ...credentials, [e.target.name]: e.target.value });
    //password.style.border = "";
    setcontent("");
  };
  return (
    <div className="container1" style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",left: "50%",transform: "translateX(-50%)",zIndex:"10"}}>
      <div
        className="container"
        style={{
          marginTop: "100px",
          maxWidth: "500px",
          minHeight: "370px",
          border: "2px solid #EAEAEA",
          boxSizing: "border-box",
          paddingTop: "20px",
          borderRadius: "12px",
          boxShadow: "0px 10px 25px #000",
          fontWeight:"700",
          backgroundColor:"whitesmoke",//#E4F1E8
          opacity:"0.8",
        }}
      >
        <h3 style={{fontFamily:"arial",fontSmooth:"2px",fontWeight:"700",marginBottom:"20px"}}>Login into a account</h3>
        <form onSubmit={handleonClick} style={{ columnGap: "20px" }}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={onchange}
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="exampleInputaadharNumber1" className="form-label">
              AadharNumber
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputaadharNumber1"
              name="aadharNumber"
              value={credentials.aadharNumber}
              onChange={onchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={credentials.password}
              onChange={onchange}
            />
            <p style={{ color: "red" }}>{content}</p>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "0px", marginBottom: "18px" }}
          >
            Login
          </button>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <p onClick={props.handleonClick2}> Don't have an account..SignUp</p>
          </Link>
        </form>
      </div>
    </div>
  );
}
