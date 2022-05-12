import "./App.scss";
import game from "./assets/game.png";
import GameItem from "./components/GameItem";
import { games } from "./components/Games";
// import snake from "./assets/snake.jpg";

// const games = [
//   {
//     name: "Snake Game",
//     pic: snake,
//     finish: true,
//   },
//   {
//     name: "Typing Test",
//     pic: null,
//     finish: false,
//   },
// ];

function App() {
  return (
    <div className="container">
      <div className="header">
        <img src={game} alt="game" />
        <h1 className="header__title">Game Hub</h1>
      </div>
      <div className="games__container">
        {games.map((game, i) => (
          <GameItem game={game} key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
