import React, { RefObject } from 'react';
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
  titleRef: RefObject<HTMLInputElement>;
  categoriesSelectRef: RefObject<HTMLSelectElement>;
  descriptionRef: RefObject<HTMLTextAreaElement>;
  imageRef: RefObject<HTMLInputElement>;

  constructor(props: Record<string, unknown>) {
    super(props);

    this.titleRef = React.createRef();
    this.categoriesSelectRef = React.createRef();
    this.descriptionRef = React.createRef();
    this.imageRef = React.createRef();
  }

  render() {
    return (
      <form className="form-cards">
        <label>
          Title:
          <input ref={this.titleRef} />
        </label>
        <label>
          Categories:
          <select size={5} ref={this.categoriesSelectRef} multiple>
            {options.map((el, i) => (
              <option value={el.value} key={i}>
                {el.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Description:
          <textarea className="text-description" ref={this.descriptionRef} />
        </label>
        <label>
          Import image:
          <input type="file" />
        </label>
        <input type="submit" value="Submit" className="btn-submit" ref={this.imageRef} />
      </form>
    );
  }
}

export default Form;
