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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxHeight: "90vh", // Ограничиваем высоту модального окна 90% высоты экрана
  overflowY: "auto", // Разрешаем вертикальную прокрутку
  // bgcolor: "background.paper",
  bgcolor: "lightgray",
  border: "1px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 1,
  pt: 2,
  pb: 3,
  m: 0,
};

export const Key = ({ item }) => {
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
      <ul className={css.itemsList}>
        <li className={css.item}>
          <strong className={css.itemName}>Make:</strong>
          <span className={css.itemData}>{item.Maker}</span>
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Model:</strong>
          <span className={css.itemData}>{item.Model}</span>
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Year:</strong>
          <span className={css.itemData}>{item.Year}</span>
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Type of Ignition:</strong>
          <span className={css.itemData}>{item["Type of Ignition"]}</span>
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Type of Key:</strong>
          <span className={css.itemData}>{item["Type of Key"]}</span>
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>No Buttons:</strong>
          <span className={css.itemData}>{item["No Buttons"]}</span>
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Price All Keys Lost:</strong>
          <span className={css.itemData}>
            {dealerPriceData["Price All Keys Lost"]}
            {choosedDealer &&
              dealerPriceData["Price All Keys Lost"] !== "no data yet" &&
              ` - price for ${choosedDealer}`}
            {choosedDealerCategory === "regular" && ` - regular price`}
          </span>
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Price Add a Key:</strong>
          <span className={css.itemData}>
            {dealerPriceData["Price Add a Key"]}
            {choosedDealer &&
              dealerPriceData["Price All Keys Lost"] !== "no data yet" &&
              ` - price for ${choosedDealer}`}
            {choosedDealerCategory === "regular" && ` - regular price`}
          </span>
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Price Program Only:</strong>
          <span className={css.itemData}>
            {dealerPriceData["Price Program Only"]}
            {choosedDealer &&
              dealerPriceData["Price All Keys Lost"] !== "no data yet" &&
              ` - price for ${choosedDealer}`}
            {choosedDealerCategory === "regular" && ` - regular price`}
          </span>
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Dealer Price:</strong>
          <span className={css.itemData}>{item["Dealer Price"]}</span>
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Dealer Program:</strong>
          <span className={css.itemData}>{item["Dealer Program"]}</span>
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Dealer Emergency Blade:</strong>
          <span className={css.itemData}>{item["Dealer Emergency Blade"]}</span>
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Dealer Price Total:</strong>
          <span className={css.itemData}>{item["Dealer Price Total"]}</span>
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Dealer Location:</strong>
          <span className={css.itemData}>{item["Dealer Location"]}</span>
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Secure Locks Parts:</strong>
          <span className={css.itemData}>{item["Secure Locks Parts"]}</span>
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Part #:</strong>
          <span className={css.itemData}>{item["Part #"]}</span>
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Link:</strong>
          <span className={css.itemData}>
            <a href={item["Link"]}>visit link...</a>
          </span>
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Comments:</strong>
          <span className={css.itemData}>{item.Comments}</span>
        </li>
      </ul>
      {role === "admin" && choosedDealerCategory === "regular" && (
        <div className={css.editBtn}>
          <Button onClick={handleOpen}>Edit information</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box sx={style}>
              <ModalContent item={item} onClose={handleClose} />
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
            <Box sx={style}>
              <ModalEditDealerPrice
                item={item}
                onClose={handleClose}
                dealerPriceData={dealerPriceData}
              />
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
};
