import { Outlet } from "react-router-dom";
// import { DNA } from "react-loader-spinner";
import { AppBar } from "./AppBar/AppBar";
import { Suspense } from "react";
import css from "./Layout.module.css";
// import { useSelector } from "react-redux";
// import { selectLoading } from "../redux/keys/selectors";

export const Layout = () => {
  // const isLoading = useSelector(selectLoading);

  return (
    <div className={css.wrapper}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* {isLoading && (
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
      )} */}
    </div>
  );
};
