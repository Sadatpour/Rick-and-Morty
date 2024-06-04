import { HeartIcon } from "@heroicons/react/24/outline";

export default function Navbar({ numOfResult }) {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        &#8475;&#8499;<span>Rick & Morty</span>
      </div>
      <input type="text" className="text-field" placeholder="search..." />
      <div className="navbar__result">
        Found <span>{numOfResult.length}</span> Characters
      </div>
      <button className="heart">
        <HeartIcon className="icon" />
        <span className="badge">0</span>
      </button>
    </nav>
  );
}
