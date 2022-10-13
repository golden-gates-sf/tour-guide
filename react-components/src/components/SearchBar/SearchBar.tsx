import React from 'react';
import './searchbar.css';

type SearchBarProps = Record<string, never>;
interface SearchBarState {
  request: string;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);

    this.state = { request: '' };
    console.log('constr', localStorage.getItem('request'));
  }

  componentDidMount(): void {
    this.setState({ request: localStorage.getItem('request') || '' });
  }

  componentWillUnmount(): void {
    if (this.state.request) localStorage.setItem('request', this.state.request);
  }

  render() {
    return (
      <div className="searchbar-container">
        <input
          placeholder="Find your trip"
          className="searchbar"
          onChange={(e) => {
            this.setState({ request: e.target.value });
          }}
          value={this.state.request}
          data-testid="searchbar-input"
        ></input>
      </div>
    );
  }
}

export default SearchBar;
