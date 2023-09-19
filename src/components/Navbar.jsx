import React from 'react';

export default function Navbar({ children }) {
  return (
    <header>
      <nav>{children}</nav>
    </header>
  );
}

