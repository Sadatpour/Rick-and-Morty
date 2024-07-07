import { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { Character } from "./CharacterList";
import Modal from "./Modal";
import { TrashIcon } from "@heroicons/react/20/solid";

export default function Navbar({ children }) {
  return (
    <nav className="navbar">
      <Logo />
      {children}
    </nav>
  );
}
function Logo() {
  return (
    <div className="navbar__logo">
      &#8475;&#8499;<span>Rick & Morty</span>
    </div>
  );
}
export function Search({ query, setQuery }) {
  return (
    <input
      value={query}
      onChange={e => setQuery(e.target.value)}
      type="text"
      className="text-field"
      placeholder="search..."
    />
  );
}
export function SearchResult({ numOfResult }) {
  return (
    <div className="navbar__result">
      Found <span>{numOfResult}</span> Characters
    </div>
  );
}
export function Favourite({ favourite, onDeleteFavourite }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal onOpen={setIsOpen} open={isOpen} title="List of Favourites">
        {favourite.map(item => (
          <Character key={item.id} item={item} selectedId="1">
            <button onClick={()=> onDeleteFavourite(item.id)} className="icon red">
              <TrashIcon />
            </button>
          </Character>
        ))}
      </Modal>
      <button className="heart" onClick={() => setIsOpen(is => !is)}>
        <HeartIcon className="icon" />
        <span className="badge">{favourite.length}</span>
      </button>
    </>
  );
}
