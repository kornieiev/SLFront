import { Key } from "../Key/Key";
import css from "./KeyList.module.css";

export const KeyList = ({ data, makers }) => {
  return (
    <>
      <p>By your request fouded {data.length} options:</p>
      <ul className={css.list}>
        {data.map((item) => (
          <li key={item._id}>
            <Key item={item} cars={makers} />
          </li>
        ))}
      </ul>
    </>
  );
};
