import { ErrorMessage, Field, useField } from "formik";
import css from "../ModalContent.module.css";

export default function Year({ item }) {
  const [field, meta] = useField("YearStart");
  const [field2, meta2] = useField("YearEnd");

  return (
    <div className={css.fieldWrapper}>
      <label className={css.inputLabel} htmlFor='Year'>
        Year: {item && <span className={css.oldName}>{item.Year}</span>}
      </label>
      <div className={css.yearWrapper}>
        <Field
          className={`${css.inputField} ${
            meta.touched && meta.error ? css.errorField : ""
          }`}
          id='YearStart'
          name='YearStart'
          placeholder='YearStart'
          pattern='^(19[0-9]{2}|20[0-9]{2}|2100)$'
        />
        <ErrorMessage name='YearStart' component='div' />

        <Field
          className={`${css.inputField} ${
            meta2.touched && meta2.error ? css.errorField : ""
          }`}
          id='YearEnd'
          name='YearEnd'
          placeholder='YearEnd'
          pattern='^(19[0-9]{2}|20[0-9]{2}|2100)$'
        />
        <ErrorMessage name='YearEnd' component='div' />
      </div>
    </div>
  );
}
