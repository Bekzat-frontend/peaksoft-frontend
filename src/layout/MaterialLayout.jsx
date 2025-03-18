import { NavLink } from "react-router";
import styled from "styled-components";

const MaterialLayout = () => {
  return (
    <div>
      <nav>
        <StyledLink to="video">Видеоурок</StyledLink>
        <StyledLink to="presentation">Презентация</StyledLink>
        <StyledLink to="task">Задание</StyledLink>
        <StyledLink to="link">Ссылка</StyledLink>
        <StyledLink to="test">Тест</StyledLink>
      </nav>
    </div>
  );
};

export default MaterialLayout;
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
