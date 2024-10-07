import Navbar from "./components/Navbar";
import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Content from "./components/Content";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import NoteState from './context/notes/NoteState';
import End from "./components/End";
import Main from "./components/Main";
import './App.css';
import Admin from "./components/Admin";
import Homeadmin from "./components/Homeadmin";
import Signupadmin from "./components/Signupadmin";
import Addcandidate from "./components/Addcandidate";

function App() {
  document.body.style.background="linear-gradient(#E2EAF4,white)";
  document.body.style.backgroundRepeat='no-repeat';
  const [progress, setprogress] = useState(0);
  const showalert = () => {
    setTimeout(() => {
      setprogress(20);
    }, 100);
    setTimeout(() => {
      setprogress(40);
    }, 200);
    setTimeout(() => {
      setprogress(60);
    }, 300);
    setTimeout(() => {
      setprogress(80);
    }, 400);
    setTimeout(() => {
      setprogress(100);
    }, 500);
  };
  const handleonClick2 = () => {
    showalert();
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar showalert={showalert} handleonClick2={handleonClick2} />
          <LoadingBar color="#000" progress={progress} />
          <Main/>
        </>
      ),
    },
    {
      path: "/home",
      element: (
        <>
          <Navbar showalert={showalert} handleonClick2={handleonClick2} />
          <LoadingBar color="#000" progress={progress} />
          <div className="container"><Content handleonClick2={handleonClick2}/></div>
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar showalert={showalert} handleonClick2={handleonClick2} />
          <LoadingBar color="#000" progress={progress} />
          <div className='container'><About/></div>
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar showalert={showalert} handleonClick2={handleonClick2} />
          <LoadingBar color="#000" progress={progress} />
          <div className='container'><Login showalert={showalert} handleonClick2={handleonClick2}/></div>
        </>
      ),
    },
    {
      path: "/admin",
      element: (
        <>
          <Navbar showalert={showalert} handleonClick2={handleonClick2} />
          <LoadingBar color="#000" progress={progress} />
          <div className='container'><Admin showalert={showalert} handleonClick2={handleonClick2}/></div>
        </>
      ),
    },
    {
      path: "/signupadmin",
      element: (
        <>
          <Navbar showalert={showalert} handleonClick2={handleonClick2} />
          <LoadingBar color="#000" progress={progress} />
          <div className='container'><Signupadmin showalert={showalert} handleonClick2={handleonClick2}/></div>
        </>
      ),
    },
    {
      path: "/homeadmin",
      element: (
        <>
          <Navbar showalert={showalert} handleonClick2={handleonClick2} />
          <LoadingBar color="#000" progress={progress} />
          <div className='container'><Homeadmin showalert={showalert} handleonClick2={handleonClick2}/></div>
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Navbar showalert={showalert} handleonClick2={handleonClick2} />
          <LoadingBar color="#000" progress={progress} />
          <div className='container'><Signup showalert={showalert} handleonClick2={handleonClick2}/></div>
        </>
      ),
    },
    {
      path: "/addcandidate",
      element: (
        <>
          <Navbar showalert={showalert} handleonClick2={handleonClick2} />
          <LoadingBar color="#000" progress={progress} />
          <div className='container'><Addcandidate showalert={showalert} handleonClick2={handleonClick2}/></div>
        </>
      ),
    },
    {
      path: "/end",
      element: (
        <>
          <Navbar showalert={showalert} handleonClick2={handleonClick2} />
          <LoadingBar color="#000" progress={progress} />
          <div className='container'><End showalert={showalert} handleonClick2={handleonClick2}/></div>
        </>
      ),
    },
  ]);
  return (
    <>
    <NoteState>
    <RouterProvider router={router}/>
    </NoteState>
    </>
  )
}
export default App;
