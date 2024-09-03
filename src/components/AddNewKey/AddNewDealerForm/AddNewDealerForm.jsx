import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { createDealer } from "../../../redux/dealers/operations";
import css from "./AddNewDealerForm.module.css";

export default function AddNewDealerForm() {
  const dispatch = useDispatch();
  return (
    <div className={css.mainWrapper}>
      <Formik
        initialValues={{
          dealerName: "",
          dealerCategory: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          if (!values.dealerName.trim() || values.dealerCategory === "") {
            return;
          }
          console.log("values", values);

          // dispatch(createDealer(values.dealerName.trim().toLocaleLowerCase()));
          dispatch(createDealer(values));

          resetForm();
        }}
      >
        <Form className={css.formWrapper}>
          <label htmlFor='dealerName'>Client Name:</label>
          <Field
            className={css.nameField}
            id='dealerName'
            name='dealerName'
            placeholder='Enter Dealer name'
          />
          <label htmlFor='dealerCategory'>Client Category:</label>

          <Field
            className={css.nameField}
            as='select'
            id='dealerCategory'
            name='dealerCategory'
          >
            <option value=''>- choose one -</option>
            <option value='dealer'>Dealer</option>
            <option value='repossesion'>Repossesion</option>
            <option value='rental'>Rental</option>
          </Field>
          <button className={css.btn} type='submit'>
            Add new Client
          </button>
        </Form>
      </Formik>
    </div>
  );
}
