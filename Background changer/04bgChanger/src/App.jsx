import { useState } from "react"


function App() {
  const [color,setColor]=useState("white")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-grey px-3 py-2 rounded-full text-white shadow-lg">
          <button onClick={()=>setColor("red")} className="outline-none px-4 rounded-lg" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("green")} className="outline-none px-4 rounded-lg" style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("blue")} className="outline-none px-4 rounded-lg" style={{backgroundColor:"blue"}}>blue</button>
          <button onClick={()=>setColor("black")} className="outline-none px-4 rounded-lg" style={{backgroundColor:"black"}}>black</button>
          <button onClick={()=>setColor("pink")} className="outline-none px-4 rounded-lg" style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={()=>setColor("purple")} className="outline-none px-4 rounded-lg" style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={()=>setColor("yellow")} className="outline-none px-4 rounded-lg" style={{backgroundColor:"yellow"}}>Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
