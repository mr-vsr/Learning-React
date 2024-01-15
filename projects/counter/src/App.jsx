import { useState } from 'react'
import './style.css'
function App() {
  let  [counter, setCounter] = useState(0)

  const Increment = () => {
    counter = counter + 1;
    if (counter > 20) {
      setCounter(0);
      alert("Cannot go beyond twenty!!!!");
      return;
    }
    setCounter(counter);
  }
  const Decrement = () => {
    counter = counter - 1;
    if (counter < 0) {
      setCounter(0);
      alert("Cannot be negative value!!!!");
      return;
    }
    setCounter(counter);
  }
  return (
    <div className='container'>
      <h1>Counter App</h1>
      <p>Current Value : {counter}</p>
      <button onClick={Increment}>Increase</button>
      <button onClick={Decrement}>Decrease</button>
    </div>
  )
}

export default App
