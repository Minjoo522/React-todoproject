import React, { useState } from 'react';

export default function CheckBox({ name, checkedDefault, onToggle }) {
  const [ checked, setChecked ] = useState(checkedDefault)

  const handleChange = () => {
    setChecked(!checked)
    onToggle(!checked)
  }

  return (
    <input className='checkbox' type="checkbox" id="checkbox" name={name} value={checked} checked={checked} onChange={handleChange} />
  );
}