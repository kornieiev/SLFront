import { useDispatch, useSelector } from "react-redux";
import { selectAllDealers } from "../../redux/dealers/selectors";
import { useEffect } from "react";
import { fetchDealers } from "../../redux/dealers/operations";
import AddNewDealerForm from "../../components/AddNewKey/AddNewDealerForm/AddNewDealerForm";

export default function AddNewDealer() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchDealers());
  // }, [dispatch]);

  const allDealers = useSelector(selectAllDealers);

  return (
    <div>
      <AddNewDealerForm />
      <div>
        <h3>Current Dealers List:</h3>
        <ul>
          {allDealers &&
            allDealers.map((item) => (
              <li key={item._id}>
                <p>{item.dealerName}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
