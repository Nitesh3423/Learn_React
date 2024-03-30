import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  //hooks
  let [counter,setCounter]=useState(0) //give two things {counter} is varibale and {setCounter is function responsibel to change variable}
  


  //let counter = 15;
  const addValue = () => {
     setCounter(counter+1);
  };
  const removeValue=()=>{
    if(counter==0){
      setCounter(counter)
    }
    else setCounter(counter-1);
  }
  const reset=()=>{
    setCounter(counter=0)
  }

  return (
    <>
      <h1>Hare Krishna Mantra Counter</h1>  
      <h2>Counter Value:{counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <br />
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
