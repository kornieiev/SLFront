import { Field } from "formik";
import css from "../ModalContent.module.css";

export default function DealerLocation({ item }) {
  return (
    <div className={css.fieldWrapper}>
      <label className={css.inputLabel} htmlFor='Dealer Location'>
        Dealer Location:{" "}
        {item && <span className={css.oldName}>{item["Dealer Location"]}</span>}
      </label>
      <div className={css.yearWrapper}>
        <Field
          className={css.inputField}
          id='Dealer Location'
          name='Dealer Location'
          placeholder='Dealer Location'
        />
      </div>
    </div>
  );
}
