import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchKeys } from "../redux/keys/operations";
import { selectLoading } from "../redux/keys/selectors";
import { HelmetProvider, Helmet } from "react-helmet-async";
import KeyFilter from "../components/KeyFilter/KeyFilter";
import { DNA } from "react-loader-spinner";
import css from "./pages.module.css";
import { fetchDealers } from "../redux/dealers/operations";
import { useAuth } from "../hooks";
import { ClientCategorySelector } from "components/ClientCategorySelector/ClientCategorySelector";
import { ClientNameSelector } from "components/ClientNameSelector/ClientNameSelector";
import {
  selectChoosedDealer,
  selectChoosedDealerCategory,
} from "../redux/keys/selectors";

export default function Keys() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const choosedDealerCategory = useSelector(selectChoosedDealerCategory);
  const choosedDealerName = useSelector(selectChoosedDealer);

  const { isLoggedIn, role } = useAuth();

  useEffect(() => {
    if (
      (isLoggedIn && role === "admin") ||
      (isLoggedIn && role === "manager")
    ) {
      dispatch(fetchKeys());
    }
  }, [dispatch, isLoggedIn, role]);

  useEffect(() => {
    if (
      (isLoggedIn && role === "admin") ||
      (isLoggedIn && role === "manager")
    ) {
      dispatch(fetchDealers());
    }
  }, [dispatch, isLoggedIn, role]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Find your keys</title>
        </Helmet>
      </HelmetProvider>

      {role !== "user" && (
        <>
          <div className={css.clienCategoryWrapper}>
            <ClientCategorySelector />
            {choosedDealerCategory && choosedDealerCategory !== "regular" && (
              <ClientNameSelector />
            )}
          </div>
          {choosedDealerCategory === "regular" && <KeyFilter />}
          {choosedDealerName && <KeyFilter />}

          {/* {choosedDealerName && <KeyFilter />} */}
        </>
      )}

      {role === "user" && (
        <p>
          You do not have permission to view this content. If you want to gain
          access, please send an email to: mail.korneev@gmail.com. In the body
          of the email, be sure to include the email address you registered
          with.
        </p>
      )}

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
