import { useState, useEffect } from "react";
import "./App.css";
import CharacterDetails from "./components/CharacterDetails";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <div className="app">
      <Navbar numOfResult={characters.length} />
      <div className="main">
        <CharacterList characters={characters} />
        <CharacterDetails />
      </div>
    </div>
  );
}
export default App;
