import { useSelector } from "react-redux";
import { selectLoading } from "../redux/keys/selectors";
import { HelmetProvider, Helmet } from "react-helmet-async";
import css from "./pages.module.css";

import { DNA } from "react-loader-spinner";
import AddNewDealer from "../components/AddNewDealer/AddNewDealer";

export default function AddDealer() {
  const isLoading = useSelector(selectLoading);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Add new key</title>
        </Helmet>
      </HelmetProvider>

      <h3 className={css.title}>Here you can add new Dealer</h3>
      <AddNewDealer />

      {isLoading && (
        <div className={css.loader}>
          <DNA
            visible={true}
            height='80'
            width='80'
            ariaLabel='dna-loading'
            wrapperStyle={{}}
            wrapperClass='dna-wrapper'
          />
        </div>
      )}
    </>
  );
}
