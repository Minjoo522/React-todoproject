import React from 'react';
import { RiSendPlane2Fill } from 'react-icons/ri';

export default function SubmitForm({ value, onSubmit, onChange }) {
  return (
    <form className='submit__form' onSubmit={onSubmit}>
      <input className='todo__input' type="text" name='newTodo' id='newTodo' value={value} onChange={onChange} placeholder='무엇을 해야 하나요?' />
      <button className='submit___button' type='submit'><RiSendPlane2Fill /></button>
    </form>
  );
}

