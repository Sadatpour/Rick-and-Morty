import { useState, useEffect } from "react";
import "./App.css";
import CharacterDetails from "./components/CharacterDetails";
import CharacterList from "./components/CharacterList";
import Navbar, { SearchResult, Search, Favourite } from "./components/Navbar";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [favourite, setfavourite] = useState(
    JSON.parse(localStorage.getItem("FAVOURITS")) || []
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${query}`
        );
        setCharacters(data.results.slice(0, 7));
      } catch (error) {
        setCharacters([]);
        // alert(error.response.data.error);
      }
    }
    fetchData();
  }, [query]);
  
  useEffect(() => {
    localStorage.setItem("FAVOURITS", JSON.stringify(favourite));
  }, [favourite]);

  const handleSelectCharacter = id => {
    setSelectedId(id);
  };
  const handleAddFavourite = char => {
    setfavourite([...favourite, char]);
  };
  const handleDeleteFavourite = id => {
    setfavourite(prevFav => prevFav.filter(fav => fav.id !== id));
  };
  const isAddToFavourit = favourite.map(fav => fav.id).includes(selectedId);
  return (
    <div className="app">
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <SearchResult numOfResult={characters.length} />
        <Favourite
          favourite={favourite}
          onDeleteFavourite={handleDeleteFavourite}
        />
      </Navbar>
      <div className="main">
        <CharacterList
          selectedId={selectedId}
          characters={characters}
          onSelectCharacter={handleSelectCharacter}
        />
        <CharacterDetails
          selectedId={selectedId}
          onAddFavourit={handleAddFavourite}
          isAddToFavourit={isAddToFavourit}
        />
      </div>
    </div>
  );
}
export default App;
