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
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("New key added!");

export default function AddNewKey() {
  const dispatch = useDispatch();

  function capitalizeFirstLetter(str) {
    return str
      .toLowerCase() // Преобразуем всю строку в нижний регистр для консистентности
      .replace(/\b\w/g, (char) => char.toUpperCase()) // Используем регулярное выражение для нахождения первых букв слов
      .replace(/\B\w/g, (char) => char.toLowerCase()); // Преобразуем все остальные буквы в нижний регистр
  }

  return (
    <div>
      <Formik
        className={css.formWrap}
        initialValues={{
          Maker: "- choose one -",
          Model: "",
          YearStart: "",
          YearEnd: "",
          "Type of Ignition": "- choose one -",
          "Type of Key": "- choose one -",
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
            Model: capitalizeFirstLetter(values.Model),
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
          };
          dispatch(createKey(credentials));
          notify();

          resetForm();
        }}
      >
        <Form className={css.formWrap}>
          <div className={css.fieldsWrapper}>
            <div className={css.fieldsBlock}>
              <Maker />
              <Model />
              <Year />
              <TypeOfIgnition />
              <TypeOfKey />
              <NoButtons />
              <PriceAllKeysLost />
              <PriceAddaKey />
              <PriceProgramOnly />
            </div>
            <div className={css.fieldsBlock}>
              <DealerPrice />
              <DealerPriceTotal />
              <DealerLocation />
              <DealerProgram />
              <DealerEmergencyBlade />
              <SecureLocksParts />
              <PartNumber />
              <Link />
              <Comments />
            </div>
          </div>
          <div>
            <button className={css.btn} type='submit'>
              Submit
            </button>
          </div>
        </Form>
      </Formik>
      <Toaster position='top-right' reverseOrder={false} />
    </div>
  );
}
