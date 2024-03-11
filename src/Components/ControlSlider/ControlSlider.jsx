import React, { useEffect, useState } from "react";

function ControlSlider({ name, min, max, normal, onChange }) {
    // initialise the slider value to normal or the default value
    const [value, setValue] = useState(normal);

    // fucntion to update the value when the slider moves
    const handleValueChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        onChange(newValue);
    }

    useEffect(() => {
        setValue(normal);
    }, [normal]);

    return (
        <div>
            <label htmlFor={name}>{name} </label>
            <input
                type="range"
                id={name}
                name={name}
                min={min}
                max={max}
                value={value}
                onChange={handleValueChange}
            />
        </div>
    )
}

export default ControlSlider;