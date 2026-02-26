import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex justify-center">
      {/* Bouton hamburger */}
      <button
        aria-label={showMenu ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={showMenu}
        className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-white/40 p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} />
      </button>

      <nav
        role="navigation"
        aria-label="Navigation principale"
        style={{
          bottom: showMenu
            ? "calc(2.5rem + env(safe-area-inset-bottom))"
            : "-100%",
        }}
        className="fixed z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300"
      >
        {nav.map((item, i) => (
          <a
            key={item.link}
            href={item.link}
            aria-label={`Section ${item.link.replace("#", "")}`}
            aria-current={i === active ? "page" : undefined}
            onClick={() => {
              setActive(i);
              setShowMenu(false); // ferme le menu après navigation
            }}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer transition-colors ${
              i === active ? "bg-dark_primary text-white" : "hover:bg-slate-300"
            }`}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
