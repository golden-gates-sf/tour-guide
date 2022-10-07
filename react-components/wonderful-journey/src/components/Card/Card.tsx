import React from 'react';
import './card.css';

export type CardProps = {
  picture: string;
  categories: string[];
  title: string;
  description: string;
};

class Card extends React.Component<CardProps> {
  render() {
    return (
      <div className="card">
        <img className="card-img" src={this.props.picture} />
        <div className="categories-container">
          {this.props.categories.map((el, i) => (
            <div key={i} className="categorie">
              {el}
            </div>
          ))}
        </div>
        <h4 className="title">{this.props.title}</h4>
        <p className="description"> {this.props.description}</p>
        <button className="btn-read-more">Read More</button>
      </div>
    );
  }
}

export default Card;
