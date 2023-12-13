import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-orange-500 text-center'>Calculator</h1>
      <div className=''>
        <div>
            <input type='' />
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default App
