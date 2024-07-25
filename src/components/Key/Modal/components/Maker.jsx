import { ErrorMessage, Field, useField } from "formik";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import css from "../ModalContent.module.css";
import { selectMakersArr } from "../../../../redux/keys/selectors";

export default function Maker({ item }) {
  const makersArr = useSelector(selectMakersArr);
  const [field, meta] = useField("Maker"); // Получение метаданных поля

  return (
    <div className={css.fieldWrapper}>
      <label className={css.inputLabel} htmlFor='Maker'>
        Make: {item && <span className={css.oldName}>{item.Maker}</span>}
      </label>
      <div className={css.yearWrapper}>
        <Field
          className={`${css.inputField} ${
            meta.touched && meta.error ? css.errorField : ""
          }`}
          id='Maker'
          name='Maker'
          placeholder='Maker'
          component='select'
        >
          <option value=''>- choose one -</option>
          {makersArr.map((item) => (
            <option key={`${item}-${nanoid()}`} value={item}>
              {item}
            </option>
          ))}
        </Field>
        <ErrorMessage name='Maker' component='div' />
      </div>
    </div>
  );
}
