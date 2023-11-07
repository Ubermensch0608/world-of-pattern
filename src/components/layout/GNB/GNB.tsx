import { NavLink } from "react-router-dom";
import "./GNB.css";

export const GNB = () => {
  return (
    <header className="gnb__header">
      <div>
        <NavLink to="/" className="header__logo" unstable_viewTransition>
          <h2>World of Pattern</h2>
        </NavLink>
      </div>
      <nav className="gnb__header-nav">
        <NavLink
          to="/strategy"
          className="header__nav-link"
          unstable_viewTransition
        >
          Strategy
        </NavLink>
      </nav>
    </header>
  );
};
