import { Formik, Field, Form } from "formik";

import css from "./ModalContent.module.css";
import { useDispatch } from "react-redux";
import { editKeyById, fetchKeys } from "../../../redux/keys/operations";
import { useEffect } from "react";
import TypeOfIgnition from "./components/TypeOfIgnition";
import Maker from "./components/Maker";
import Model from "./components/Model";
import Year from "./components/Year";
import TypeOfKey from "./components/TypeOfKey";
import NoButtons from "./components/NoButtons";
import PriceAllKeysLost from "./components/PriceAllKeysLost";
import PriceAddaKey from "./components/PriceAddaKey";
import PriceProgramOnly from "./components/PriceProgramOnly";
import DealerPrice from "./components/DealerPrice";
import DealerPriceTotal from "./components/DealerPriceTotal";
import DealerLocation from "./components/DealerLocation";
import DealerProgram from "./components/DealerProgram";
import DealerEmergencyBlade from "./components/DealerEmergencyBlade";
import SecureLocksParts from "./components/SecureLocksParts";
import PartNumber from "./components/PartNumber";
import Link from "./components/Link";
import Comments from "./components/Comments";

export default function ModalContent({ item, handleClose }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchKeys());
  }, [dispatch]);

  function checkKeyData(keyData) {
    const updatedValues = { ...item };

    Object.keys(keyData).forEach((key) => {
      if (!updatedValues[key]) {
        updatedValues[key] = "no data";
      }
      updatedValues[key] = keyData[key] || updatedValues[key];
    });

    let date = `${keyData.YearStart}-${keyData.YearEnd}`;

    updatedValues.Year = date;

    dispatch(editKeyById(updatedValues));
    dispatch(fetchKeys());

    handleClose(true);
  }

  return (
    <div>
      <Formik
        className={css.formWrap}
        initialValues={{
          Maker: "",
          Model: "",
          YearStart: "",
          YearEnd: "",
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
        onSubmit={async (keyData, { resetForm }) => {
          checkKeyData(keyData);
          resetForm();
        }}
      >
        <Form className={css.formWrap}>
          <Maker item={item} />
          <Model item={item} />
          <Year item={item} />
          <TypeOfIgnition item={item} />
          <TypeOfKey item={item} />
          <NoButtons item={item} />
          <PriceAllKeysLost item={item} />
          <PriceAddaKey item={item} />
          <PriceProgramOnly item={item} />
          <DealerPrice item={item} />
          <DealerPriceTotal item={item} />
          <DealerLocation item={item} />
          <DealerProgram item={item} />
          <DealerEmergencyBlade item={item} />
          <SecureLocksParts item={item} />
          <PartNumber item={item} />
          <Link item={item} />
          <Comments item={item} />

          <button className={css.btn} type='submit'>
            CHANGE DATA
          </button>
        </Form>
      </Formik>
    </div>
  );
}
