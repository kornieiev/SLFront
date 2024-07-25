import { useDispatch, useSelector } from "react-redux";
import { Key } from "../Key/Key";
import css from "./KeyList.module.css";
import { selectkeysForRender } from "../../redux/keys/selectors";
import { setDealer } from "../../redux/keys/slice";
import { selectAllDealers } from "../../redux/dealers/selectors";

export const KeyList = () => {
  const DealerList = useSelector(selectAllDealers);
  const keysForRender = useSelector(selectkeysForRender);

  const dispatch = useDispatch();

  function handleChange(e) {
    if (e.currentTarget.value === "Choose Dealer") {
      dispatch(setDealer(""));
      return;
    }
    dispatch(setDealer(e.currentTarget.value));
  }

  return (
    <>
      <div className={css.optionsWrapper}>
        <p>
          By your request founded <strong>{keysForRender.length}</strong>{" "}
          {keysForRender.length > 0 ? "options:" : "option"}
        </p>

        <select name='dealer' onChange={handleChange}>
          <option defaultValue=''>Choose Dealer</option>
          {DealerList.map((item) => (
            <option key={item._id} value={item.dealerName}>
              {item.dealerName}
            </option>
          ))}
        </select>
      </div>

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
