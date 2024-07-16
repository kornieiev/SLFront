import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks";
import css from "./Navigation.module.css";

export const Navigation = () => {
  const { isLoggedIn, role } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to='/'>
        Home
      </NavLink>
      {isLoggedIn && (
        <>
          {role === "admin" ? (
            <NavLink className={css.link} to='/keys'>
              Find & change key info
            </NavLink>
          ) : (
            <NavLink className={css.link} to='/keys'>
              Find key
            </NavLink>
          )}

          {role === "admin" && (
            <NavLink className={css.link} to='/addKey'>
              Add key
            </NavLink>
          )}
        </>
      )}
    </nav>
  );
};
