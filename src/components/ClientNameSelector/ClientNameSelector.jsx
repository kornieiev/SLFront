import { useDispatch, useSelector } from "react-redux";
import { Field, Formik, Form } from "formik";
import css from "./ClientNameSelector.module.css";
import { chooseDealerName } from "../../redux/keys/slice";
import { selectAllDealers } from "../../redux/dealers/selectors";

import { selectChoosedDealerCategory } from "../../redux/keys/selectors";

export const ClientNameSelector = () => {
  const dispatch = useDispatch();
  const allDealers = useSelector(selectAllDealers);
  const choosedDealerCategory = useSelector(selectChoosedDealerCategory);

  const filteredDealersByCategory = allDealers.filter(
    (d) => d.dealerCategory === choosedDealerCategory
  );

  const handleClientChange = (value) => {
    dispatch(chooseDealerName(value));
  };

  return (
    <>
      <Formik initialValues={{ clientType: "" }} onSubmit={() => {}}>
        {({ handleChange }) => (
          <Form>
            <div>
              <Field
                className={css.selector}
                as='select'
                name='clientType'
                onChange={(e) => {
                  handleClientChange("");
                  const selectedValue = e.target.value;

                  if (selectedValue !== "") {
                    handleChange(e);
                    handleClientChange(selectedValue);
                  }
                }}
              >
                <option value='' label='Choose client name' />

                {filteredDealersByCategory.map((d) => (
                  <option
                    key={d._id}
                    value={d.dealerName}
                    label={d.dealerName}
                  />
                ))}
              </Field>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
