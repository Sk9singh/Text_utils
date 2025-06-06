import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase','success')
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase','success')
    }

    const handleClearClick = () => {
       let newText = '';
       setText(newText);
       props.showAlert('Cleared the text','success')
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopyClick = () => {
        let copyText = document.getElementById('myBox');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        document.getSelection().removeAllRanges();
        props.showAlert('Copied to clipboard','success')
    }

    const handleExtraSpaceClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Removed the extra spaces','success')
    }

   const [text,setText] = useState('');

  return (
   <>
    <div className='container' style={{color: props.mode==='light' ? 'black':'white'}}>
        <h1>{props.heading}</h1>
         <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light' ? 'white':'grey',color: props.mode==='light' ? 'black':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button> 
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>Convert to Lowercase</button> 
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaceClick}>Remove Extra Spaces</button>
    </div>
      <div className="container my-3" style={{color: props.mode==='light' ? 'black':'white'}}>
       <h2>Your Text Summary</h2>
         <p>{text.split(" ").filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
         <p>{0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length} avg Minutes to read</p>
         <h2>Preview</h2>
         <p>{text.length>0 ? text : 'Enter something in the Textbox to preview here'}</p>
      </div>
   </>
  )
}
