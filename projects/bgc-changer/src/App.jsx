import { useState } from "react"
import './index.css'


function App() {
  const [color, setColor] = useState("black");
  return (
    <div className="main-container" style={{ backgroundColor: color}}>
      <div className="btn-container ">
        <button onClick={() => setColor("red")} style={{ backgroundColor: "red" }}>Red</button>
        <button onClick={() => setColor("green")} style={{ backgroundColor: 'green' }}>Green</button>
        <button onClick={() => setColor("yellow")} style={{ backgroundColor: "yellow" }}>Yellow</button>
        <button onClick={() => setColor("olive")} style={{ backgroundColor: "olive" }}>Olive</button>
        <button onClick={() => setColor("purple")} style={{ backgroundColor: "purple" }}>Purple</button>
        <button onClick={() => setColor("lavender")} style={{ backgroundColor: "lavender" }}>Lavender</button>
        <button onClick={() => setColor("orange")} style={{ backgroundColor: "orange" }}>Orange</button>
      </div>
    </div>
  )
}

export default App
