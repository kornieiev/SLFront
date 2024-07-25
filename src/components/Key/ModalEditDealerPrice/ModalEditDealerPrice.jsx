import { Formik, Form } from "formik";
import css from "../../Key/Modal/ModalContent.module.css";
import { useDispatch, useSelector } from "react-redux";
import PriceAllKeysLost from "../../../components/Key/Modal/components/PriceAllKeysLost";
import PriceAddaKey from "../../../components/Key/Modal/components/PriceAddaKey";
import PriceProgramOnly from "../../../components/Key/Modal/components/PriceProgramOnly";
import { useState } from "react";
import { selectDealer } from "../../../redux/keys/selectors";
import { updateDealerPriceByKeyId } from "../../../redux/keys/operations";
import { updateDealerPrice } from "../../../redux/keys/slice";

export default function ModalEditDealerPrice({
  item,
  onClose,
  dealerPriceData,
}) {
  console.log("🚀 ~ dealerPriceData:", dealerPriceData);
  const dealerName = useSelector(selectDealer);

  const [newDealerPrice, setNewDealerPrice] = useState(dealerPriceData);
  const dispatch = useDispatch();

  function checkKeyData(price) {
    const newPrice = { ...newDealerPrice }; // price

    Object.keys(price).forEach((key) => {
      if (!newPrice[key]) {
        newPrice[key] = "no data";
      }
      newPrice[key] = price[key] || newPrice[key];
    });

    setNewDealerPrice(newPrice);

    const sendToDB = {
      DealersPrice: {
        [dealerName]: newPrice,
      },
      id: item._id,
    };

    dispatch(updateDealerPriceByKeyId(sendToDB));
    dispatch(updateDealerPrice(sendToDB));

    onClose(false);
  }

  return (
    <div>
      <Formik
        className={css.formWrap}
        initialValues={{
          "Price All Keys Lost": "",
          "Price Add a Key": "",
          "Price Program Only": "",
        }}
        // validationSchema={editKeyValidationSchema}
        onSubmit={async (price, { resetForm }) => {
          checkKeyData(price);
          resetForm();
        }}
      >
        <Form className={css.formWrap}>
          <PriceAllKeysLost item={dealerPriceData} />
          <PriceAddaKey item={dealerPriceData} />
          <PriceProgramOnly item={dealerPriceData} />

          <button className={css.btn} type='submit'>
            CHANGE DEALER PRICE
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
    </div>
  );
}
