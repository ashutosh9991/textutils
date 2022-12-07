import React ,{useState} from 'react'

export default function Textform(props) {
    const [text,setText]=useState('Enter text here');
    const handleOnChange = (event)=>{
    //  console.log("on change");
     setText(event.target.value);
    }
    const handleUpClick = ()=>{
    //  console.log("Uppercase is clicked");
     let newtext=text.toUpperCase();
     setText(newtext)
     props.showAlert('Converted to uppercase','success'); 
    }
    const handleLoClick = ()=>{
    //  console.log("Uppercase is clicked");
     let newtext=text.toLowerCase();
     setText(newtext)
     props.showAlert('Converted to lowercase','success');
    }
    const handleClear = ()=>{
    //  console.log("Uppercase is clicked");
     let newtext="";
     setText(newtext)
     props.showAlert('Content cleared','success');
    }
  return (
    <div>
<div className="mb-3" style={{color : props.mode==='dark'?'white':'black'}}>
    <h2>{props.heading}</h2>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="10" style={{
    backgroundColor: props.mode==='dark'?'#323232':'white' , color : props.mode==='dark'?'white':'black'
  }} ></textarea>
  <button className="btn btn-dark my-2 mx-1" onClick={handleUpClick}  style={{
    backgroundColor: props.mode==='dark'?'black':'white' , color : props.mode==='dark'?'white':'black'}}>Convert to Uppercase</button>
  <button className="btn btn-dark my-2 mx-1" onClick={handleLoClick}  style={{
    backgroundColor: props.mode==='dark'?'black':'white' , color : props.mode==='dark'?'white':'black'}}>Convert to Lowercase</button>
  <button className="btn btn-dark my-2 mx-1" onClick={handleClear}  style={{
    backgroundColor: props.mode==='dark'?'black':'white' , color : props.mode==='dark'?'white':'black'}}>Clear</button>
</div>
<div style={{color : props.mode==='dark'?'white':'black'}}>
    <h2>Text Summary</h2>
    <p>{text.length==0?0:text.split(" ").length} Words and {text.length} Characters</p>
    <p>{text.length==0?0:0.008*text.split(" ").length} Minute read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'write sameting'}</p>
</div>
    </div>
  )
}
