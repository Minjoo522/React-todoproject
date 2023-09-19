import React, { useReducer, useState } from 'react';
import CheckBox from './CheckBox';
import todoReducer from '../reducer/todo-reducer';
import { BsFillTrashFill } from 'react-icons/bs';

export default function Items() {
  const [todos, dispatch] = useReducer(todoReducer, itemExample)
  const [form, setForm] = useState({ newTodo: '' });

  // uncontrolled component handling
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }
  
  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = form.newTodo.trim();
    dispatch({ type: 'add', newTodo })
    setForm({ newTodo: '' })
  }

  const toggleTodo = (key) => {
    dispatch({ type: 'check', key })
  }

  const deleteTodo = (itemKey) => {
    dispatch({ type: 'delete', itemKey })
  }

  return (
    <div>
      <ul>
        {
          todos.map(todo => (
            <li key={todo.key}>
              <CheckBox checkedDefault={todo.cheked} onToggle={() => toggleTodo(todo.key)} />
              {todo.context}
              <button onClick={() => deleteTodo(todo.key)}><BsFillTrashFill /></button>
            </li>
          ))
        }
      </ul>
      <form onSubmit={addTodo}>
        <input
          type="text"
          name='newTodo'
          id='newTodo'
          value={form.newTodo}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

// sample data
const itemExample = [
  {
    key: '1',
    context: '첫 번째 투두',
    cheked: false,
  },
  {
    key: '2',
    context: '두 번째 투두',
    cheked: true,
  },
  {
    key: '3',
    context: '세 번째 투두',
    cheked: false,
  },
]
