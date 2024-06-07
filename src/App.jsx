import { useState, useEffect } from "react";
import "./App.css";
import CharacterDetails from "./components/CharacterDetails";
import CharacterList from "./components/CharacterList";
import Navbar, { SearchResult, Search } from "./components/Navbar";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${query}`
        );
        setCharacters(data.results.slice(0,7));
      } catch (error) {
        setCharacters([]);
        // alert(error.response.data.error);
      }
    }
    fetchData();
  }, [query]);

  return (
    <div className="app">
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <SearchResult numOfResult={characters.length} />
      </Navbar>
      <div className="main">
        <CharacterList characters={characters} />
        <CharacterDetails />
      </div>
    </div>
  );
}
export default App;
