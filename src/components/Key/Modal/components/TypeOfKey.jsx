import { ErrorMessage, Field } from "formik";
import css from "../ModalContent.module.css";
import { useSelector } from "react-redux";
import { selectTypesOfKey } from "../../../../redux/keys/selectors";

export default function TypeOfKey({ item }) {
  const typesOfKey = useSelector(selectTypesOfKey);

  return (
    <div className={css.fieldWrapper}>
      <label className={css.inputLabel} htmlFor='Type of Key'>
        Type of Key:{" "}
        {item && <span className={css.oldName}>{item["Type of Key"]}</span>}
      </label>
      <div className={css.yearWrapper}>
        <Field
          className={css.inputField}
          id='Type of Key'
          name='Type of Key'
          placeholder='Type of Key'
          component='select'
        >
          <option defaultValue>- choose one -</option>
          {typesOfKey.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Field>
        <ErrorMessage name='Type of Key' component='div' />
      </div>
    </div>
  );
}
