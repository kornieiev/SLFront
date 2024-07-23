import { ErrorMessage, Field } from "formik";
import css from "../ModalContent.module.css";
import { useSelector } from "react-redux";
import { selectTypesOfIgnition } from "../../../../redux/keys/selectors";

export default function TypeOfIgnition({ item }) {
  const IgnitionTypes = useSelector(selectTypesOfIgnition);

  return (
    <div className={css.fieldWrapper}>
      <label className={css.inputLabel} htmlFor='Type of Ignition'>
        Type of Ignition:{" "}
        {item && (
          <span className={css.oldName}>{item["Type of Ignition"]}</span>
        )}
      </label>
      <div className={css.yearWrapper}>
        <Field
          className={css.inputField}
          id='Type of Ignition'
          name='Type of Ignition'
          placeholder='Type of Ignition'
          component='select'
        >
          <option defaultValue>- choose one -</option>
          {IgnitionTypes.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Field>
        <ErrorMessage name='Type of Ignition' component='div' />
      </div>
    </div>
  );
}
