import { Field } from "formik";
import css from "../ModalContent.module.css";

export default function PriceProgramOnly({ item }) {
  return (
    <div className={css.fieldWrapper}>
      <label className={css.inputLabel} htmlFor='Price Program Only'>
        Price Program Only:{" "}
        {item && (
          <span className={css.oldName}>{item["Price Program Only"]}</span>
        )}
      </label>
      <div className={css.yearWrapper}>
        <Field
          className={css.inputField}
          id='Price Program Only'
          name='Price Program Only'
          placeholder='Price Program Only'
        />
      </div>
    </div>
  );
}
