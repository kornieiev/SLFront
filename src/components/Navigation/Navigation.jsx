import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { useAuth } from "../../hooks";
import HomeLogo from "../../components/HomeLogo/HomeLogo";

import css from "./Navigation.module.css";
import HomeLogoShort from "components/HomeLogo/HomeLogoShort";

export const Navigation = () => {
  const { isLoggedIn, role } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink
        className={({ isActive }) =>
          classNames(css.link, { [css.activeLink]: isActive })
        }
        to='/'
      >
        <span>
          <HomeLogoShort />
          <HomeLogo />
        </span>
      </NavLink>
      {isLoggedIn && (
        <>
          {role === "admin" ? (
            <NavLink
              className={({ isActive }) =>
                classNames(css.link, { [css.activeLink]: isActive })
              }
              to='/keys'
            >
              Find/Change
            </NavLink>
          ) : (
            <NavLink
              className={({ isActive }) =>
                classNames(css.link, { [css.activeLink]: isActive })
              }
              to='/keys'
            >
              Find key
            </NavLink>
          )}

          {role === "admin" && (
            <NavLink
              className={({ isActive }) =>
                classNames(css.link, { [css.activeLink]: isActive })
              }
              to='/addKey'
            >
              Add key
            </NavLink>
          )}

          {role === "admin" && (
            <NavLink
              className={({ isActive }) =>
                classNames(css.link, { [css.activeLink]: isActive })
              }
              to='/addDealer'
            >
              Clients
            </NavLink>
          )}
        </>
      )}
    </nav>
  );
};
