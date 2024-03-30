import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
function App() {
  const [count, setCount] = useState(0);
  let myobj={
    username:"Nitesh",
    age:21
  }
  let newArr=[1,2,2,3,4];
  return (
    <>
      <h1 className="bg-green-400 text-black p4 rounded-xl mb-4">Tailwind test</h1>
      <Card username="chai Aur Code" btnText="click Me"/>
      <Card username="Nitesh" />
    </>
  );
}

export default App;
