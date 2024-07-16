import { ErrorMessage, Field } from "formik";
import css from "../ModalContent.module.css";

export default function Year({ item }) {
  return (
    <div className={css.fieldWrapper}>
      <label className={css.inputLabel} htmlFor='Year'>
        Year: {item && <span className={css.oldName}>{item.Year}</span>}
      </label>
      <div className={css.yearWrapper}>
        <Field
          className={css.inputField}
          id='YearStart'
          name='YearStart'
          placeholder='YearStart'
          type='number'
          pattern='^(19[0-9]{2}|20[0-9]{2}|2100)$'
        />
        <ErrorMessage name='YearStart' component='div' />

        <Field
          className={css.inputField}
          id='YearEnd'
          name='YearEnd'
          placeholder='YearEnd'
          type='number'
          pattern='^(19[0-9]{2}|20[0-9]{2}|2100)$'
        />
        <ErrorMessage name='YearEnd' component='div' />
      </div>
    </div>
  );
}
