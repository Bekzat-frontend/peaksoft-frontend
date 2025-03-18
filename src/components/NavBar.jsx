import { NavLink } from "react-router";
import styled from "styled-components";

const NavBar = () => {
  return (
    <StyledWrapper>
      <StyledLink to="courses">Мои курсы</StyledLink>
      <StyledLink to="announcement">Объявления</StyledLink>
      <StyledLink to="basket">Корзина</StyledLink>
      <StyledLink to="schedule">Расписание</StyledLink>
    </StyledWrapper>
  );
};

export default NavBar;
const StyledLink = styled(NavLink)`
  &.active {
    color: rgb(31, 110, 212);
    background: rgb(221, 233, 212);
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

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 100%;
  width: 240px;
  padding-left: 20px;
  padding-top: 100px;
`;
