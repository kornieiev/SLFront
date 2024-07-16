import { useSelector } from "react-redux";
import { selectLoading } from "../redux/keys/selectors";
import { HelmetProvider, Helmet } from "react-helmet-async";
import AddNewKey from "../components/AddKey/AddNewKey";
import css from "./pages.module.css";

import { DNA } from "react-loader-spinner";

export default function AddKey() {
  const isLoading = useSelector(selectLoading);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Add new key</title>
        </Helmet>
      </HelmetProvider>

      <h3>Here you can add new key</h3>
      <AddNewKey />

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
