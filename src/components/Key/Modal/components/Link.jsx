import { Field } from "formik";
import css from "../ModalContent.module.css";

export default function Link({ item }) {
  return (
    <div className={css.fieldWrapper}>
      <label className={css.inputLabel} htmlFor='Link'>
        Link: {item && <span className={css.oldName}>{item["Link"]}</span>}
      </label>
      <div className={css.yearWrapper}>
        <Field
          className={css.inputField}
          id='Link'
          name='Link'
          placeholder='Link'
        />
      </div>
    </div>
  );
}
