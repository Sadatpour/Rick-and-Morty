import { ArrowUpCircleIcon } from "@heroicons/react/20/solid";
import { character, episodes } from "../../data/data";

function CharacterDetails() {
  return (
    <div className="" style={{ flex: 1 }}>
      <div className="character-detail">
        <img
          src={character[3].image}
          alt={character[3].name}
          className="character-detail__img"
        />
        <div className="character-detail__info">
          <h3 className="name">
            <span>{character[3].gender === "Male" ? "👨‍💼 " : "👩‍⚕️ "}</span>
            <span> - {character[3].name}</span>
          </h3>
          <div className="info">
            <span
              className={`status ${
                character[3].status === "Dead" ? "red" : ""
              }`}
            ></span>
            <span> {character[3].status} </span>
            <span> - {character[3].species}</span>
          </div>
          <div className="location">
            <p className="">Last known location: </p>
            <p className="">{character[3].location.name}</p>
          </div>
          <div className="actions">
            <buton className="btn btn--primary">Add to Favorite</buton>
          </div>
        </div>
      </div>
      <div className="character-episodes">
        <div className="title">
          <h2>List of Episodes: </h2>
          <button>
            <ArrowUpCircleIcon className="icon" />
          </button>
        </div>
        <ul>
          {episodes.slice(0, 10).map((item, index) => (
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
