import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

export default function DeleteButton({ todos, setTodos, itemKey }) {
  const handleDelete = () => {
    const updatedTodos = todos.filter(todo => todo.key !== itemKey);
    setTodos(updatedTodos)
  }
  return <button onClick={handleDelete}><BsFillTrashFill /></button>
}

