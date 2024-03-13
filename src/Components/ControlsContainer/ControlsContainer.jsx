import React from 'react';
import ControlSlider from '../ControlSlider';
import ControlRadioButton from '../ControlRadioButton';
import ControlSelect from '../ControlSelect/ControlSelect';

/**
 * The ControlsContainer component is responsible for rendering a collection of ControlSlider components.
 * It takes an array of control objects and a function to handle updates to these controls. Each control
 * object defines the properties of a slider, such as its name and current value. The onUpdate function
 * is passed down to each ControlSlider component to handle value changes.
 *
 * @param {Object} props The properties passed to the ControlsContainer component.
 * @param {Array} props.controls An array of control objects, each containing the data needed to render a slider. 
 *                               Expected properties within each control object include:
 *                               - id (unique identifier for the key prop)
 *                               - name (name of the control, displayed as the label)
 *                               - min (minumum value of the range of the slider)
 *                               - max (maximum value of the range of the slider)
 *                               - value (current value of the slider, initially set to the 'normal' value from controls data)
 *                               - type (type of the control, used to determine if a control is a 'slider')
 * @param {Function} props.onUpdate A function that updates the parent component's state when a slider value changes. 
 *                                  It accepts two parameters: the name of the control being updated and its new value.
 *
 * @returns {React.Component} A React component that renders a collection of ControlSlider components based on the
 *                            provided controls data, with each slider capable of updating its value through the parent's onUpdate function.
 */
function ControlsContainer({ controls, onUpdate }) {
  // ensure controls is always an array, even if one object is passed through it it
  const normalizedControls = Array.isArray(controls) ? controls : [controls];

  return (
    <div>
      {normalizedControls.map(control => {
        switch (control.type) {
          case 'slider':
            return (
              <ControlSlider
                key={control.id}
                name={control.name}
                min={control.min}
                max={control.max}
                normal={control.normal}
                onUpdate={onUpdate}
              />
            );
          case 'radio':
            return (
              <ControlRadioButton
                key={control.id}
                name={control.name}
                options={control.options}
                defaultValue={control.defaultValue}
                onUpdate={(value) => onUpdate(control.name, value)}
              />
            );
          case 'select':
            return (
              <ControlSelect
              key={control.id}
              name={control.name}
              options={control.options}
              multiple={control.multiple} 
              required={control.required}
              size={control.size}
              autofocus={control.autofocus}
              defaultValue={control.defaultValue}
              onUpdate={(value) => onUpdate(control.name, value)}
              />
            )
          default:
            return null; // This handles any unexpected control types
        }
      })}
    </div>
  );
}

export default ControlsContainer;