import React, { useContext, useEffect, useReducer, useState } from 'react';
import './AppToDo.css';
import CheckBox from './components/CheckBox';
import todoReducer from './reducer/todo-reducer';
import { BsFillTrashFill, BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import Navbar from './components/Navbar';
import Button from './components/Button';
import SubmitForm from './components/SubmitForm';
import { DarkModeContext } from './context/DarkModeContext';

export default function AppToDo() {
  const [todos, dispatch] = useReducer(todoReducer, itemExample)
  const [form, setForm] = useState({ newTodo: '' });
  const [filter, setFilter] = useState('all')
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.style.setProperty('--color-primary', '#050a13'); // 다크 모드 색상
      root.style.setProperty('--color-primary-variant', '#AA540');
      root.style.setProperty('--color-accent', '#6522FF');
      root.style.setProperty('--color-accent-variant', '#262626');
      root.style.setProperty('--color-text', '#FEF8FF');
    } else {
      root.style.setProperty('--color-primary', '#FAD9FF'); // 라이트 모드 색상
      root.style.setProperty('--color-primary-variant', '#FCE7FF');
      root.style.setProperty('--color-accent', '#6522FF');
      root.style.setProperty('--color-accent-variant', '#FEF8FF');
      root.style.setProperty('--color-text', '##050a13');
    }
  }, [darkMode]);

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
    <div className='app'>
      <Navbar>
        {/* TODO: 다크모드 가능하도록 바꾸기 */}
        <Button name={ darkMode ? <BsFillSunFill /> : <BsFillMoonFill /> } onClick={() => toggleDarkMode()} />
        <ul className='nav__filters'>
          <li><Button name={'All'} onClick={() => setFilter('all')} isActive={filter === 'all'} /></li>
          <li><Button name={'Active'} onClick={() => setFilter('active')} isActive={filter === 'active'} /></li>
          <li><Button name={'Completed'} onClick={() => setFilter('completed')} isActive={filter === 'completed'} /></li>
        </ul>
      </Navbar>
      <main className='main'>
        <ul className='todos'>
          {
            todos
              .filter((todo) => handleFilter(todo))
              .map(todo => (
              <li className='todo' key={todo.key}>
                <div className='todo__content'>
                <CheckBox name={todo.context} checkedDefault={todo.checked} onToggle={() => toggleTodo(todo.key)} />
                <label htmlFor={todo.context}>{todo.context}</label>
                </div>
                <button className='delete__button' onClick={() => deleteTodo(todo.key)}><BsFillTrashFill /></button>
              </li>
            ))
          }
        </ul>
      </main>
      <footer className='footer'>
        <SubmitForm value={form.newTodo} onSubmit={addTodo} onChange={handleChange} />
      </footer>
    </div>
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
