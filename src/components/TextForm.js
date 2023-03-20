import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("uppercase was clicked:" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase!","success");
  }
  const handleClearClick = ()=>{
    console.log("uppercase was clicked:" + text);
    let newText = " ";
    setText(newText);
  }
  const handleLoClick = ()=>{
    console.log("uppercase was clicked:" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase!","success");
  }

  const handleOnChange = (event)=>{
    console.log("on change");
    setText(event.target.value)
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("extra space removed!","success");
}

  const [text, setText] = useState('');

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
      </div>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"enter something"}</p>
    
    </div>
    </>
    // string text = "Enter Text here....';
    // setText("new value")
  )
}
