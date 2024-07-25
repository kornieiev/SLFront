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
        }}
        onSubmit={async (values, { resetForm }) => {
          if (!values.dealerName.trim()) {
            return;
          }
          dispatch(createDealer(values.dealerName.trim().toLocaleLowerCase()));
          resetForm();
        }}
      >
        <Form className={css.formWrapper}>
          <label htmlFor='dealerName'>Dealer Name:</label>
          <Field
            className={css.nameField}
            id='dealerName'
            name='dealerName'
            placeholder='Enter Dealer name'
          />

          <button className={css.btn} type='submit'>
            Add new Dealer
          </button>
        </Form>
      </Formik>
    </div>
  );
}
