// import { Helmet } from "react-helmet";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { HelmetProvider, Helmet } from "react-helmet-async";

export default function Login() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Login</title>
        </Helmet>
      </HelmetProvider>
      <LoginForm />
    </div>
  );
}
