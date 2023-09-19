import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';


export default function Todo({ todo, onToggle, onDelete }) {
  const { context, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onToggle({ ...todo, status })
  }
  const handleDelete = () => onDelete(todo);
  return (
    <li className='todo'>
      <div className='todo__content'>
      <input className='checkbox' type="checkbox" id="checkbox" value={status === 'completed'} checked={status === 'completed'} onChange={handleChange} />
      <label htmlFor="checkbox">{context}</label>
      </div>
      <button className='delete__button' onClick={handleDelete}><BsFillTrashFill /></button>
    </li>
  );
}

