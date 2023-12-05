import { useState,useCallback, useEffect , useRef} from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(0);
  const [nAllow,setnAllow] = useState(false);
  const [cAllow, setcAllow] = useState(true);
  const [pwd,setPwd] = useState("");
const pwdRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(nAllow) str+="0123456789"
    if(cAllow) str+="!@#$%^&*-_=+[]{}~`"
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass = pass + str.charAt(char);
    }
    setPwd (pass)
  }, [length,nAllow,cAllow,setPwd])

  const copyPassswordToClipboard = useCallback(()=>{
    pwdRef.current?.select();
    pwdRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(pwd);
  },[pwd])

  useEffect(()=> {
    passwordGenerator()
  },[length,nAllow,cAllow,passwordGenerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-9 text-orange-500 bg-gray-700'>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={pwd} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref = {pwdRef}/>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ' onClick={copyPassswordToClipboard} >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer'  onChange={(e)=>{setLength(e.target.value)}}/>
          <label> Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={nAllow} id="noinput" onChange={()=>{
            setnAllow((p) =>!p);
          }} />
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={cAllow} id="cinput" onChange={()=>{
            setcAllow((p) =>!p);
          }} />
          <label>Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
