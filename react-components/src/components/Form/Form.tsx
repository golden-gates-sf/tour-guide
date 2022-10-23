import React from 'react';
import './form.css';

const options = [
  { value: 'europe', label: 'Europe' },
  { value: 'usa', label: 'USA' },
  { value: 'nature', label: 'Nature' },
  { value: 'sea', label: 'Sea' },
  { value: 'city', label: 'City' },
  { value: 'mountains', label: 'Mountains' },
  { value: 'australia', label: 'Australia' },
  { value: 'luxury', label: 'Luxury' },
];

class Form extends React.Component {
  render() {
    return (
      <form className="form-cards">
        <label>
          Title:
          <input />
        </label>
        <label>
          Categories:
          <select size={5} multiple>
            {options.map((el, i) => (
              <option value={el.value} key={i}>
                {el.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Description:
          <textarea className="text-description" />
        </label>
        <label>
          Import image:
          <input type="file" />
        </label>
        <input type="submit" value="Submit" className="btn-submit"></input>
      </form>
    );
  }
}

export default Form;
