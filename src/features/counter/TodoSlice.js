import {createSlice,nanoid } from'@reduxjs/toolkit'



const initialState={
  todos:[{id:'abc',task:'demo',isDone:false}]
}


export const todoSlice=createSlice({
  name:'todo',
  initialState,
  reducers:{
addTodo:(state,action)=>{
const newTodo={

  id:nanoid(),
  task:action.payload,
  isDone:false,
};

state.todos.push(newTodo)
},
deleteTodo:(state,action)=>{
state.todos=state.todos.filter((todo)=>todo.id!=action.payload)
},

markAsDone:(state,action)=>{
 
//  state.todos= state.todos.map((todo)=>{
//     if(todo.id!=action.payload){
//       todo.isDone=false;
//       console.log(action.payload)
//     }
//     else{
//       todo.isDone=true;
//       console.log(action.payload)
//     }
//   })


state.todos.forEach((todo)=>{
  if(todo.id==action.payload){
    todo.isDone=true
  }
})
},
  }
})
export const{addTodo,deleteTodo,markAsDone}=todoSlice.actions;//action object generator, redux toolkit automatically generae action creators

export default todoSlice.reducer;