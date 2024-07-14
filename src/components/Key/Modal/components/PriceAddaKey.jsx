import { Field } from "formik";
import css from "../ModalContent.module.css";

export default function PriceAddaKey({ item }) {
  return (
    <div className={css.fieldWrapper}>
      <label className={css.inputLabel} htmlFor='Price Add a Key'>
        Price Add a Key:{" "}
        {item && <span className={css.oldName}>{item["Price Add a Key"]}</span>}
      </label>
      <div className={css.yearWrapper}>
        <Field
          className={css.inputField}
          id='Price Add a Key'
          name='Price Add a Key'
          placeholder='Price Add a Key'
        />
      </div>
    </div>
  );
}
