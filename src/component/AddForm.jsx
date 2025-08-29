import {useState} from'react'
import {useDispatch} from'react-redux'
import{addTodo} from'../features/counter/TodoSlice'


//the useDispatch hook allow you to send or dispatch an action to the redux store by giving the action as an argument to teh dispatch variable.
//dispatch mean triggering the state change 
export default function AddForm(){
  
   const[task,setTask]=useState('');
   const dispatch=useDispatch();
  function handleEvent(e){
e.preventDefault();
console.log(task)
dispatch(addTodo(task))
  }
 

  return(
    <form className="add-form" onSubmit={handleEvent}>
    <input
      type="text"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      className="add-input"
      placeholder="What's the task, boss?"
      required
    />
    <button type="submit" className="add-button">
      Add Task
    </button>
  </form>
  )
}