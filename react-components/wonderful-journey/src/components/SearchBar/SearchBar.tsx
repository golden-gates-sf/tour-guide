import React from 'react';
import './searchbar.css';

class SearchBar extends React.Component {
  request: string;

  constructor(props: []) {
    super(props);

    this.request = localStorage.getItem('request') || '';
  }

  render() {
    return (
      <div className="searchbar-container">
        <input
          placeholder="Find your trip"
          className="searchbar"
          onChange={(e) => {
            this.request = e.target.value;
          }}
          defaultValue={this.request}
        ></input>
      </div>
    );
  }

  componentWillUnmount(): void {
    localStorage.setItem('request', this.request);
  }
}

export default SearchBar;
