import React from "react";
import { Link } from "react-router-dom";

const GameCart = ({ id, name, price, image_url, genre, description }) => {
  return (
    <li key={id}>
      <Link to={`/game/${id}`}>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="game-front">
              <img
                className="game-img"
                src={image_url}
                alt={name}
              />
            </div>

            <div className="game-back">
              <span className="price"> ${price}</span>
              <img
                src={image_url}
                alt={name}
              />

              <div>
                <h3>{name}</h3>
                <h5>{genre}</h5>
                <div className="game-description">
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <button className="add-btn">Add to cart</button>
    </li>
  );
};

export default GameCart;
