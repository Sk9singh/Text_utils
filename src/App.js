import './App.css';
import React, {useState} from 'react';
//import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';

function App() {

 const [mode,setMode] = useState('light');
 const [alert,setAlert] = useState(null);

 const showAlert = (message,type) => {
   setAlert({
    msg: message,
    type: type
   });
   setTimeout(()=>{
    setAlert(null)
   },2000);
 }


 const toggleMode = ()=>{
  if(mode==='light') {
    setMode('dark');
    document.body.style.backgroundColor = '#051d34';
    showAlert('Enabled Dark mode','success')
  }
  else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert('Enabled white mode','success')
  }
 }

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="About"/>
    <Alert alert = {alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
    </div>
    </>
  );
}

export default App;
