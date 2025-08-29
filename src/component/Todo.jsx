import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddForm from '../component/AddForm';
import { deleteTodo, markAsDone } from '../features/counter/TodoSlice';

export const Todo = () => {
  const todos = useSelector((state) => state.todos);   // Grab your todos array
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    console.log('Deleting:', id);
    dispatch(deleteTodo(id));
  };

  const markHandler = (id) => {
    console.log('Toggling done for:', id);
    dispatch(markAsDone(id));
  };

  return (
    <>
      <AddForm />

      <ul className="todoList">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todoItem ${todo.isDone ? 'done' : ''}`}
          >
            <span className="taskText">{todo.task}</span>
            <div className="buttonGroup">
              <button
                className="deleteButton"
                onClick={() => deleteHandler(todo.id)}
              >
                🗑️
              </button>
              <button
                className="toggleButton"
                onClick={() => markHandler(todo.id)}
              >
                {todo.isDone ? '✅' : '⬜'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
