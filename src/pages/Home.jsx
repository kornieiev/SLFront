import css from "./pages.module.css";
import { useAuth } from "../hooks";
import Logo from "components/Logo/Logo";

export default function Home() {
  const { isLoggedIn, role } = useAuth();

  return (
    <div className={css.container}>
      {/* <h1 className={css.title}>Welcome!</h1> */}

      <Logo />

      {role === "admin" && isLoggedIn && (
        <p className={css.text}>
          You have full access. You can view, add, and modify data.
        </p>
      )}
      {role === "user" && isLoggedIn && (
        <p className={css.text}>
          Your access is limited to viewing data. You cannot modify the data.
        </p>
      )}

      {!isLoggedIn && <p className={css.text}>Please register or login</p>}

      {/* <div className={css.img}></div> */}

      <div className={css.createdBy}>Created by mail.korneev@gmail.com</div>
    </div>
  );
}
