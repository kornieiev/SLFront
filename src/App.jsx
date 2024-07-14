import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { refreshUser } from "./redux/auth/operations";
import { useAuth } from "./hooks";

const HomePage = lazy(() => import("./pages/Home"));
const RegisterPage = lazy(() => import("./pages/Register"));
const LoginPage = lazy(() => import("./pages/Login"));
const FindKeysPage = lazy(() => import("./pages/Keys"));
const AddKeyPage = lazy(() => import("./pages/AddKey"));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path='/register'
          element={
            <RestrictedRoute redirectTo='/keys' component={<RegisterPage />} />
          }
        />
        <Route
          path='/login'
          element={
            <RestrictedRoute redirectTo='/keys' component={<LoginPage />} />
          }
        />
        <Route
          path='/keys'
          element={
            <PrivateRoute redirectTo='/login' component={<FindKeysPage />} />
          }
        />
        <Route
          path='/addKey'
          element={
            <PrivateRoute redirectTo='/login' component={<AddKeyPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
