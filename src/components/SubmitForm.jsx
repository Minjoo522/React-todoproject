import React, { useState } from 'react';
import { RiSendPlane2Fill } from 'react-icons/ri';

export default function SubmitForm({ onAdd }) {
  const [ text, setText ] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      setText('')
      return;
    }
    onAdd(text)
    setText('')
  }
  return (
    <form className='submit__form' onSubmit={handleSubmit}>
      <input className='todo__input' type="text" name='newTodo' id='newTodo' value={text} onChange={handleChange} placeholder='무엇을 해야 하나요?' />
      <button className='submit___button' type='submit'><RiSendPlane2Fill /></button>
    </form>
  );
}

