import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
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

import { makersList } from "../../constants/constants";
console.log("🚀 ~ makersList:", makersList);

export default function KeyFilter() {
  const makersArr = useSelector(selectMakersArr);
  const filters2 = useSelector(selectFilters);
  const modelsArr = useSelector(selectModelsArr);
  const yearsArr = useSelector(selectYearsArr);
  const typeOfKeyArr = useSelector(selectTypeOfKeyArr);
  const keysForRender = useSelector(selectkeysForRender);

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
    <ul className={css.list}>
      {/* Step one - Maker */}
      <li className={css.item}>
        <label className={css.label} htmlFor='Maker'>
          Maker:{" "}
        </label>
        <select
          className={css.select}
          type='text'
          name='Maker'
          value={filters2.Maker}
          onChange={handleChange}
        >
          <option value=''>--Please choose maker--</option>
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
            className={css.select}
            type='text'
            name='Model'
            placeholder='Model'
            value={filters2.Model}
            onChange={handleChange}
          >
            <option value=''>--Please choose model--</option>
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
            className={css.select}
            type='text'
            name='Year'
            placeholder='Year'
            value={filters2.Year}
            onChange={handleChange}
          >
            <option value=''>--Please choose year--</option>
            {[...new Set(yearsArr.map((item) => item.Year))].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
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
            className={css.select}
            type='text'
            name='TypeOfKey'
            placeholder='TypeOfKey'
            value={filters2.TypeOfKey}
            onChange={handleChange}
          >
            <option value=''>--Please choose TypeOfKey--</option>
            {[...new Set(typeOfKeyArr.map((item) => item["Type of Key"]))].map(
              (item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              )
            )}
          </select>
        </li>
      )}
      {keysForRender?.length > 0 && (
        <>
          <KeyList />
        </>
      )}
    </ul>
  );
}
