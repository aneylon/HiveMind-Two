import { NavLink } from "react-router";

export const SideBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end>
            Home / Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/tools" end>
            Tools
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/faq">FAQ</NavLink>
        </li>
      </ul>
    </nav>
  );
};
