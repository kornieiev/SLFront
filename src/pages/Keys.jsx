import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchKeys } from "../redux/keys/operations";
import { selectLoading } from "../redux/keys/selectors";
import { HelmetProvider, Helmet } from "react-helmet-async";
import KeyFilter from "../components/KeyFilter/KeyFilter";

export default function Keys() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchKeys());
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

      <div>{isLoading && "Request in progress..."}</div>
    </>
  );
}
