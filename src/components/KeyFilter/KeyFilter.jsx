import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import {
  selectFilters,
  selectMakersArr,
  selectModelsArr,
  selectYearsArr,
  selectTypeOfKeyArr,
  selectkeysForRender,
} from "../../redux/keys/selectors";

import css from "./KeyFilter.module.css";

import { setFilters } from "../../redux/keys/slice";
import { KeyList } from "../KeyList/KeyList";

export default function KeyFilter() {
  const makersArr = useSelector(selectMakersArr);
  const filters2 = useSelector(selectFilters);
  const modelsArr = useSelector(selectModelsArr);
  const yearsArr = useSelector(selectYearsArr);
  const typeOfKeyArr = useSelector(selectTypeOfKeyArr);
  const keysForRender = useSelector(selectkeysForRender);

  // Мемозированное вычисление sortedYearsArr
  const sortedYearsArr = useMemo(() => {
    if (yearsArr.length > 0) {
      const years = new Set(yearsArr.map((item) => item.Year));
      return [...years];
    }
    return [];
  }, [yearsArr]);

  // Мемозированное вычисление sortedARR
  const sortedARR = useMemo(() => {
    if (sortedYearsArr.length > 0) {
      const result = sortedYearsArr.map((item) => {
        const start = item.split("-")[0];
        return { [start]: item };
      });
      return result.sort((a, b) => {
        const keyA = parseInt(Object.keys(a)[0]);
        const keyB = parseInt(Object.keys(b)[0]);
        return keyA - keyB;
      });
    }
    return [];
  }, [sortedYearsArr]);

  const dispatch = useDispatch();

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      if (name === "Maker") {
        dispatch(setFilters([name, value]));
      }

      if (name === "Model") {
        dispatch(setFilters([name, value]));
      }

      if (name === "Year") {
        dispatch(setFilters([name, value]));
      }

      if (name === "TypeOfKey") {
        dispatch(setFilters([name, value]));
      }
    },
    [dispatch]
  );

  return (
    <>
      <h3 className={css.title}>Choose needed key below:</h3>

      <ul className={css.list}>
        {/* Step one - Maker */}
        <li className={css.item}>
          <label className={css.label} htmlFor='Maker'>
            Make:{" "}
          </label>
          <select
            key={filters2.Maker}
            className={css.select}
            type='text'
            name='Maker'
            value={filters2.Maker}
            onChange={handleChange}
          >
            <option defaultValue>--Please choose maker--</option>
            {makersArr &&
              makersArr.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
          </select>
        </li>
        {/* Step two - Model */}
        {filters2.Maker && (
          <li className={css.item}>
            <label className={css.label} htmlFor='Model'>
              Model:{" "}
            </label>
            <select
              key={filters2.Model}
              className={css.select}
              type='text'
              name='Model'
              placeholder='Model'
              value={filters2.Model}
              onChange={handleChange}
            >
              <option defaultValue>--Please choose model--</option>
              {[...new Set(modelsArr.map((item) => item.Model))].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </li>
        )}
        {/* Step three - Year */}
        {filters2.Model && (
          <li className={css.item}>
            <label className={css.label} htmlFor='Year'>
              Year:{" "}
            </label>
            <select
              key={filters2.Year}
              className={css.select}
              type='text'
              name='Year'
              placeholder='Year'
              value={filters2.Year}
              onChange={handleChange}
            >
              <option defaultValue>--Please choose year--</option>
              {sortedARR.map((item) => {
                const year = Object.values(item)[0];
                return (
                  <option
                    // key={`${Object.keys(item)}-${nanoid()}`}
                    key={year}
                    // value={Object.values(item)}
                    value={year}
                  >
                    {/* {Object.values(item)} */}
                    {year}
                  </option>
                );
              })}
            </select>
          </li>
        )}
        {/* Step four - TypeOfKey */}
        {filters2.Year && (
          <li className={css.item}>
            <label className={css.label} htmlFor='TypeOfKey'>
              TypeOfKey:{" "}
            </label>
            <select
              key={filters2.TypeOfKey}
              className={css.select}
              type='text'
              name='TypeOfKey'
              placeholder='TypeOfKey'
              value={filters2.TypeOfKey}
              onChange={handleChange}
            >
              <option defaultValue>--Please choose TypeOfKey--</option>
              {[
                ...new Set(typeOfKeyArr.map((item) => item["Type of Key"])),
              ].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </li>
        )}
        {keysForRender?.length > 0 && (
          <>
            <KeyList />
          </>
        )}
      </ul>
    </>
  );
}
