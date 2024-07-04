// import { Helmet } from "react-helmet";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";
import { HelmetProvider, Helmet } from "react-helmet-async";

export default function Register() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Registration</title>
        </Helmet>
      </HelmetProvider>
      <RegisterForm />
    </div>
  );
}
