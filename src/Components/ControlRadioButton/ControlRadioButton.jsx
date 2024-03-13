import React from 'react';

/**
 * Renders a group of radio buttons based on the provided options. Each radio button allows the user
 * to select one option from a set. When an option is selected, the `onUpdate` callback function is invoked,
 * passing the selected value back to the parent component. This component is ideal for scenarios where
 * a single choice needs to be made from multiple options.
 *
 * @param {Object} props The properties passed to the ControlRadioButton component.
 * @param {string} props.name The name attribute for the radio button group, ensuring all radio buttons
 *                            within this group are mutually exclusive (only one can be selected at a time).
 * @param {Array} props.options An array of objects representing each radio button option. Each object should
 *                              have a `label` (what the user sees) and a `value` (the underlying value each option represents).
 * @param {string|number} props.defaultValue The value of the option that should be checked by default when
 *                                           the component first renders. This should match one of the `value` properties
 *                                           in the `options` array.
 * @param {Function} props.onUpdate A callback function that is called whenever the selected option changes.
 *                                  It receives the new value as its argument. This function should be used to
 *                                  update the state in the parent component based on the user's selection.
 *
 * @returns {React.Component} A React component that renders a group of radio buttons with the specified options
 *                            and handles user selection, invoking the provided `onUpdate` callback with the
 *                            new value when a change occurs.
 */
function ControlRadioButton({ name, options, defaultValue, onUpdate }) {

  const handleChange = (event) => {
    onUpdate(event.target.value);
  }

  return (
    <fieldset>
      <legend>{name}</legend>
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            name={name}
            value={option.value}
            defaultChecked={option.value === defaultValue}
            onChange={handleChange}
          />
          {option.label}
        </label>
      ))}
    </fieldset>
  )
}

export default ControlRadioButton;