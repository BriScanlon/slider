import React, { useState } from "react";
import ControlSlider from './Components/ControlSlider';
import DisplayPanel from './Components/ControlSlider/DisplayPanel';
import './App.css';

function App() {

  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Slider Component Example</h2>
        <ControlSlider name="Volume" min={0} max={100} normal={sliderValue} onChange={handleSliderChange}/>
        <DisplayPanel name="Volume" value={sliderValue} />
      </header>
    </div>
  );
}

export default App;
