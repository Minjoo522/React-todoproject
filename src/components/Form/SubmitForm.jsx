import React, { useState } from 'react';
import { RiSendPlane2Fill } from 'react-icons/ri';
import styles from './SubmitForm.module.css'

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
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.input} type="text" name='newTodo' id='newTodo' value={text} onChange={handleChange} placeholder='무엇을 해야 하나요?' />
      <button className={styles.button} type='submit'><RiSendPlane2Fill /></button>
    </form>
  );
}

