import { ArrowUpCircleIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { EyeIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { FilmIcon } from "@heroicons/react/24/outline";

function CharacterDetails({ selectedId, onAddFavourit, isAddToFavourit }) {
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/${selectedId}`
      );
      setCharacter(data);

      const episodesId = data.episode.map(e => e.split("/").at(-1));
      const { data: episodeData } = await axios.get(
        `https://rickandmortyapi.com/api/episode/${episodesId}`
      );
      setEpisodes([episodeData].flat());
    }
    if (selectedId) fetchData();
  }, [selectedId]);

  if (!character)
    return (
      <div className="details">
        Please select a{" "}
        <span>
          <button className="red icon">
            <EyeIcon style={{ margin: "-5px 1px" }} />
          </button>
          character
        </span>
        {"  "}
        to view details
      </div>
    );
  return (
    <div className="" style={{ flex: 1 }}>
      <div className="character-detail">
        <img
          src={character.image}
          alt={character.name}
          className="character-detail__img"
        />
        <div className="character-detail__info">
          <h3 className="name">
            <span>{character.gender === "Male" ? "👨‍💼 " : "👩‍⚕️ "}</span>
            <span> - {character.name}</span>
          </h3>
          <div className="info">
            <span
              className={`status ${character.status === "Dead" ? "red" : ""}`}
            ></span>
            <span> {character.status} </span>
            <span> - {character.species}</span>
          </div>
          <div className="location">
            <p className="">Last known location: </p>
            <p className="">{character.location.name}</p>
          </div>
          <div className="actions">
            {isAddToFavourit ? (
              <p>Character Added ✔️ </p>
            ) : (
              <button
                onClick={() => onAddFavourit(character)}
                className="btn btn--primary"
              >
                Add to Favorite
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="character-episodes">
        <div className="title">
          <h2>List of Episodes: </h2>
          <button>
            <FilmIcon className="icon" />
          </button>
        </div>
        <ul>
          {episodes.map((item, index) => (
            <li key={item.id}>
              <div>
                {String(index + 1).padStart(2, "0")}- {item.episode} :{" "}
                <strong>{item.name}</strong>
              </div>
              <div className="badge badge--secondary">{item.air_date}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CharacterDetails;
