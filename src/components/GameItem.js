import React from "react";
import "./GameItem.scss";

const GameItem = ({ game }) => {
  return (
    <div
      className="item__container"
      onClick={() => game.link && (window.location = game.link)}
    >
      <div
        style={{ backgroundImage: `url(${game.pic})` }}
        className="item__image"
      />
      <h3>{game.name}</h3>
    </div>
  );
};

export default GameItem;
