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
          <ControlDisplayPanel key={control.id} name={control.name} value={controlValues[control.name]} />
        ))}
      </header>
    </div>
  );
}

export default App;
