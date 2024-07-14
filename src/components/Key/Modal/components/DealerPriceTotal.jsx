import { Field } from "formik";
import css from "../ModalContent.module.css";

export default function DealerPriceTotal({ item }) {
  return (
    <div className={css.fieldWrapper}>
      <label className={css.inputLabel} htmlFor='Dealer Price Total'>
        Dealer Price Total:{" "}
        {item && (
          <span className={css.oldName}>{item["Dealer Price Total"]}</span>
        )}
      </label>
      <div className={css.yearWrapper}>
        <Field
          className={css.inputField}
          id='Dealer Price Total'
          name='Dealer Price Total'
          placeholder='Dealer Price Total'
        />
      </div>
    </div>
  );
}
