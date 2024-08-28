import React from "react";
import Games from "../data";
import GameCart from "../GameCart";
import { useState } from "react";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 8;
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = Games.slice(indexOfFirstGame, indexOfLastGame);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="games-container">
      <ul className="games-list">
        {currentGames.map((game, key) => {
          return (
            <GameCart
              key={key}
              {...game}
            />
          );
        })}
      </ul>
      <div className="pagination-controls">
        {Array.from(
          { length: Math.ceil(Games.length / gamesPerPage) },
          (_, index) => (
            <button
              className="pagination-button"
              key={index + 1}
              onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
