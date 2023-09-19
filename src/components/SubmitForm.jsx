import React from 'react';
import { RiSendPlane2Fill } from 'react-icons/ri';

export default function SubmitForm({ value, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name='newTodo' id='newTodo' value={value} onChange={onChange} placeholder='무엇을 해야 하나요?' />
      <button type='submit'><RiSendPlane2Fill /></button>
    </form>
  );
}

