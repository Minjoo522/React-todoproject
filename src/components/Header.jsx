import React, { useContext, useEffect } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { DarkModeContext } from '../context/DarkModeContext';

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  useEffect(() => {
    controlRootColor(darkMode)
  }, [darkMode]);

  return (
    <header>
      <nav className='navbar'>
      <button onClick={toggleDarkMode}>{ darkMode ? <BsFillSunFill /> : <BsFillMoonFill /> }</button>
        <ul className='nav__filters'>
          {
            filters.map((value, index) => 
            <li key={index}>
              <button className={`button ${value === filter ? 'active' : ''}`} onClick={() => onFilterChange(value)} >{value}</button>
            </li>)
          }
        </ul>
      </nav>
    </header>
  );
}

function controlRootColor(darkMode) {
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
}