import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { error } from "../../redux/auth/selectors";

export const LoginForm = () => {
  const errorMessage = useSelector(error);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value.trim().replace(/\s+/g, "");
    const password = form.elements.password.value.trim().replace(/\s+/g, "");

    dispatch(
      logIn({
        email,
        password,
      })
    );

    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit} autoComplete='off'>
        <label className={css.label}>
          Email:
          <input className={css.input} type='email' name='email' required />
        </label>
        <label className={css.label}>
          Password:
          <input className={css.input} type='password' name='password' />
        </label>
        <button className={css.btn} type='submit'>
          Log In
        </button>
      </form>
      {errorMessage && (
        <>
          <p className={css.errorMsg}>Login Failed!</p>
          <p className={css.errorMsg}>Please enter valid data</p>
        </>
      )}
    </>
  );
};
