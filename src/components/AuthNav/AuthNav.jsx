import { NavLink } from "react-router-dom";
import classNames from "classnames";
import css from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          classNames(css.link, { [css.activeLink]: isActive })
        }
        to='/register'
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          classNames(css.link, { [css.activeLink]: isActive })
        }
        to='/login'
      >
        Log In
      </NavLink>
    </div>
  );
};
