import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { useAuth } from "../../hooks";
import css from "./Navigation.module.css";

export const Navigation = () => {
  const { isLoggedIn, role } = useAuth();

  return (
    <nav>
      <NavLink
        className={({ isActive }) =>
          classNames(css.link, { [css.activeLink]: isActive })
        }
        to='/'
      >
        Home
        <span role='img' aria-label='Greeting icon'>
          {" "}
          🔐
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
        </>
      )}
    </nav>
  );
};
