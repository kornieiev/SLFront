import { Field } from "formik";
import css from "../ModalContent.module.css";

export default function DealerPrice({ item }) {
  return (
    <div className={css.fieldWrapper}>
      <label className={css.inputLabel} htmlFor='Dealer Price'>
        Dealer Price:{" "}
        {item && <span className={css.oldName}>{item["Dealer Price"]}</span>}
      </label>
      <div className={css.yearWrapper}>
        <Field
          className={css.inputField}
          id='Dealer Price'
          name='Dealer Price'
          placeholder='Dealer Price'
        />
      </div>
    </div>
  );
}
