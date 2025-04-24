import React from 'react';

import { NavItems } from '@shared/constants/data';
import { Link } from 'react-router-dom';

interface NavBarProps {
  ulClassName?: string;
}

export const NavBar: React.FC<NavBarProps> = ({ ulClassName }) => {
  return (
    <nav className="nav">
      <ul className={`list-menu ${ulClassName ?? ''}`}>
        {NavItems.map((item) => (
          <li className="list-item menu-item" key={item.id}>
            <Link className="item-link" to={item.href}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
