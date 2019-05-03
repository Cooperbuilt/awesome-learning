import React from "react";
import { Link } from "gatsby";
import "./Menu.scss";

const Menu = ({ menu }) => (
  <nav className="Menu">
    <ul className="Menu-list">
      {menu.map(item => (
        <li className="Menu-list-item" key={item.path}>
          <Link
            to={item.path}
            className="Menu-list-item-link"
            activeClassName="Menu-list-item-link--active"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
