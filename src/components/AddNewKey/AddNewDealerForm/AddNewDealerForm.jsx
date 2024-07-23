import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { createDealer } from "../../../redux/dealers/operations";

export default function AddNewDealerForm() {
  const dispatch = useDispatch();
  return (
    <div>
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
        <Form>
          <label htmlFor='dealerName'>Dealer Name:</label>
          <Field
            id='dealerName'
            name='dealerName'
            placeholder='Enter Dealer name'
          />

          <button type='submit'>Add new Dealer</button>
        </Form>
      </Formik>
    </div>
  );
}