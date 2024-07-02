import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import NotFoundPage from "./pages/NotFoundPage";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useAuth } from "./hooks";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: orange;
  }
`;

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  console.log("🚀 ~ App ~ isRefreshing:", isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? <div>QWE</div> : <div>ZXC</div>}

      <nav>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/about'>About</StyledLink>
        <StyledLink to='/products'>Products</StyledLink>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
