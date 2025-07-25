import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, settext] = useState("");

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
  }

  const handleLowClick = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
  }

  const handleClearClick = () => {
    let newtext = "";
    settext(newtext);
  }

  const handleOnChange = (event) => {
    settext(event.target.value);
  }

  const copyText = () => {
    let text = document.querySelector("textarea");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const wordCount = (text) => {
    return text.trim().split(/\s+/).length;
  }

  return (
    <>
      <div className="alert alert-success" role="alert" style={{display: props.alert ? "block" : "none"}}>
        <div>{props.alert}</div>
      </div>
      <div className="container my-3">
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
          <textarea class="form-control" value={text} onChange={handleOnChange}  id="exampleFormControlTextarea1" rows="8"></textarea>
          <button type="button" className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
          <button type="button" className="btn btn-primary my-2 mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
          <button type="button" className="btn btn-primary my-2 mx-1" onClick={handleClearClick}>Clear Text</button>
          <button type="button" className="btn btn-primary my-2 mx-1" onClick={copyText}>Copy Text</button>
        </div>
        <div>
          <h2>Text Summary</h2>
          <p>{wordCount(text)} words {text.length} characters.</p>
          <p>{0.008 * wordCount(text)} min</p>
        </div>
      </div>
    </>
  )
}
