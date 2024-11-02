import { useState } from "react"
function App() {
  const [color ,setcolor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-200"
    style ={{ backgroundColor: color}}></div>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center  gap-3 shadow-lg bg-white py-2 px-3 rounded-3xl">
        <button className="outline-none py-1 px-4 rounded-full text-white shadow-lg"
        onClick={()=>setcolor("red")}
        style={{backgroundColor:"red"}}>Red</button>

        <button className="outline-none py-1 px-4 rounded-full text-white shadow-lg"
        onClick={()=>setcolor("green")}
        style={{backgroundColor:"green"}}>Red</button>
        
        <button className="outline-none py-1 px-4 rounded-full text-white shadow-lg"
        onClick={()=>setcolor("blue")}
        style={{backgroundColor:"blue"}}>Red</button>
        
        <button className="outline-none py-1 px-4 rounded-full text-white shadow-lg"
        onClick={()=>setcolor("purple")}
        style={{backgroundColor:"purple"}}>Red</button>
        
        <button className="outline-none py-1 px-4 rounded-full text-white shadow-lg"
        onClick={()=>setcolor("yellow")}
        style={{backgroundColor:"yellow"}}>Red</button>
        
        <button className="outline-none py-1 px-4 rounded-full text-white shadow-lg"
        onClick={()=>setcolor("pink")}
        style={{backgroundColor:"pink"}}>Red</button>
      </div>
    </div>
    </>
  )
}

export default App
