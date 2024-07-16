import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useSelector } from "react-redux";
import css from "./Key.module.css";
import ModalContent from "./Modal/ModalContent";
import { selectRole } from "../../redux/auth/selectors";

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

  const role = useSelector(selectRole);
  console.log("🚀 ~ Key ~ role:", role);

  // const dispatch = useDispatch();
  // const handleDelete = () => dispatch(deleteKey(item._id));

  //

  return (
    <div className={css.wrapper}>
      <ul>
        <li>
          <strong>Year:</strong> {item.Year}
        </li>
        <li>
          <strong>Make:</strong> {item.Maker}
        </li>
        <li>
          <strong>Model:</strong> {item.Model}
        </li>
        <li>
          <strong>Type of Ignition:</strong> {item["Type of Ignition"]}
        </li>
        <li>
          <strong>Type of Key:</strong> {item["Type of Key"]}
        </li>
        <li>
          <strong>No Buttons:</strong> {item["No Buttons"]}
        </li>
        <li>
          <strong>Price All Keys Lost:</strong> {item["Price All Keys Lost"]}
        </li>
        <li>
          <strong>Price Add a Key:</strong> {item["Price Add a Key"]}
        </li>
        <li>
          <strong>Price Program Only:</strong> {item["Price Program Only"]}
        </li>
        <li>
          <strong>Dealer Price:</strong> {item["Dealer Price"]}
        </li>
        <li>
          <strong>Dealer Program:</strong> {item["Dealer Program"]}
        </li>
        <li>
          <strong>Dealer Emergency Blade:</strong>{" "}
          {item["Dealer Emergency Blade"]}
        </li>
        <li>
          <strong>Dealer Price Total:</strong> {item["Dealer Price Total"]}
        </li>
        <li>
          <strong>Dealer Location:</strong> {item["Dealer Location"]}
        </li>
        <li>
          <strong>Secure Locks Parts:</strong> {item["Secure Locks Parts"]}
        </li>
        <li>
          <strong>Part #:</strong> {item["Part #"]}
        </li>
        <li>
          <strong>Link:</strong> <a href={item["Link"]}>link...</a>
        </li>
        <li>
          <strong>Comments:</strong> {item.Comments}
        </li>
        <li>
          <strong>isActive:</strong> {item.isActive}
        </li>
      </ul>

      {role === "admin" && (
        <div>
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
    </div>
  );
};
