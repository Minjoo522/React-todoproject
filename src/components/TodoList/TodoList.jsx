import React, { useEffect, useState } from 'react';
import styles from './TodoList.module.css'
import SubmitForm from '../Form/SubmitForm';
import Todo from '../Todo/Todo';

export default function TodoList({ filter }) {
  const [ todos, setTodos ] = useState(readTodosFromLocalStorage)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) => 
    setTodos(todos.map(todo => todo.key === updated.key ? updated : todo))
  const handleDelete = (deleted) =>
    setTodos(todos.filter(todo => todo.key !== deleted.key))

  const filtered = getFilteredItems(todos, filter);

  return (
    <>
      <main className={styles.main}>
        <ul>
          {
            filtered.map(todo => (
              <Todo key={todo.key} todo={todo} onToggle={handleUpdate} onDelete={handleDelete} />
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

function readTodosFromLocalStorage() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
  if(filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter)
}