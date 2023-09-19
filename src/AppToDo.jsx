import React, { useReducer, useState } from 'react';
import CheckBox from './components/CheckBox';
import todoReducer from './reducer/todo-reducer';
import { BsFillTrashFill } from 'react-icons/bs';
import Navbar from './components/Navbar';
import Button from './components/Button';

export default function AppToDo() {
  const [todos, dispatch] = useReducer(todoReducer, itemExample)
  const [form, setForm] = useState({ newTodo: '' });
  const [filter, setFilter] = useState('all')

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

  // true인 항목만 반환하기 때문에 'all'인 경우 true를 반환해야 모든 항목이 나옴
  const handleFilter = (todo) => {
    if (filter === 'active') {
      return !todo.checked;
    } else if (filter === 'completed') {
      return todo.checked;
    }
    return true;
  }

  return (
    <>
      <Navbar>
        <Button name={'All'} onClick={() => setFilter('all')} />
        <Button name={'Active'} onClick={() => setFilter('active')} />
        <Button name={'Completed'} onClick={() => setFilter('completed')} />
      </Navbar>
      <main>
        <ul>
          {
            todos
              .filter((todo) => handleFilter(todo))
              .map(todo => (
              <li key={todo.key}>
                <CheckBox checkedDefault={todo.checked} onToggle={() => toggleTodo(todo.key)} />
                {todo.context}
                <button onClick={() => deleteTodo(todo.key)}><BsFillTrashFill /></button>
              </li>
            ))
          }
        </ul>
        <form onSubmit={addTodo}>
          <input type="text" name='newTodo' id='newTodo' value={form.newTodo} onChange={handleChange} />
          <button type='submit'>Submit</button>
        </form>
      </main>
    </>
  );
}

// sample data
const itemExample = [
  {
    key: '1',
    context: '첫 번째 투두',
    checked: false,
  },
  {
    key: '2',
    context: '두 번째 투두',
    checked: true,
  },
  {
    key: '3',
    context: '세 번째 투두',
    checked: false,
  },
]
