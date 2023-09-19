import React, { useEffect, useReducer } from 'react';
import './AppToDo.css';
import todoReducer from './reducer/todo-reducer';
import SubmitForm from './components/SubmitForm';
import Todo from './components/Todo';

export default function AppToDo({ filter }) {
  const [todos, dispatch] = useReducer(todoReducer, [])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      dispatch({ type: 'initialize', todos: storedTodos })
    }
  }, [])

  const handleAdd = (todo) => {
    dispatch({ type: 'add', todo})
  }

  const toggleTodo = (updated) => {
    dispatch({ type: 'update', updated })
  }

  const deleteTodo = (deleted) => {
    dispatch({ type: 'delete', deleted })
  }

  const filtered = getFilteredItems(todos, filter);

  return (
    <>
      <main className='main'>
        <ul className='todos'>
          {
            filtered.map(todo => (
              <Todo key={todo.key} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
            ))
          }
        </ul>
      </main>
      <footer className='footer'>
        <SubmitForm onAdd={handleAdd} />
      </footer>
    </>
  );
}

function getFilteredItems(todos, filter) {
  if(filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter)
}