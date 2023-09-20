import React from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useDarkMode } from '../../context/DarkModeContext';
import styles from './Header.module.css'

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode()

  return (
    <header>
      <nav className={styles.navbar}>
      <button className={styles.toggle} onClick={toggleDarkMode}>{ darkMode ? <BsFillSunFill /> : <BsFillMoonFill /> }</button>
        <ul className={styles.filters}>
          {
            filters.map((value, index) => 
            <li key={index}>
              <button className={`${styles.filter} ${value === filter && styles.active}`} onClick={() => onFilterChange(value)} >{value}</button>
            </li>)
          }
        </ul>
      </nav>
    </header>
  );
}