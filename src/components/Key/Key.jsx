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
          <div className={css.itemPriceWrapper}>
            <div>
              <strong className={css.itemName}>Price All Keys Lost:</strong>
              <span className={css.itemData}>
                {item["Price All Keys Lost"]}
              </span>
            </div>
            <div className={css.dealerPriceWrapper}>
              <p className={css.dealerPrice}>
                {dealerName ? (
                  `${dealerPriceData["Price All Keys Lost"]}`
                ) : (
                  <span className={css.dealerPriceText}>choose dealer</span>
                )}
              </p>
              <div className={css.svgWrapper}>
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
          </div>
        </li>
        <li className={css.item}>
          <div className={css.itemPriceWrapper}>
            <div>
              <strong className={css.itemName}>Price Add a Key:</strong>
              <span className={css.itemData}>{item["Price Add a Key"]}</span>
            </div>
            <div className={css.dealerPriceWrapper}>
              <p className={css.dealerPrice}>
                {dealerName ? (
                  `${dealerPriceData["Price Add a Key"]}`
                ) : (
                  <span className={css.dealerPriceText}>choose dealer</span>
                )}
              </p>
              <div className={css.svgWrapper}>
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
          </div>
        </li>
        <li className={css.item}>
          <div className={css.itemPriceWrapper}>
            <div>
              <strong className={css.itemName}>Price Program Only:</strong>
              <span className={css.itemData}>{item["Price Program Only"]}</span>
            </div>
            <div className={css.dealerPriceWrapper}>
              <p className={css.dealerPrice}>
                {dealerName ? (
                  `${dealerPriceData["Price Program Only"]}`
                ) : (
                  <span className={css.dealerPriceText}>choose dealer</span>
                )}
              </p>
              <div className={css.svgWrapper}>
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
          </div>
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
