import css from "./pages.module.css";

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to key-manager</h1>
      <p className={css.text}>please register or login</p>
      <div className={css.img}></div>
    </div>
  );
}
