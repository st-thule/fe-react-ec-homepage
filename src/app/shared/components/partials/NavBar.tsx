import { NavItems } from "@shared/constants/data";

import React from "react";

interface NavBarProps {
  ulClassName?: string;
}

export const NavBar: React.FC<NavBarProps> = ({ ulClassName }) => {
  return (
    <nav className="nav">
      <ul className={`list-menu ${ulClassName ?? ""}`}>
        {NavItems.map((item) => (
          <li className="list-item menu-item" key={item.id}>
            <a className="item-link" href={item.href}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
