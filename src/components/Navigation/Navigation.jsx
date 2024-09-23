import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { useAuth } from "../../hooks";
import HomeLogo from "../../components/HomeLogo/HomeLogo";

import css from "./Navigation.module.css";
import HomeLogoShort from "components/HomeLogo/HomeLogoShort";
import { useDispatch } from "react-redux";
import { fetchKeys } from "../../redux/keys/operations";
import { setFilters } from "../../redux/keys/slice";
import { fetchDealers } from "../../redux/dealers/operations";

export const Navigation = () => {
  const dispatch = useDispatch();

  const { isLoggedIn, role } = useAuth();

  const handleFindKeyClick = () => {
    dispatch(fetchKeys());
    dispatch(setFilters(["Maker", ""]));
  };
  const handleClientsClick = () => {
    dispatch(fetchDealers());
  };

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
              onClick={handleFindKeyClick}
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
              onClick={handleClientsClick}
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
