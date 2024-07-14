import { Field } from "formik";
import css from "../ModalContent.module.css";

export default function Comments({ item }) {
  return (
    <div className={css.fieldWrapper}>
      <label className={css.inputLabel} htmlFor='Comments'>
        Comments:{" "}
        {item && <span className={css.oldName}>{item["Comments"]}</span>}
      </label>
      <div className={css.yearWrapper}>
        <Field
          className={css.inputField}
          id='Comments'
          name='Comments'
          placeholder='Comments'
        />
      </div>
    </div>
  );
}
