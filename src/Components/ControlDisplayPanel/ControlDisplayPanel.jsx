import React from 'react';

/**
 * Renders a display panel for a control. This simple component displays the name of the control
 * alongside its current value. It's designed to be used in conjunction with slider controls or
 * any other type of control that has a value to be displayed.
 *
 * @param {Object} props The properties passed to the ControlsDisplayPanel component.
 * @param {string} props.name The name of the control. This is displayed as part of the component's content.
 * @param {number|string} props.value The current value of the control. This value is displayed next to the control's name.
 *                                    Depending on the control, this could be a number (e.g., a slider's value) or
 *                                    a string (e.g., the selected option in a dropdown).
 *
 * @returns {React.Component} A React component that visually represents the name and value of a control
 *                            in a simple text format.
 */
function ControlsDisplayPanel({ name, value }) {
  return (
    <div>
      <p>{name}: {value}</p>
    </div>
  )
}

export default ControlsDisplayPanel;