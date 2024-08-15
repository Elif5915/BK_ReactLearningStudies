import { useState } from "react";
import  "./App.css";


function App() {

  const [text, setText] = useState("")
  const [message,setMessage] = useState([])
 

  const onchangeFunc = (e) => {
    setText(e.target.value)
  }

  const messageFunc= () =>{
    setMessage(prev => [...prev,text]) 
    setText('')
  }
  console.log(message,"message");
 return(

  <>
  <input value={text} onChange={onchangeFunc} type="text" placeholder="Bir şey yazınız"></input> 
  <button onClick={messageFunc}>EKLE</button>
  <div className="App">
  {
    message?.map((msg,i) => (
      <div key={i}>{msg}</div>
    ))
  }
  </div>
  </>
  
 )
}

export default App;
