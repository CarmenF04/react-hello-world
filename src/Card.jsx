import "./Card.css";
import React from "react";

class Card extends React.Component {
  render() {
    const { title, imageUrl, description } = this.props;

    return (
      <div className="card">
        <h1 className="card__title">{title}</h1>
        <img src={imageUrl} alt="Card Image" className="card__image" />
        <p className="card__description">{description}</p>
      </div>
    );
  }
}

export default Card;