import React, { useState } from 'react'
import AddTask from './AddTask'

const TodoList = () => {

const [todos , setTodos] = useState([])

const addTodo = (newtodo) =>  setTodos([...todos , newtodo]) ;



    return (
        <div>

 <AddTask  addTask={addTodo}  />
        <ul> 

      { todos.map ((todo, index) => (


       <li >{todo}      <button  onClick={()=> {

       let newValue = prompt('new value')

        setTodos(todos.map ((todo , i ) =>  i === index ? todo = newValue : todo))


       }}  >Edit</button>           <button onClick={()=> setTodos(todos.filter ((todo,i) =>   i !==  index         )) }>X</button>    </li>


      ))
        





      }

</ul>   


            
        </div>
    )
}

export default TodoList
