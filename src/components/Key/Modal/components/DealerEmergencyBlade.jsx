import { Field } from "formik";
import css from "../ModalContent.module.css";

export default function DealerEmergencyBlade({ item }) {
  return (
    <div className={css.fieldWrapper}>
      <label className={css.inputLabel} htmlFor='Dealer Emergency Blade'>
        Dealer Emergency Blade:{" "}
        {item && (
          <span className={css.oldName}>{item["Dealer Emergency Blade"]}</span>
        )}
      </label>
      <div className={css.yearWrapper}>
        <Field
          className={css.inputField}
          id='Dealer Emergency Blade'
          name='Dealer Emergency Blade'
          placeholder='Dealer Emergency Blade'
        />
      </div>
    </div>
  );
}
