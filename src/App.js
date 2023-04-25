// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/textform';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import React from 'react'
function App() {
  const [mode,setmode]=useState("light")
  const[alert,setalert]=useState(null)
  
  //type=alert type(warning,success,danger,normal)
  const showAlert=(message,type) =>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const rmbodyclasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }
  const togglemode=(cls)=>{
    rmbodyclasses()
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='grey'
      showAlert("Dark Mode Has been Enabled","success")
      document.title='React App-Dark'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light Mode Has been Enabled","success")
      document.title='React App-Light'
    }
  }
  return (
    <>
        <Router>
      <Navbar title="My-App" About="About Us" mode={mode} togglemode={togglemode}/>  
      <Alert alert={alert}/>
      <div className='container my-3'>
      <Routes>
        <Route  path="/" element={<Textform showalert={showAlert} heading="Enter the text to analyse"  mode={mode}/> } />
           {/* <Textform showalert={showAlert} heading="Enter the text to analyse"  mode={mode}/>   */}
        <Route exact path="/About" element={<About mode={mode}/>}/> 
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
