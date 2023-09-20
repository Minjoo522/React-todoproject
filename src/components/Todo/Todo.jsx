import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import styles from './Todo.module.css'

export default function Todo({ todo, onToggle, onDelete }) {
  const { context, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onToggle({ ...todo, status })
  }
  const handleDelete = () => onDelete(todo);
  return (
    <li className={styles.todo}>
      <div>
      <input className={styles.checkbox} type="checkbox" id="checkbox" value={status === 'completed'} checked={status === 'completed'} onChange={handleChange} />
      <label htmlFor="checkbox">{context}</label>
      </div>
      <button className={styles.button} onClick={handleDelete}><BsFillTrashFill /></button>
    </li>
  );
}
