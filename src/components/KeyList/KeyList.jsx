import { useSelector } from "react-redux";
import { Key } from "../Key/Key";
import css from "./KeyList.module.css";
import { selectkeysForRender } from "../../redux/keys/selectors";

export const KeyList = () => {
  const keysForRender = useSelector(selectkeysForRender);

  return (
    <>
      <p>
        By your request founded <strong>{keysForRender.length}</strong>{" "}
        {keysForRender.length > 0 ? "options:" : "option"}
      </p>
      <ul className={css.list}>
        {keysForRender.map((item) => (
          <li key={item._id}>
            <Key item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};
