import React from 'react';
import { DarkModeProvider } from './context/DarkModeContext';
import AppToDo from './AppToDo';

export default function App() {
  return (
    <DarkModeProvider>
      <AppToDo />
    </DarkModeProvider>
  );
}

