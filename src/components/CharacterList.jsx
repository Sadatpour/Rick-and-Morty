import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
function CharacterList({ characters, onSelectCharacter, selectedId }) {
  return (
    <div className="characters-list">
      {characters.map(item => (
        <Character
          selectedId={selectedId}
          key={item.id}
          item={item}
          onSelectCharacter={onSelectCharacter}
        />
      ))}
    </div>
  );
}

export default CharacterList;

function Character({ item, onSelectCharacter, selectedId }) {
  return (
    <div className="list__item" onClick={() => onSelectCharacter(item.id)}>
      <img src={item.image} alt={item.name} />
      <CharacterName item={item} />
      <CharacterInfo item={item} />
      <button className="red icon">
        {selectedId === item.id ? (
          <XMarkIcon style={{ color: "white" }} />
        ) : (
          <EyeIcon />
        )}
      </button>
    </div>
  );
}
function CharacterName({ item }) {
  return (
    <h3 className="name">
      <span>{item.gender === "Male" ? "👨‍💼 " : "👩‍⚕️ "}</span>
      <span>{item.name}</span>
    </h3>
  );
}
function CharacterInfo({ item }) {
  return (
    <div className="list-item__info info">
      <span className={`status ${item.status === "Dead" ? "red" : ""}`}></span>
      <span> {item.status} </span>
      <span> - {item.species}</span>
    </div>
  );
}
