import React from 'react';

export default function Navbar({ children }) {
  return (
    <header>
      <nav className='navbar'>{children}</nav>
    </header>
  );
}

