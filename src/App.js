import './App.css';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';

function App() {
  return (
    <>
    <Navbar title="TextUtils" about="About"/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze"/>
     <About/>
    </div>
    </>
  );
}

export default App;
