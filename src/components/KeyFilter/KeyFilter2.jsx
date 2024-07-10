import { useEffect, useState, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectKeysByMaker } from "../../redux/keys/selectors";
import { KeyList } from "../KeyList/KeyList";

import css from "./KeyFilter.module.css";
import { fetchKeysByMaker } from "../../redux/keys/operations";

import ALLKEYS from "../../constants/AllKeysJSON.json";

export default function KeyFilter2() {
  const keysByMaker = useSelector(selectKeysByMaker);
  const dispatch = useDispatch();

  const filtersInitialState = {
    Maker: "",
    Model: "",
    Year: "",
    TypeOfKey: "",
  };

  const uniqueDataInitialState = useMemo(
    () => ({
      makers: [...new Set(ALLKEYS.map((item) => item.Maker))],
      models: [],
      years: [],
      keyType: [],
    }),
    []
  );

  const [filters, setFilters] = useState(filtersInitialState);
  const [uniqueData, setUniqueData] = useState(uniqueDataInitialState);
  const [dataFilteredByYears, setDataFilteredByYears] = useState([]);
  const [filteredKeysType, setFilteredKeysType] = useState([]);
  const [renderData, setRenderData] = useState([]);

  useEffect(() => {
    if (keysByMaker.length > 0) {
      setDataFilteredByYears(
        keysByMaker.filter(
          (item) => item.Maker === filters.Maker && item.Model === filters.Model
        )
      );
    }
  }, [filters.Maker, filters.Model, keysByMaker]);

  useEffect(() => {
    if (keysByMaker.length > 0) {
      setFilteredKeysType(
        keysByMaker.filter((item) => item.Year === filters.Year)
      );
    }
  }, [filters.Year, keysByMaker]);

  const uniqueYears = useMemo(
    () => [...new Set(dataFilteredByYears.map((item) => item.Year))],
    [dataFilteredByYears]
  );

  const uniqueKeysType = useMemo(
    () => [...new Set(filteredKeysType.map((item) => item["Type of Key"]))],
    [filteredKeysType]
  );

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      if (name === "Maker") {
        setFilters({
          ...filtersInitialState,
          [name]: value,
        });
        setRenderData([]);

        setUniqueData({
          ...uniqueData,
          models: [
            ...new Set(
              ALLKEYS.filter(
                (item) =>
                  item.Maker.toLowerCase().trim() === value.toLowerCase().trim()
              ).map((item) => item.Model)
            ),
          ],
        });
      }

      if (name === "Model") {
        setFilters({ ...filters, [name]: value, Year: "" });
        setRenderData([]);
        setFilteredKeysType([]);
        dispatch(
          fetchKeysByMaker({
            maker: filters.Maker,
            model: value,
          })
        );
      }

      if (name === "Year") {
        setFilters({ ...filters, [name]: value, TypeOfKey: "" });
        setRenderData([]);
        setFilteredKeysType([]);

        setUniqueData({
          ...uniqueData,
          years: keysByMaker.filter((item) => item.Year === value),
        });
      }

      if (name === "TypeOfKey") {
        setFilters({ ...filters, [name]: value });
        setRenderData(
          keysByMaker.filter((item) => item["Type of Key"] === value)
        );
      }
    },
    [filters, filtersInitialState, keysByMaker, uniqueData, dispatch]
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
          value={filters.Maker}
          onChange={handleChange}
        >
          <option value=''>--Please choose maker--</option>
          {uniqueData.makers.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </li>
      {/* Step two - Model */}
      {filters.Maker && (
        <li className={css.item}>
          <label className={css.label} htmlFor='Model'>
            Model:{" "}
          </label>
          <select
            className={css.select}
            type='text'
            name='Model'
            placeholder='Model'
            value={filters.Model}
            onChange={handleChange}
          >
            <option value=''>--Please choose model--</option>
            {uniqueData.models.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </li>
      )}
      {/* Step three - Year */}
      {filters.Model && (
        <li className={css.item}>
          <label className={css.label} htmlFor='Year'>
            Year:{" "}
          </label>
          <select
            className={css.select}
            type='text'
            name='Year'
            placeholder='Year'
            value={filters.Year}
            onChange={handleChange}
          >
            <option value=''>--Please choose year--</option>
            {uniqueYears.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </li>
      )}
      {/* Step four - TypeOfKey */}
      {filters.Year && (
        <li className={css.item}>
          <label className={css.label} htmlFor='TypeOfKey'>
            TypeOfKey:{" "}
          </label>
          <select
            className={css.select}
            type='text'
            name='TypeOfKey'
            placeholder='TypeOfKey'
            value={filters.TypeOfKey}
            onChange={handleChange}
          >
            <option value=''>--Please choose TypeOfKey--</option>
            {uniqueKeysType.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </li>
      )}
      {renderData.length > 0 && (
        <KeyList data={renderData} makers={uniqueData.makers} />
      )}
    </ul>
  );
}
