import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [Item, setItem] = useState("");
  const [qty, setQty] = useState(0);
  const [rate, setRate] = useState(0);
  const [price, setPrice] = useState(0);
  const [itemList,setItemList] = useState([])
  const [total,setTotal] = useState(0)
  const [totalQty, setTotalQty] = useState(0)

  const priceFinder = useCallback(()=>{
    console.log(qty);
    console.log(rate);
    setPrice(qty*rate);
    
  },[Item,qty,rate])
  const itemAdder = (e)=>{
    e.preventDefault()
    setItemList([...itemList,{Item,qty,rate,price}])
    setTotal(total+price)
    setTotalQty(parseInt(totalQty) + parseInt(qty))

    setItem("")
    setQty(0)
    setRate(0)
  }
  
  let renderElement = <tr>Nothing is there</tr>
  
  renderElement = itemList.map((t,i)=>{
    return (
      <tr className='even: bg-green-300 odd:bg-green-100'>
      <td>{t.Item}</td>{   }
      <td>{t.qty}</td>{   }
      <td>{t.rate}</td>{   }
      <td>{t.price}</td>{   }
    </tr>
    )  
  })
  
  useEffect(()=>{
    priceFinder()
  },[Item,qty,rate,priceFinder])
  
  return (
    <>
      <h2 className=' text-3xl bg-green-700 text-yellow-300 p-4 text-center'>Billing System</h2>
      <div className='bg-green-400 '>
        <div className=' text-green-800 p-2 font-bold font-outline-1 text-3xl text-center'>
              Sohan Kirana Store
        </div>
        <div className='flex justify-center '>
              <input className='m-3 p-1 border-1 focus:border-blue-500' type='text' value={Item} placeholder='Item' onChange={(e)=>{
                setItem(e.target.value)
              }} /> {   }
              <input className='m-3 p-1' type='number' placeholder='Quantity' value={qty===0?null:qty} onChange={(e)=>{
                setQty(e.target.value)
              }}  />{   }
              <input className='m-3 p-1' type='number' placeholder='Rate' value={rate===0?null:rate} onChange={(e)=>{
                setRate(e.target.value)
              }}  />{   }
              <input className='m-3 p-1' value={price} type='number'  readOnly placeholder='Price' />{   }
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold m-3 py-2 px-4 border border-blue-700 rounded' onClick={itemAdder}>Add</button>
        </div>
        <div className='text-2xl bg-green-700 text-yellow-300 p-2 text-center'>List</div>
        <div>
          <table className='w-full text-center  ' >
            <thead className='bg-green-500 text-xl font-bold'>
              <tr>
                <td className='px-10 py-2'>Item</td>
                <td className='px-4 py-2'>Quantity</td>
                <td className='px-4 py-2'>Rate</td>
                <td className='px-4 py-2'>Price</td>
              </tr>
            </thead>
            <tbody>
            {renderElement}
            </tbody>
            <tfoot className='bg-yellow-100 '>
              <tr className='text-2xl '>
                <td>Total:  </td>
                <td>{totalQty}</td>
                <td></td>
                <td>{total}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
