import { ErrorMessage, Field } from "formik";
import css from "../ModalContent.module.css";
import { Toaster, toast } from "react-hot-toast";

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
        <ErrorMessage name='Model' component='div'>
          {(msg) => {
            toast.error(msg);
            return null; // Не отображаем сообщение в div
          }}
        </ErrorMessage>
        <Toaster position='top-center' reverseOrder={false} />
      </div>
    </div>
  );
}
