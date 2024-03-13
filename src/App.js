import React, { useState } from "react";

// styling
import './App.css';

// components
import ControlsContainer from "./Components/ControlsContainer";
import ControlDisplayPanel from "./Components/ControlDisplayPanel";

// data file
import controlsData from "./Components/data/controls.json";

function App() {
  const data = controlsData;
  // variable declaration
  const [controlValues, setControlValues] = useState(
    data.reduce((acc, control) => {
      let initialValue;

      // determine the intial value based on the control type
      switch (control.type) {
        case 'slider':
          initialValue = control.normal;
          break;
        case 'radio':
          initialValue = control.defaultValue;
          break;
        case 'select':
          initialValue = control.defaultValue;
          break;
        default:
          initialValue = undefined;
      }
      acc[control.name] = initialValue;
      return acc;
    }, {})
  );

  /**
   * Updates the value of a specific control based on its name. This function iterates through
   * the array of controls, finds the control that matches the given name, and updates its value
   * with the new value provided. The state is then updated with this new array of controls,
   * ensuring that React re-renders any components relying on this state to reflect the change.
   * 
   * @param {string} name The name of the control to be updated. This matches the 'name' property of the control object.
   * @param {number} newValue The new value to assign to the control. This should be a number, as it represents a value like volume or brightness.
   */
  const handleUpdate = (name, newValue) => {
    setControlValues(prevValues => ({
      ...prevValues,
      [name]: newValue
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Slider Component Example</h2>
        <ControlsContainer controls={data} onUpdate={handleUpdate} />
        {data.map(control => (
          <ControlDisplayPanel key={control.id} name={control.name} value={controlValues.value} />
        ))}
      </header>
    </div>
  );
}

export default App;
