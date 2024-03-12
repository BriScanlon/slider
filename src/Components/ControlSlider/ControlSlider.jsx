import React, { useState } from 'react';

/**
 * ControlSlider creates a slider input that allows users to select a value within a specified range.
 * It displays the current value of the slider next to its label. Whenever the slider's value changes,
 * it updates its own state and notifies the parent component of the change by calling the onUpdate function.
 * 
 * @param {Object} props The properties passed to the ControlSlider component.
 * @param {string} props.name The name of the slider, used as its label.
 * @param {number} props.min The minimum value that the slider can have.
 * @param {number} props.max The maximum value that the slider can have.
 * @param {number} props.normal The default or initial value of the slider.
 * @param {Function} props.onUpdate The function to call when the slider's value changes. 
 *                                  It receives the slider's name and the new value as arguments.
 * @returns A React component representing the slider.
 */
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
