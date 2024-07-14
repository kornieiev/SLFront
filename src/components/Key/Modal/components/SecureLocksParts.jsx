import { Field } from "formik";
import css from "../ModalContent.module.css";

export default function SecureLocksParts({ item }) {
  return (
    <div className={css.fieldWrapper}>
      <label className={css.inputLabel} htmlFor='Secure Locks Parts'>
        Secure Locks Parts:{" "}
        {item && (
          <span className={css.oldName}>{item["Secure Locks Parts"]}</span>
        )}
      </label>
      <div className={css.yearWrapper}>
        <Field
          className={css.inputField}
          id='Secure Locks Parts'
          name='Secure Locks Parts'
          placeholder='Secure Locks Parts'
        />
      </div>
    </div>
  );
}
