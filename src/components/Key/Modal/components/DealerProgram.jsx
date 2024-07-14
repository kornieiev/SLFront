import { Field } from "formik";
import css from "../ModalContent.module.css";

export default function DealerProgram({ item }) {
  return (
    <div className={css.fieldWrapper}>
      <label className={css.inputLabel} htmlFor='Dealer Program'>
        Dealer Program:{" "}
        {item && <span className={css.oldName}>{item["Dealer Program"]}</span>}
      </label>
      <div className={css.yearWrapper}>
        <Field
          className={css.inputField}
          id='Dealer Program'
          name='Dealer Program'
          placeholder='Dealer Program'
        />
      </div>
    </div>
  );
}
