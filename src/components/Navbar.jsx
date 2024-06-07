import { HeartIcon } from "@heroicons/react/24/outline";

export default function Navbar({ children }) {
  return (
    <nav className="navbar">
      <Logo />
      {children}
      <Favourite />
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
function Favourite() {
  return (
    <button className="heart">
      <HeartIcon className="icon" />
      <span className="badge">0</span>
    </button>
  );
}
