import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDealers } from "../../redux/dealers/operations";
import AddNewDealerForm from "../../components/AddNewKey/AddNewDealerForm/AddNewDealerForm";
import { selectAllDealers } from "../../redux/dealers/selectors";

export default function AddNewDealer() {
  const dispatch = useDispatch();

  const allDealers = useSelector(selectAllDealers);

  useEffect(() => {
    dispatch(fetchDealers());
  }, [dispatch]);

  return (
    <div>
      <AddNewDealerForm />
      <div>
        {allDealers.length > 0 ? (
          <h3>Current Clients List:</h3>
        ) : (
          <h5>You do not have any clients yet. Please add one</h5>
        )}

        <ul>
          {allDealers &&
            allDealers.map((item) => (
              <li key={item._id}>
                <p>
                  {item.dealerName.toUpperCase()} ({item.dealerCategory})
                </p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
