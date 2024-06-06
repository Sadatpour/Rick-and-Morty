import { useState, useEffect } from "react";
import "./App.css";
import CharacterDetails from "./components/CharacterDetails";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setCharacters(data.results);
      } catch (error) {
        alert(error.response.data.error);
      }
    }
    fetchData();
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
