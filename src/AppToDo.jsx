import React, { useContext, useEffect, useReducer, useState } from 'react';
import './AppToDo.css';
import todoReducer from './reducer/todo-reducer';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import Navbar from './components/Navbar';
import Button from './components/Button';
import SubmitForm from './components/SubmitForm';
import { DarkModeContext } from './context/DarkModeContext';
import Todo from './components/Todo';

export default function AppToDo() {
  const [todos, dispatch] = useReducer(todoReducer, [])
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

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      dispatch({ type: 'initialize', todos: storedTodos })
    }
  }, [])

  const handleAdd = (todo) => {
    dispatch({ type: 'add', todo})
  }

  const toggleTodo = (updated) => {
    dispatch({ type: 'update', updated })
  }

  const deleteTodo = (deleted) => {
    dispatch({ type: 'delete', deleted })
  }

  const handleFilter = (todo) => {
    if (filter === 'active') {
      return todo.status === 'active'
    } else if (filter === 'completed') {
      return todo.status === 'completed'
    }
    return todo
  }

  return (
    <div className='app'>
      <Navbar>
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
              <Todo key={todo.key} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
            ))
          }
        </ul>
      </main>
      <footer className='footer'>
        <SubmitForm onAdd={handleAdd} />
      </footer>
    </div>
  );
}