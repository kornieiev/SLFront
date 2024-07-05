// import { useSelector } from "react-redux";
import { Key } from "../Key/Key";
// import { selectAllTasks } from "../../redux/keys/selectors";
import css from "./KeyList.module.css";

export const KeyList = ({ data }) => {
  // const keys = useSelector(selectAllTasks);

  return (
    <ul className={css.list}>
      {data.map((item) => (
        <li key={item._id}>
          <Key item={item} />
        </li>
      ))}
    </ul>
  );
};
