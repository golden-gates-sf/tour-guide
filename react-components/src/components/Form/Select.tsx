import React, { RefObject } from 'react';

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

type SelectProps = {
  propRef: RefObject<HTMLSelectElement>;
};

class Select extends React.Component<SelectProps> {
  constructor(props: SelectProps) {
    super(props);
  }

  render() {
    return (
      <select size={5} ref={this.props.propRef} multiple>
        {options.map((el, i) => (
          <option value={el.value} key={i}>
            {el.label}
          </option>
        ))}
      </select>
    );
  }
}

export default Select;
