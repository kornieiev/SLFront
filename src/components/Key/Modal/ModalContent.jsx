import { Formik, Field, Form } from "formik";

import { useState } from "react";

import ALLKEYS from "../../../constants/AllKeysJSON.json";

import css from "./ModalContent.module.css";

export default function ModalContent({ item }) {
  const [values, setValues] = useState({
    Maker: [...new Set(ALLKEYS.map((item) => item.Maker))],
    Model: [...new Set(ALLKEYS.map((item) => item.Model))],
    "Type of Ignition": [
      ...new Set(ALLKEYS.map((item) => item["Type of Ignition"])),
    ],
    "Type of Key": [...new Set(ALLKEYS.map((item) => item["Type of Key"]))],
    "No Buttons": "",
    "Price All Keys Lost": "",
    "Price Add a Key": "",
    "Price Program Only": "",
    "Dealer Price": "",
    "Dealer Program": "",
    "Dealer Emergency Blade": "",
    "Dealer Price Total": "",
    "Dealer Location": "",
    "Secure Locks Parts": "",
    "Part #": "",
    Link: "",
    Comments: "",
  });
  // console.log("🚀🚀🚀🚀🚀🚀 ~ values:", values);

  const [initialValues, setInitialValues] = useState(item);
  console.log("🚀 🚀🚀🚀🚀🚀🚀 ~ initialValues:", initialValues);

  function checkKeyData(keyData) {
    console.log("checkKeyData", keyData);

    // Object.keys(keyData).forEach((key) => {
    //   if (!item[key]) {
    //     item[key] = "no data";
    //   }
    //   setInitialValues({
    //     ...initialValues,
    //     key: keyData[key] ? keyData[key] : item[key],
    //   });
    //   console.log(`${key}: ${keyData[key]} ==== ${item[key]}`);
    // });
  }

  return (
    <div>
      <Formik
        className={css.formWrap}
        initialValues={{
          YearStart: "",
          YearEnd: "",
          Maker: "",
          Model: "",
          "Type of Ignition": "",
          "Type of Key": "",
          "No Buttons": "",
          "Price All Keys Lost": "",
          "Price Add a Key": "",
          "Price Program Only": "",
          "Dealer Price": "",
          "Dealer Program": "",
          "Dealer Emergency Blade": "",
          "Dealer Price Total": "",
          "Dealer Location": "",
          "Secure Locks Parts": "",
          "Part #": "",
          Link: "",
          Comments: "",
        }}
        onSubmit={async (keyData) => {
          checkKeyData(keyData);

          // await new Promise((r) => setTimeout(r, 500));
          // alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className={css.formWrap}>
          <div className={css.fieldWrapper}>
            <label className={css.inputLabel} htmlFor='Maker'>
              Maker: <span className={css.oldName}>{item.Maker}</span>
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
                {values.Maker.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Field>
            </div>
          </div>

          <div className={css.fieldWrapper}>
            <label className={css.inputLabel} htmlFor='Year'>
              Year: <span className={css.oldName}>{item.Year}</span>
            </label>
            <div className={css.yearWrapper}>
              <Field
                className={css.inputField}
                id='YearStart'
                name='YearStart'
                placeholder='YearStart'
                type='number'
                pattern='^(19[0-9]{2}|20[0-9]{2}|2100)$'
              />
              <Field
                className={css.inputField}
                id='YearEnd'
                name='YearEnd'
                placeholder='YearEnd'
                type='number'
                pattern='^(19[0-9]{2}|20[0-9]{2}|2100)$'
              />
            </div>
          </div>

          <div className={css.fieldWrapper}>
            <label className={css.inputLabel} htmlFor='Model'>
              Model: <span className={css.oldName}>{item.Model}</span>
            </label>
            <div className={css.yearWrapper}>
              <Field
                className={css.inputField}
                id='Model'
                name='Model'
                placeholder='Model'
              />
            </div>
          </div>

          <div className={css.fieldWrapper}>
            <label className={css.inputLabel} htmlFor='Type of Ignition'>
              Type of Ignition:{" "}
              <span className={css.oldName}>{item["Type of Ignition"]}</span>
            </label>
            <div className={css.yearWrapper}>
              <Field
                className={css.inputField}
                id='Type of Ignition'
                name='Type of Ignition'
                placeholder='Type of Ignition'
                component='select'
              >
                <option>- choose one -</option>
                {values["Type of Ignition"].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Field>
            </div>
          </div>

          <div className={css.fieldWrapper}>
            <label className={css.inputLabel} htmlFor='Type of Key'>
              Type of Key:{" "}
              <span className={css.oldName}>{item["Type of Key"]}</span>
            </label>
            <div className={css.yearWrapper}>
              <Field
                className={css.inputField}
                id='Type of Key'
                name='Type of Key'
                placeholder='Type of Key'
                component='select'
              >
                <option>- choose one -</option>
                {values["Type of Key"].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Field>
            </div>
          </div>

          <div className={css.fieldWrapper}>
            <label className={css.inputLabel} htmlFor='No Buttons'>
              No Buttons:{" "}
              <span className={css.oldName}>{item["No Buttons"]}</span>
            </label>
            <div className={css.yearWrapper}>
              <Field
                className={css.inputField}
                id='No Buttons'
                name='No Buttons'
                placeholder='No Buttons'
                type='number'
              />
            </div>
          </div>

          <div className={css.fieldWrapper}>
            <label className={css.inputLabel} htmlFor='Price All Keys Lost'>
              Price All Keys Lost:{" "}
              <span className={css.oldName}>{item["Price All Keys Lost"]}</span>
            </label>
            <div className={css.yearWrapper}>
              <Field
                className={css.inputField}
                id='Price All Keys Lost'
                name='Price All Keys Lost'
                placeholder='Price All Keys Lost'
              />
            </div>
          </div>

          <div className={css.fieldWrapper}>
            <label className={css.inputLabel} htmlFor='Price Add a Key'>
              Price Add a Key:{" "}
              <span className={css.oldName}>{item["Price Add a Key"]}</span>
            </label>
            <div className={css.yearWrapper}>
              <Field
                className={css.inputField}
                id='Price Add a Key'
                name='Price Add a Key'
                placeholder='Price Add a Key'
              />
            </div>
          </div>

          <div className={css.fieldWrapper}>
            <label className={css.inputLabel} htmlFor='Price Program Only'>
              Price Program Only:{" "}
              <span className={css.oldName}>{item["Price Program Only"]}</span>
            </label>
            <div className={css.yearWrapper}>
              <Field
                className={css.inputField}
                id='Price Program Only'
                name='Price Program Only'
                placeholder='Price Program Only'
              />
            </div>
          </div>

          <div className={css.fieldWrapper}>
            <label className={css.inputLabel} htmlFor='Dealer Price'>
              Dealer Price:{" "}
              <span className={css.oldName}>{item["Dealer Price"]}</span>
            </label>
            <div className={css.yearWrapper}>
              <Field
                className={css.inputField}
                id='Dealer Price'
                name='Dealer Price'
                placeholder='Dealer Price'
              />
            </div>
          </div>

          <div className={css.fieldWrapper}>
            <label className={css.inputLabel} htmlFor='Dealer Program'>
              Dealer Program:{" "}
              <span className={css.oldName}>{item["Dealer Program"]}</span>
            </label>
            <div className={css.yearWrapper}>
              <Field
                className={css.inputField}
                id='Dealer Program'
                name='Dealer Program'
                placeholder='Dealer Program'
              />
            </div>
          </div>

          <div className={css.fieldWrapper}>
            <label className={css.inputLabel} htmlFor='Dealer Emergency Blade'>
              Dealer Emergency Blade:{" "}
              <span className={css.oldName}>
                {item["Dealer Emergency Blade"]}
              </span>
            </label>
            <div className={css.yearWrapper}>
              <Field
                className={css.inputField}
                id='Dealer Emergency Blade'
                name='Dealer Emergency Blade'
                placeholder='Dealer Emergency Blade'
              />
            </div>
          </div>

          <div className={css.fieldWrapper}>
            <label className={css.inputLabel} htmlFor='Secure Locks Parts'>
              Secure Locks Parts:{" "}
              <span className={css.oldName}>{item["Secure Locks Parts"]}</span>
            </label>
            <div className={css.yearWrapper}>
              <Field
                className={css.inputField}
                id='Secure Locks Parts'
                name='Secure Locks Parts'
                placeholder='Secure Locks Parts'
              />
            </div>
          </div>

          <div className={css.fieldWrapper}>
            <label className={css.inputLabel} htmlFor='Link'>
              Link: <span className={css.oldName}>{item["Link"]}</span>
            </label>
            <div className={css.yearWrapper}>
              <Field
                className={css.inputField}
                id='Link'
                name='Link'
                placeholder='Link'
              />
            </div>
          </div>

          <div className={css.fieldWrapper}>
            <label className={css.inputLabel} htmlFor='Comments'>
              Comments: <span className={css.oldName}>{item["Comments"]}</span>
            </label>
            <div className={css.yearWrapper}>
              <Field
                className={css.inputField}
                id='Comments'
                name='Comments'
                placeholder='Comments'
              />
            </div>
          </div>

          <button className={css.btn} type='submit'>
            CHANGE DATA
          </button>
        </Form>
      </Formik>
    </div>
  );
}
