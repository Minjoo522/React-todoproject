import React, { useEffect, useReducer } from 'react';
import styles from './TodoList.module.css'
import todoReducer from '../../reducer/todo-reducer';
import SubmitForm from '../Form/SubmitForm';
import Todo from '../Todo/Todo';

export default function TodoList({ filter }) {
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
      <main className={styles.main}>
        <ul>
          {
            filtered.map(todo => (
              <Todo key={todo.key} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
            ))
          }
        </ul>
      </main>
      <footer className={styles.footer}>
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