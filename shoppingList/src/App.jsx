import { useState } from 'react'
import './App.css'

function App() {
  const [item,setItem] = useState("")
  const [qty, setQty] = useState(0)
  const [itemList,setItemList] = useState([])
  const itemAdder = (e)=>{
    e.preventDefault();
    setItemList([...itemList,{item,qty}])
    console.log(itemList);
    setItem("")
    setQty(0)
  }
  let renderTask = <li>Nothing is here</li>
  renderTask = itemList.map((t,i)=>{
    return(
      <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {t.item}
                </th>
                <td class="px-6 py-4">
                    {t.qty}
                </td>
            </tr>
  )
  })
  return (
    <>
    <div className='flex justify-center align-middle '>
      <div className='bg-pink-300 border-3 p-3 h-2/3 w-2/4 '>
          <div className='text-3xl text-purple-600 '>
            Shopping List
          </div>
          <div className='flex flex-wrap p-4'>
            <input className='bg-gray-50 border p-3 w-1/3 m-2 border-gray-300 text-gray-900 text-sm rounded-lg ' type='text' value={item} onChange={(e)=>{
              e.preventDefault()
              setItem(e.target.value);
              console.log(item);
            }} />
            <input className='bg-gray-50 border p-3 w-1/3 m-2 border-gray-300 text-gray-900 text-sm rounded-lg '  type='number' value={qty} onChange={(e)=>{
              e.preventDefault()
              setQty(e.target.value);
              console.log(qty)
            }} />
            <button className='rounded text-white bg-blue-600 p-2 h-10' onClick={itemAdder} >Add</button>
          </div>
            
            <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 rounded-s-lg">
                    Item
                </th>
                <th scope="col" class="px-6 py-3">
                    Qty
                </th>
            </tr>
        </thead>
        <tbody>
        {renderTask}
        </tbody>
    </table>
</div>
        </div>
    </div>
      
    </>
  )
}

export default App
