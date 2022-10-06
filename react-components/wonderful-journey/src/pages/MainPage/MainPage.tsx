import React from 'react';
import Header from 'components/Header/Header';
import SearchBar from 'components/SearchBar/SearchBar';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
      </div>
    );
  }
}

export default MainPage;
