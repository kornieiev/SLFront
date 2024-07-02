import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import NotFoundPage from "./pages/NotFoundPage";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: orange;
  }
`;

function App() {
  return (
    <>
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
