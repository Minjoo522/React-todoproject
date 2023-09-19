import React, { useState } from 'react';

export default function CheckBox() {
  const [checked, setChecked] = useState(false)
  const handleChange = () => setChecked((prev) => !prev)
  return (
    <input type="checkbox" id="checkbox" value={checked} checked={checked} onChange={handleChange} />
  );
}

