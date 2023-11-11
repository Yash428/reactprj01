import { useState } from 'react'

import './App.css'

function App() {

  let [counter,setCounter] = useState(15)
  function add()
  {
    if(counter<20){
      counter =counter+1;
      setCounter(counter)
    }
  }
  function sub()
  {
    if(counter >0){
      counter = counter-1;
      setCounter(counter)
    }
    
  }
  return (
    <>
      <h1>value: {counter}</h1>
      <button onClick={add}> increment</button>
      <br />
      <button onClick={sub}> decrement</button>
    </>
  )
}

export default App
