import { Field } from "formik";
import css from "../ModalContent.module.css";

export default function PriceAllKeysLost({ item }) {
  return (
    <div className={css.fieldWrapper}>
      <label className={css.inputLabel} htmlFor='Price All Keys Lost'>
        Price All Keys Lost:{" "}
        {item && (
          <span className={css.oldName}>{item["Price All Keys Lost"]}</span>
        )}
      </label>
      <div className={css.yearWrapper}>
        <Field
          className={css.inputField}
          id='Price All Keys Lost'
          name='Price All Keys Lost'
          placeholder='Price All Keys Lost'
        />
      </div>
    </div>
  );
}
