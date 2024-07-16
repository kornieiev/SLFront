import { ErrorMessage, Field } from "formik";
import css from "../ModalContent.module.css";

export default function Maker({ item }) {
  return (
    <div className={css.fieldWrapper}>
      <label className={css.inputLabel} htmlFor='Model'>
        Model: {item && <span className={css.oldName}>{item.Model}</span>}
      </label>
      <div className={css.yearWrapper}>
        <Field
          className={css.inputField}
          id='Model'
          name='Model'
          placeholder='Model'
        />
        <ErrorMessage name='Model' component='div' />
      </div>
    </div>
  );
}
