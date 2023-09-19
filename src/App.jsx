import React, { useState } from 'react';
import { DarkModeProvider } from './context/DarkModeContext';
import AppToDo from './AppToDo';
import Header from './components/Header';

const filters = ['all', 'active', 'completed']
export default function App() {
  const [ filter, setFilter ] = useState(filters[0])
  return (
    <DarkModeProvider>
      <div className='app'>
        <Header filters={filters} filter={filter} onFilterChange={setFilter} />
        <AppToDo filter={filter} />
      </div>
    </DarkModeProvider>
  );
}

