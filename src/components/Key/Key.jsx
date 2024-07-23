import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import css from "./Key.module.css";
import ModalContent from "./Modal/ModalContent";
import { selectRole } from "../../redux/auth/selectors";
import SVG from "./SVG/SVG";
import ModalEditDealerPrice from "./ModalEditDealerPrice/ModalEditDealerPrice";
import { selectDealer } from "../../redux/keys/selectors";

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
  border: "2px solid #000",
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

  const [dealerModalOpen, setDealerModalOpen] = useState(false);
  const handleDealerModalOpen = () => setDealerModalOpen(true);
  const handleDealerModalClose = () => setDealerModalOpen(false);

  const role = useSelector(selectRole);
  const dealerName = useSelector(selectDealer);

  const [dealerPriceData, setDealersPriceData] = useState({});
  useEffect(() => {
    if (dealerName === "Choose Dealer") {
      setDealersPriceData({});
    }
    if (item?.DealersPrice?.[dealerName]) {
      setDealersPriceData(item?.DealersPrice?.[dealerName]);
    }
  }, [dealerName, item?.DealersPrice]);

  return (
    <div className={css.wrapper}>
      <ul className={css.itemsList}>
        <li className={css.item}>
          <strong className={css.itemName}>Make:</strong> {item.Maker}
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Model:</strong> {item.Model}
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Year:</strong> {item.Year}
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Type of Ignition:</strong>{" "}
          {item["Type of Ignition"]}
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Type of Key:</strong>{" "}
          {item["Type of Key"]}
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>No Buttons:</strong>{" "}
          {item["No Buttons"]}
        </li>
        <li className={css.item}>
          <div className={css.itemPriceWrapper}>
            <div>
              <strong className={css.itemName}>Price All Keys Lost:</strong>{" "}
              {item["Price All Keys Lost"]}
            </div>
            <div className={css.dealerPriceWrapper}>
              <p className={css.dealerPrice}>
                {dealerPriceData["Price All Keys Lost"]
                  ? `${dealerPriceData["Price All Keys Lost"]}`
                  : "not available"}
              </p>
              {dealerName && (
                <button
                  className={css.btnEditDealerPrice}
                  onClick={handleDealerModalOpen}
                >
                  <SVG />
                </button>
              )}
            </div>
          </div>
        </li>
        <li className={css.item}>
          <div className={css.itemPriceWrapper}>
            <div>
              <strong className={css.itemName}>Price Add a Key:</strong>{" "}
              {item["Price Add a Key"]}
            </div>
            <div className={css.dealerPriceWrapper}>
              <p className={css.dealerPrice}>
                {dealerPriceData["Price Add a Key"]
                  ? `${dealerPriceData["Price Add a Key"]}`
                  : "not available"}
              </p>
              {dealerName && (
                <button
                  className={css.btnEditDealerPrice}
                  onClick={handleDealerModalOpen}
                >
                  <SVG />
                </button>
              )}
            </div>
          </div>
        </li>
        <li className={css.item}>
          <div className={css.itemPriceWrapper}>
            <div>
              <strong className={css.itemName}>Price Program Only:</strong>{" "}
              {item["Price Program Only"]}
            </div>
            <div className={css.dealerPriceWrapper}>
              <p className={css.dealerPrice}>
                {dealerPriceData["Price Program Only"]
                  ? `${dealerPriceData["Price Program Only"]}`
                  : "not available"}
              </p>
              {dealerName && (
                <button
                  className={css.btnEditDealerPrice}
                  onClick={handleDealerModalOpen}
                >
                  <SVG />
                </button>
              )}
            </div>
          </div>
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Dealer Price:</strong>{" "}
          {item["Dealer Price"]}
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Dealer Program:</strong>{" "}
          {item["Dealer Program"]}
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Dealer Emergency Blade:</strong>{" "}
          {item["Dealer Emergency Blade"]}
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Dealer Price Total:</strong>{" "}
          {item["Dealer Price Total"]}
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Dealer Location:</strong>{" "}
          {item["Dealer Location"]}
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Secure Locks Parts:</strong>{" "}
          {item["Secure Locks Parts"]}
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Part #:</strong> {item["Part #"]}
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Link:</strong>{" "}
          <a href={item["Link"]}>link...</a>
        </li>
        <li className={css.item}>
          <strong className={css.itemName}>Comments:</strong> {item.Comments}
        </li>

        {role === "admin" && (
          <li className={css.editBtn}>
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
          </li>
        )}

        <Modal
          open={dealerModalOpen}
          onClose={handleDealerModalClose}
          aria-labelledby='modal-dealer-title'
          aria-describedby='modal-dealer-price-change'
        >
          <Box sx={style}>
            <ModalEditDealerPrice
              item={item}
              dealerPriceData={dealerPriceData}
              onClose={handleDealerModalClose}
            />
          </Box>
        </Modal>
      </ul>
    </div>
  );
};
