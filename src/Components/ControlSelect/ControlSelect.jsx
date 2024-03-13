import React, {useState} from 'react';

/**
 * Renders a select (dropdown) menu component with configurable properties. This component allows users
 * to choose from a list of options. It supports both single and multiple selections. The current selection(s)
 * is managed within the component's state and can be updated through user interaction. When the selection
 * changes, a provided callback function (`onUpdate`) is called to notify parent components of the change.
 *
 * @param {Object} props - The properties passed to the ControlSelectMenu component.
 * @param {string} props.name - The name attribute for the select element, used for form submission and accessibility.
 * @param {Array} props.options - An array of objects representing the selectable options. Each object should
 *                                have a `label` (the text displayed to the user) and a `value` (the underlying
 *                                value each option represents).
 * @param {boolean} [props.multiple=false] - If true, allows multiple options to be selected. Defaults to false.
 * @param {boolean} [props.required=false] - If true, requires the user to select at least one option before submitting the form. Defaults to false.
 * @param {number} [props.size] - If `multiple` is true, defines the number of options displayed at once. Not used for single-select menus.
 * @param {boolean} [props.autofocus=false] - If true, the select menu is automatically focused when the page loads.
 * @param {Function} props.onUpdate - Callback function that is invoked when the selection changes. Receives the `name` of the select menu
 *                                    and the new value as arguments.
 * @param {string} props.defaultValue - The default value, that if passed will be the default selected option displayed in the select.
 * @returns {React.Component} A select menu component that renders the provided options and handles user selection.
 */
function ControlSelect({ name, options, multiple, required, size, autofocus, onUpdate, defaultValue }) {
  const [value, setValue] = useState(
    options.find(option => option.value === defaultValue) ? defaultValue : "" 
  );

  const handleChange = (event) => {
    const selectElement = event.target;
    const newValue = selectElement.value;
    const name = selectElement.options[selectElement.selectedIndex].text;
    setValue(newValue);
    onUpdate(name, newValue);
  }

  return (
    <select
      name={name}
      multiple={multiple}
      required={required}
      size={size}
      autoFocus={autofocus}
      onChange={handleChange}
      defaultValue={defaultValue}
      value={value}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default ControlSelect;