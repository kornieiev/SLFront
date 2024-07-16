import { useSelector } from "react-redux";
import { selectLoading } from "../redux/keys/selectors";
import { HelmetProvider, Helmet } from "react-helmet-async";
import AddNewKey from "../components/AddKey/AddNewKey";
import { useAuth } from "../hooks/useAuth";

export default function AddKey() {
  const { role } = useAuth();

  const isLoading = useSelector(selectLoading);
  console.log("🚀 ~ AddKey ~ role:", role);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Add new key</title>
        </Helmet>
      </HelmetProvider>

      <h3>Here you can add new key</h3>
      <AddNewKey />

      <div>{isLoading && "Request in progress..."}</div>
    </>
  );
}
