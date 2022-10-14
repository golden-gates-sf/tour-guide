import React from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import Card, { CardProps } from 'components/Card/Card';
import LA from '../../img/los-angeles-california-city.jpg';
import Italy from '../../img/italy.jpg';
import EuPic from '../../img/summer-eu.jpg';
import France from '../../img/france.jpg';
import './mainPage.css';

const cardsArr: CardProps[] = [
  {
    picture: LA,
    categories: ['City', 'Skyscraper'],
    title: 'Los Angeles',
    description: 'City of amazing sunsets and celebrities',
  },
  {
    picture: Italy,
    categories: ['Sea'],
    title: 'Italy',
    description: 'Spend your summer in Italy!',
  },
  {
    picture: EuPic,
    categories: ['Small Town', 'Mountains'],
    title: 'Euro Trip',
    description: 'Your possibility to visit 4 towns in a row',
  },
  {
    picture: France,
    categories: ['Nature', 'Lavender'],
    title: 'Lavender Fields',
    description: 'Explore the whole France and enjoy the beauties of lavender fields',
  },
  {
    picture: LA,
    categories: ['City', 'Skyscraper'],
    title: 'Los Angeles',
    description: 'City of amazing sunsets and celebrities',
  },
  {
    picture: Italy,
    categories: ['Sea'],
    title: 'Italy',
    description: 'Spend your summer in Italy!',
  },
  {
    picture: EuPic,
    categories: ['Small Town', 'Mountains'],
    title: 'Euro Trip',
    description: 'Your possibility to visit 4 towns in a row',
  },
  {
    picture: France,
    categories: ['Nature', 'Lavender'],
    title: 'Lavender Fields',
    description: 'Explore the whole France and enjoy the beauties of lavender fields',
  },
  {
    picture: Italy,
    categories: ['Sea'],
    title: 'Italy',
    description: 'Spend your summer in Italy!',
  },
  {
    picture: EuPic,
    categories: ['Small Town', 'Mountains'],
    title: 'Euro Trip',
    description: 'Your possibility to visit 4 towns in a row',
  },
];

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <div className="cards-container">
          {cardsArr.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </div>
      </div>
    );
  }
}

export default MainPage;
