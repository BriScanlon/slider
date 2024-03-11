import React, { useState } from 'react';
import ControlSlider from '../ControlSlider';
import controlsData from '../data/controls.json';

function ControlsContainer() {

    const [sliderValues, setSliderValues] = useState(
        controlsData.reduce((acc, control) => {
            if (control.type === 'slider') {
                acc[control.name] = control.normal;
            }
            return acc;
        }, {})
    );

    const onUpdate = (name, newValue) => {
        setSliderValues(prevValues => ({
            ...prevValues,
            [name]: newValue
        }));
    };


    return (
        <div>
            {controlsData.map(control => (
                control.type === 'slider' && 
                <ControlSlider 
                key={control.id} 
                {...control}
                normal={sliderValues[control.name]}
                onUpdate={onUpdate}
                 />
            ))}
        </div>
    );
}

export default ControlsContainer;