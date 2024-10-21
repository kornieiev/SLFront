import { Toaster, toast } from "react-hot-toast";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import css from "./Key.module.css";
import ModalContent from "./Modal/ModalContent";
import { selectRole } from "../../redux/auth/selectors";
import ModalEditDealerPrice from "./ModalEditDealerPrice/ModalEditDealerPrice";
import {
  selectChoosedDealerCategory,
  selectChoosedDealer,
} from "../../redux/keys/selectors";

export const Key = ({ item }) => {
  const notify = (message) => {
    toast.success(message);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const role = useSelector(selectRole);
  const choosedDealerCategory = useSelector(selectChoosedDealerCategory);
  const choosedDealer = useSelector(selectChoosedDealer);

  const [dealerPriceData, setDealersPriceData] = useState({
    "Price All Keys Lost": "no data yet",
    "Price Add a Key": "no data yet",
    "Price Program Only": "no data yet",
  });

  useEffect(() => {
    if (choosedDealerCategory === "regular") {
      setDealersPriceData({
        "Price All Keys Lost": item["Price All Keys Lost"],
        "Price Add a Key": item["Price Add a Key"],
        "Price Program Only": item["Price Program Only"],
      });
      return;
    }
    if (!item?.DealersPrice?.[choosedDealer]) {
      setDealersPriceData({
        "Price All Keys Lost": "no data yet",
        "Price Add a Key": "no data yet",
        "Price Program Only": "no data yet",
      });
      return;
    }
    if (choosedDealer && item?.DealersPrice?.[choosedDealer]) {
      setDealersPriceData(item?.DealersPrice?.[choosedDealer]);
      return;
    }
  }, [choosedDealer, choosedDealerCategory, item, item?.DealersPrice]);

  return (
    <div className={css.wrapper}>
      <table className={css.table}>
        <tbody>
          <tr>
            <td className={css.itemName}>
              <strong>Make:</strong>
            </td>
            <td className={css.itemData}>{item.Maker}</td>
          </tr>
          <tr>
            <td className={css.itemName}>
              <strong>Model:</strong>
            </td>
            <td className={css.itemData}>{item.Model}</td>
          </tr>
          <tr>
            <td className={css.itemName}>
              <strong>Year:</strong>
            </td>
            <td className={css.itemData}>{item.Year}</td>
          </tr>
          <tr>
            <td className={css.itemName}>
              <strong>Type of Ignition:</strong>
            </td>
            <td className={css.itemData}>{item["Type of Ignition"]}</td>
          </tr>
          <tr>
            <td className={css.itemName}>
              <strong>Type of Key:</strong>
            </td>
            <td className={css.itemData}>{item["Type of Key"]}</td>
          </tr>
          <tr>
            <td className={css.itemName}>
              <strong>No Buttons:</strong>
            </td>
            <td className={css.itemData}>{item["No Buttons"]}</td>
          </tr>
          <tr>
            <td className={css.itemName}>
              <strong>Price All Keys Lost:</strong>
            </td>
            <td className={css.itemData}>
              {dealerPriceData["Price All Keys Lost"]}
              {choosedDealer &&
                dealerPriceData["Price All Keys Lost"] !== "no data yet" && (
                  <span className={css.dealerSpecifying}>
                    {`(for ${choosedDealer})`}
                  </span>
                )}
              {choosedDealerCategory === "regular" && (
                <span
                  className={css.dealerSpecifying}
                >{`(regular price)`}</span>
              )}
            </td>
          </tr>
          <tr>
            <td className={css.itemName}>
              <strong>Price Add a Key:</strong>
            </td>
            <td className={css.itemData}>
              {dealerPriceData["Price Add a Key"]}
              {choosedDealer &&
                dealerPriceData["Price All Keys Lost"] !== "no data yet" && (
                  <span className={css.dealerSpecifying}>
                    {`(for ${choosedDealer})`}
                  </span>
                )}
              {choosedDealerCategory === "regular" && (
                <span
                  className={css.dealerSpecifying}
                >{`(regular price)`}</span>
              )}
            </td>
          </tr>
          <tr>
            <td className={css.itemName}>
              <strong>Price Program Only:</strong>
            </td>
            <td className={css.itemData}>
              {dealerPriceData["Price Program Only"]}
              {choosedDealer &&
                dealerPriceData["Price All Keys Lost"] !== "no data yet" && (
                  <span className={css.dealerSpecifying}>
                    {`(for ${choosedDealer})`}
                  </span>
                )}
              {choosedDealerCategory === "regular" && (
                <span
                  className={css.dealerSpecifying}
                >{`(regular price)`}</span>
              )}
            </td>
          </tr>
          <tr>
            <td className={css.itemName}>
              <strong>Dealer Price:</strong>
            </td>
            <td className={css.itemData}>{item["Dealer Price"]}</td>
          </tr>
          <tr>
            <td className={css.itemName}>
              <strong>Dealer Program:</strong>
            </td>
            <td className={css.itemData}>{item["Dealer Program"]}</td>
          </tr>
          <tr>
            <td className={css.itemName}>
              <strong>Dealer Emergency Blade:</strong>
            </td>
            <td className={css.itemData}>{item["Dealer Emergency Blade"]}</td>
          </tr>
          <tr>
            <td className={css.itemName}>
              <strong>Dealer Price Total:</strong>
            </td>
            <td className={css.itemData}>{item["Dealer Price Total"]}</td>
          </tr>
          <tr>
            <td className={css.itemName}>
              <strong>Dealer Location:</strong>
            </td>
            <td className={css.itemData}>{item["Dealer Location"]}</td>
          </tr>
          <tr>
            <td className={css.itemName}>
              <strong>Secure Locks Parts:</strong>
            </td>
            <td className={css.itemData}>{item["Secure Locks Parts"]}</td>
          </tr>
          <tr>
            <td className={css.itemName}>
              <strong>Part #:</strong>
            </td>
            <td className={css.itemData}>{item["Part #"]}</td>
          </tr>
          <tr>
            <td className={css.itemName}>
              <strong>Link:</strong>
            </td>
            <td className={css.itemData}>
              <a href={item["Link"]}>visit link...</a>
            </td>
          </tr>
          <tr>
            <td className={css.itemName}>
              <strong>Comments:</strong>
            </td>
            <td className={css.itemData}>{item.Comments}</td>
          </tr>
        </tbody>
      </table>
      {role === "admin" && choosedDealerCategory === "regular" && (
        <div className={css.editBtn}>
          <Button onClick={handleOpen}>Edit information</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box className={css.modalBoxStyles}>
              <ModalContent item={item} onClose={handleClose} notify={notify} />
            </Box>
          </Modal>
        </div>
      )}

      {role === "admin" && choosedDealer && (
        <div className={css.editBtn}>
          <Button onClick={handleOpen}>Edit information</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box className={css.modalBoxStyles}>
              <ModalEditDealerPrice
                item={item}
                onClose={handleClose}
                dealerPriceData={dealerPriceData}
              />
            </Box>
          </Modal>
        </div>
      )}

      <Toaster position='top-right' reverseOrder={false} />
    </div>
  );
};
