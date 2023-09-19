import React from 'react';

export default function Button({ isActive, name, onClick }) {
  return (
    <button className={`button ${isActive ? 'active' : ''}`} onClick={onClick}>{name}</button>
  );
}