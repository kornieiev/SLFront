import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchKeys } from "../redux/keys/operations";
import { selectLoading } from "../redux/keys/selectors";
import { HelmetProvider, Helmet } from "react-helmet-async";
import KeyFilter from "../components/KeyFilter/KeyFilter";
import { DNA } from "react-loader-spinner";
import css from "./pages.module.css";
import { fetchDealers } from "../redux/dealers/operations";

export default function Keys() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchKeys());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchDealers());
  }, [dispatch]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Find your keys</title>
        </Helmet>
      </HelmetProvider>

      <h3>Choose needed key below:</h3>
      <KeyFilter />

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
