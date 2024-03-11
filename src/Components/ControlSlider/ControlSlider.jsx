// src/components/ControlSlider.js
import React, { useState } from 'react';

function ControlSlider({ name, min, max, normal, onUpdate }) {
  const [value, setValue] = useState(normal);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    onUpdate(name, newValue); // Notify the parent component of the update
  };

  return (
    <div>
      <label htmlFor={name}>{name}: {value}</label>
      <input
        type="range"
        id={name}
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default ControlSlider;
