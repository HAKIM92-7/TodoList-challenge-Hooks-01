import React, { useState } from 'react'
import './AddTask.css'


const AddTask = ({addTask}) => {


const [inputValue , setInput] = useState("")


    return (
        <div>
            <form id="myDIV"  onSubmit={(e)=> {

            e.preventDefault();
            
            addTask(inputValue)
            
            setInput("")


            }} >
            <input type="text" value={inputValue} placeholder="TO-DO"  onChange={(e)=> setInput(e.target.value)} />
            
            <button type="submit" className="addBtn"> ADD</button>
            </form>
        </div>
    )
}

export default AddTask
