import GameBoard from "./assets/components/GameBoard";
import Header from "./assets/components/Header/Header";
import PlayerInfo from "./assets/components/PlayerInfo";

function App() {
  return (
    <main>
      <Header />
      <div id="game-container">
        <ol id="players">
          <PlayerInfo initialName="Player 1" symbol="X" />
          <PlayerInfo initialName="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
