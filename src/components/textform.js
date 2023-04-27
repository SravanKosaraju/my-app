import React,{useState} from 'react'

export default function Textform(props){
    const handleUpClick=()=>{
        console.log("Uppercase was selected")
        let newtext=text.toUpperCase()
        setText(newtext)
        props.showalert("Converted to Uppercase","success")
    }
    const handleloClick=()=>{
        console.log("Lowercase was selected")
        let newtext=text.toLowerCase()
        setText(newtext)
        props.showalert("Converted to Lowercase","success")
    }

    const handlecopy=()=>{
      var text=document.getElementById("mybox")
      text.select();
      text.setSelectionRange(0,99999);
      navigator.clipboard.writeText(text.value);
  }
    const handleonChange=(event)=>{
      console.log("Onchange")
        setText(event.target.value)
    }
    const [text,setText]=useState("Enter your Text")
    // text="nre text" //wrong way to change the state
    // setText("new text") //correct way
  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}> 
<h1>{props.heading}</h1>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" onChange={handleonChange} style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='light'?'black':'white'}} id="mybox" rows="3" value={text}></textarea>
</div>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0}className='btn btn-primary mx-1 my-1' onClick={handleloClick}>Convert to Lowercase</button>
<button disabled={text.length===0}className='btn btn-primary mx-1 my-1' onClick={handlecopy}>Copy Text</button>
    </div>
    <div className='container my-2' style={{color:props.mode==='light'?'black':'white'}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words,{text.length} characters</p>
      <p>{0.008*text.split(/\s+/).length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
  </>
  )
}


