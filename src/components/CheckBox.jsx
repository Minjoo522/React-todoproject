import React, { useState } from 'react';

export default function CheckBox({ checkedDefault, onToggle }) {
  const [ checked, setChecked ] = useState(checkedDefault)

  const handleChange = () => {
    setChecked(!checked)
    onToggle(!checked)
  }

  return (
    <input type="checkbox" id="checkbox" value={checked} checked={checked} onChange={handleChange} />
  );
}