import { LifebuoyIcon, MusicalNoteIcon } from "@heroicons/react/20/solid";
import { FilmIcon, MoonIcon, TvIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { CogIcon } from "@heroicons/react/24/solid";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        &#8475;&#8499;<span>Rick & Morty</span>
      </div>
      <input type="text" className="text-field" placeholder="search..." />
      <div className="navbar__result">Found X characters</div>
      <button className="heart">
        <HeartIcon className="icon" />
        <span className="badge">4</span>
      </button>
    </nav>
  );
}
