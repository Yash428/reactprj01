import React, { useState } from 'react'
import AllTask from './AllTask'

function AddTask() {
    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState([])
    const insertIt = (e) =>{
        e.preventDefault()
        console.log(task);
        setTaskList([...taskList, {task}])
        console.log(taskList);
        setTask("")
    }
    let renderTask = <li>nothing is there</li>;
    renderTask = taskList.map((t,i)=>{
        return(
            <li>{t.task}</li>
        );
    })
  return (
    <>
        <div className='flex items-center '>
            <input type='text' value={task} onChange={(e)=>{
                setTask(e.target.value)
            }} />
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={insertIt}>Add</button>
        </div>
        {renderTask}
    </>
  )
}

export default AddTask