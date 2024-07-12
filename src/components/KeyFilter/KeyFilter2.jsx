import { useEffect, useState, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilters,
  selectKeysByMaker,
  selectModelsArr,
  selectYearsArr,
} from "../../redux/keys/selectors";
import { KeyList } from "../KeyList/KeyList";

import css from "./KeyFilter.module.css";
import { fetchKeysByMaker } from "../../redux/keys/operations";

import ALLKEYS from "../../constants/AllKeysJSON.json";
import { setFilters2 } from "../../redux/keys/slice";

export default function KeyFilter2() {
  const keysByMaker = useSelector(selectKeysByMaker);
  const filters2 = useSelector(selectFilters);
  const modelsArr = useSelector(selectModelsArr);
  const yearsArr = useSelector(selectYearsArr);

  const dispatch = useDispatch();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    if (name === "Maker") {
      dispatch(setFilters2([name, value]));
    }

    if (name === "Model") {
      dispatch(setFilters2([name, value]));
    }

    if (name === "Year") {
      dispatch(setFilters2([name, value]));
    }

    if (name === "TypeOfKey") {
    }
  }, []);

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
          {keysByMaker &&
            keysByMaker.map((item) => (
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
            {[...new Set(modelsArr.map((item) => item.Year))].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </li>
      )}
      {filters2.modelsArr?.length > 0 &&
        {
          /* <KeyList data={renderData} makers={filters.makers} /> */
        }}
    </ul>
  );
}
