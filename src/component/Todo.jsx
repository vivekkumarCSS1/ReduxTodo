import React from'react'
import { useSelector } from'react-redux'
import AddForm from'../component/AddForm'
import{useDispatch} from'react-redux'
import{deleteTodo} from'../features/counter/TodoSlice'
import{markAsDone} from'../features/counter/TodoSlice'
//the <Provider> compoenent make redux sr=tore available to any anested component that need to access the redux store  


//useSelector hook allow you to extract data ot the state from th redux store using selector function

export const Todo=()=>{
  const todo=useSelector((state)=>state.todos);
  console.log(todo) 
  const dispatch=useDispatch();
  function Deletehandler(id){
    console.log(id)
    dispatch(deleteTodo(id));

  // const newTodo=todo.filter((data)=>data.id!=id);

  }

  function markHandler(id){
    dispatch(markAsDone(id))
    console.log(id)
  
  }
  return(
    <>
    <AddForm/>
    <ul>
      {todo.map((todo)=>(<li key={todo.id}>{todo.task}<button onClick={()=>Deletehandler(todo.id)}>Delete</button><button key={todo.is}onClick={()=>{markHandler(todo.id)}}>{todo.isDone?'done':'undone'}</button></li>))}
    </ul>
    
    </>
  )
}
