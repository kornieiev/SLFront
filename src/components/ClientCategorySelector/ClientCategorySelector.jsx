import { useDispatch } from "react-redux";
import { Field, Formik, Form } from "formik";
import { chooseDealerCategory } from "../../redux/keys/slice";
import css from "./ClientCategorySelector.module.css";

export const ClientCategorySelector = () => {
  const dispatch = useDispatch();

  const handleCategoryChange = (value) => {
    dispatch(chooseDealerCategory(value));
  };

  return (
    <>
      <Formik initialValues={{ category: "" }} onSubmit={() => {}}>
        {({ handleChange }) => (
          <Form>
            <div>
              <Field
                className={css.selector}
                as='select'
                name='category'
                onChange={(e) => {
                  handleCategoryChange("");
                  const selectedValue = e.target.value;
                  if (selectedValue !== "") {
                    handleChange(e);
                    handleCategoryChange(selectedValue);
                  }
                }}
              >
                <option value='' label='Choose client category' />
                <option value='regular' label='Regular' />
                <option value='dealer' label='Dealer' />
                <option value='repossesion' label='Repossesion' />
                <option value='rental' label='Rental' />
              </Field>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
