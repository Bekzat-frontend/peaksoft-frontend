import { NavLink, Outlet } from "react-router";
import styled from "styled-components";
import Breadcrumbs from "../components/BreadCrumbs";

const CoursesLayout = () => {
  return (
    <div>
      <nav style={{ marginBottom: "30px" }}>
        <StyledLink to="materials">Материалы</StyledLink>
        <StyledLink to="students">Студенты</StyledLink>
        <StyledLink to="rating">Рейтинг студентов</StyledLink>
      </nav>
      <div>
        <Breadcrumbs />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default CoursesLayout;

const StyledLink = styled(NavLink)`
  &.active {
    color: rgb(31, 110, 212);
    border-bottom: 2px solid rgb(31, 110, 212);
  }
  color: black;
  text-decoration: none;
  padding: 8px 16px 8px 24px;
  cursor: pointer;
  color: gray;
  font-size: 18px;
  padding: 10px;
  transition: 0.3s;
  max-width: 200px;
`;
