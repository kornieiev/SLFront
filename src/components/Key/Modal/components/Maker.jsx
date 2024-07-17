import { ErrorMessage, Field } from "formik";
import css from "../ModalContent.module.css";
import { useSelector } from "react-redux";
import { selectMakersArr } from "../../../../redux/keys/selectors";
import { nanoid } from "nanoid";
import { Toaster, toast } from "react-hot-toast";

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
        <ErrorMessage name='Maker' component='div'>
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
