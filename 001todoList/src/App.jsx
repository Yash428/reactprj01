import { useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddTask/>
    </>
  )
}

export default App
