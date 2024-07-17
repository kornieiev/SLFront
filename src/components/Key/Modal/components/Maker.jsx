import { ErrorMessage, Field } from "formik";
import css from "../ModalContent.module.css";
import { useSelector } from "react-redux";
import { selectMakersArr } from "../../../../redux/keys/selectors";
import { nanoid } from "nanoid";


export default function Maker({ item }) {
  const makersArr = useSelector(selectMakersArr);

  return (
    <div className={css.fieldWrapper}>
      <label className={css.inputLabel} htmlFor='Maker'>
        Make: {item && <span className={css.oldName}>{item.Maker}</span>}
      </label>
      <div className={css.yearWrapper}>
        <Field
          className={css.inputField}
          id='Maker'
          name='Maker'
          placeholder='Maker'
          component='select'
        >
          <option>- choose one -</option>
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
