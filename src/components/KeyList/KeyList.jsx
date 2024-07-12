import { useSelector } from "react-redux";
import { Key } from "../Key/Key";
import css from "./KeyList.module.css";
import { getFilteredKeys } from "../../redux/keys/slice";
import { useEffect } from "react";

export const KeyList = ({ makers }) => {
  console.log("🚀 ~ KeyList ~ makers:", makers);
  const filteredKeys = useSelector(getFilteredKeys);
  console.log("🚀 ~ KeyList ~ filteredKeys:", filteredKeys);

  useEffect(() => {}, [filteredKeys]);

  return (
    <>
      <p>
        By your request founded <strong>{filteredKeys.length}</strong>{" "}
        {filteredKeys.length > 1 ? "options:" : "option"}
      </p>
      <ul className={css.list}>
        {filteredKeys.map((item) => (
          <li key={item._id}>
            <Key item={item} cars={makers} />
          </li>
        ))}
      </ul>
    </>
  );
};
