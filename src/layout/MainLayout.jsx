import { Outlet } from "react-router";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import styled from "styled-components";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </div>
  );
};

export default MainLayout;

const StyledMain = styled.main`
  margin-left: 250px;
`;
