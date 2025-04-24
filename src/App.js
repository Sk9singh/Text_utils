import './App.css';
import React, {useState} from 'react';
//import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';

function App() {

 const [mode,setMode] = useState('light');

 const toggleMode = ()=>{
  if(mode==='light') {
    setMode('dark');
    document.body.style.backgroundColor = '#051d34';
  }
  else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
  }
 }

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="About"/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze" mode={mode}/>
    </div>
    </>
  );
}

export default App;
