import { Field } from "formik";
import css from "../ModalContent.module.css";

export default function NoButtons({ item }) {
  return (
    <div className={css.fieldWrapper}>
      <label className={css.inputLabel} htmlFor='No Buttons'>
        No Buttons:{" "}
        {item && <span className={css.oldName}>{item["No Buttons"]}</span>}
      </label>
      <div className={css.yearWrapper}>
        <Field
          className={css.inputField}
          id='No Buttons'
          name='No Buttons'
          placeholder='No Buttons'
          type='number'
        />
      </div>
    </div>
  );
}
