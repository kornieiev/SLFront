import { Formik, Form } from "formik";
import css from "../Key/Modal/ModalContent.module.css";

import TypeOfIgnition from "../Key/Modal/components/TypeOfIgnition";
import Maker from "../Key/Modal/components/Maker";
import Model from "../Key/Modal/components/Model";
import Year from "../Key/Modal/components/Year";
import TypeOfKey from "../Key/Modal/components/TypeOfKey";
import NoButtons from "../Key/Modal/components/NoButtons";
import PriceAllKeysLost from "../Key/Modal/components/PriceAllKeysLost";
import PriceAddaKey from "../Key/Modal/components/PriceAddaKey";
import PriceProgramOnly from "../Key/Modal/components/PriceProgramOnly";
import DealerPrice from "../Key/Modal/components/DealerPrice";
import DealerPriceTotal from "../Key/Modal/components/DealerPriceTotal";
import DealerLocation from "../Key/Modal/components/DealerLocation";
import DealerProgram from "../Key/Modal/components/DealerProgram";
import DealerEmergencyBlade from "../Key/Modal/components/DealerEmergencyBlade";
import SecureLocksParts from "../Key/Modal/components/SecureLocksParts";
import Link from "../Key/Modal/components/Link";
import Comments from "../Key/Modal/components/Comments";
import PartNumber from "../Key/Modal/components/PartNumber";
import { addKeyValidationSchema } from "../helpers/validationData";
import { useDispatch } from "react-redux";
import { createKey } from "../../redux/keys/operations";

export default function AddNewKey() {
  const dispatch = useDispatch();

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
        validationSchema={addKeyValidationSchema}
        onSubmit={async (values, { resetForm }) => {
          const credentials = {
            Maker: values.Maker,
            Model: values.Model,
            Year: `${values.YearStart}-${values.YearEnd}`,
            "Type of Ignition": values["Type of Ignition"],
            "Type of Key": values["Type of Key"],
            "No Buttons": values["No Buttons"],
            "Price All Keys Lost": values["Price All Keys Lost"],
            "Price Add a Key": values["Price Add a Key"],
            "Price Program Only": values["Price Program Only"],
            "Dealer Price": values["Dealer Price"],
            "Dealer Program": values["Dealer Program"],
            "Dealer Emergency Blade": values["Dealer Emergency Blade"],
            "Dealer Price Total": values["Dealer Price Total"],
            "Dealer Location": values["Dealer Location"],
            "Secure Locks Parts": values["Secure Locks Parts"],
            "Part #": values["Part #"],
            Link: values.Link,
            Comments: values.Comments,
            isActive: values.isActive,
            // _id: values.[_id],
          };
          console.log("🚀 ~ onSubmit={ ~ credentials:", credentials);
          dispatch(createKey(credentials));

          resetForm();
        }}
      >
        <Form className={css.formWrap}>
          <Maker />
          <Model />
          <Year />
          <TypeOfIgnition />
          <TypeOfKey />
          <NoButtons />
          <PriceAllKeysLost />
          <PriceAddaKey />
          <PriceProgramOnly />
          <DealerPrice />
          <DealerPriceTotal />
          <DealerLocation />
          <DealerProgram />
          <DealerEmergencyBlade />
          <SecureLocksParts />
          <PartNumber />
          <Link />
          <Comments />

          <button className={css.btn} type='submit'>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
