import { ErrorMessage, Field, useField } from "formik";
import css from "../ModalContent.module.css";
import { useSelector } from "react-redux";
import { selectTypesOfIgnition } from "../../../../redux/keys/selectors";

export default function TypeOfIgnition({ item }) {
  const IgnitionTypes = useSelector(selectTypesOfIgnition);
  const [field, meta] = useField("Type of Ignition");

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
          className={`${css.inputField} ${
            meta.touched && meta.error ? css.errorField : ""
          }`}
          id='Type of Ignition'
          name='Type of Ignition'
          placeholder='Type of Ignition'
          component='select'
        >
          <option defaultValue>- choose one -</option>
          {IgnitionTypes.map((item, index) => {
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
        <ErrorMessage name='Type of Ignition' component='div' />
      </div>
    </div>
  );
}
