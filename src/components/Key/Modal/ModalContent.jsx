import { Formik, Form } from "formik";
import css from "./ModalContent.module.css";
import { useDispatch } from "react-redux";
import { editKeyById, fetchKeys } from "../../../redux/keys/operations";
import { useEffect } from "react";
import Maker from "./components/Maker";
import Model from "./components/Model";
import Year from "./components/Year";
import TypeOfIgnition from "./components/TypeOfIgnition";
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
import { editKeyValidationSchema } from "../../helpers/validationData";

export default function ModalContent({ item, onClose, notify }) {
  const [yearStart, yearEnd] = item.Year.split("-");
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

    if (!keyData.YearStart && updatedValues.YearStart === "no data") {
      updatedValues.YearStart = yearStart;
    }
    if (!keyData.YearEnd && updatedValues.YearEnd === "no data") {
      updatedValues.YearEnd = yearEnd;
    }

    let date = `${updatedValues.YearStart}-${updatedValues.YearEnd}`;
    updatedValues.Year = date;

    notify("Key data is changed successfully");

    dispatch(editKeyById(updatedValues));
    dispatch(fetchKeys());

    onClose(false);
  }

  return (
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
      validationSchema={editKeyValidationSchema}
      onSubmit={async (keyData, { resetForm }) => {
        console.log("keyData.NoButtons", keyData["No Buttons"]);
        if (
          keyData["No Buttons"] === null ||
          keyData["No Buttons"] === "" ||
          keyData["No Buttons"] === undefined
        ) {
          notify(`"["No Buttons"]" data is lost`, "error");
          return;
        }
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

        <button
          className={css.btnCancel}
          onClick={() => {
            onClose(false);
          }}
        >
          Close without changes
        </button>
      </Form>
    </Formik>
  );
}
