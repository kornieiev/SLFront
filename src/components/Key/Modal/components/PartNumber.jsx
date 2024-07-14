import { Field } from "formik";
import css from "../ModalContent.module.css";

export default function PartNumber({ item }) {
  return (
    <div className={css.fieldWrapper}>
      <label className={css.inputLabel} htmlFor='Part #'>
        Part #: {item && <span className={css.oldName}>{item["Part #"]}</span>}
      </label>
      <div className={css.yearWrapper}>
        <Field
          className={css.inputField}
          id='Part #'
          name='Part #'
          placeholder='Part #'
        />
      </div>
    </div>
  );
}
