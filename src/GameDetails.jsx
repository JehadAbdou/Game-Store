import React from "react";
import { useParams } from "react-router-dom";
import Games from "./data";

const GameDetails = () => {
  const { id } = useParams();
  const game = Games.find((game) => game.id === parseInt(id));

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div>
      <h1>{game.name}</h1>
      <div className="game-details">
        <div className="video-container">
          <iframe
            className="video-frame"
            src={`https://www.youtube.com/embed/${game.videoId}`}
            frameborder="0"
            title={`${game.name} Trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className="game-info">
          <p>Genre: {game.genre}</p>
          <p>Price: ${game.price}</p>
          <p>{game.description}</p>
          <button className="add-btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
