import { ErrorMessage, Field, useField } from "formik";
import css from "../ModalContent.module.css";
import { useSelector } from "react-redux";
import { selectTypesOfKey } from "../../../../redux/keys/selectors";

export default function TypeOfKey({ item }) {
  const typesOfKey = useSelector(selectTypesOfKey);
  const [field, meta] = useField("Type of Key"); // Получение метаданных поля

  return (
    <div className={css.fieldWrapper}>
      <label className={css.inputLabel} htmlFor='Type of Key'>
        Type of Key:{" "}
        {item && <span className={css.oldName}>{item["Type of Key"]}</span>}
      </label>
      <div className={css.yearWrapper}>
        <Field
          className={`${css.inputField} ${
            meta.touched && meta.error ? css.errorField : ""
          }`}
          id='Type of Key'
          name='Type of Key'
          placeholder='Type of Key'
          component='select'
        >
          {/* <option defaultValue>- choose one -</option> */}
          <option value=''>- choose one -</option>

          {typesOfKey.map((item, index) => {
            if (typeof item === "undefined") {
              return;
            }
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </Field>
        <ErrorMessage name='Type of Key' component='div' />
      </div>
    </div>
  );
}
