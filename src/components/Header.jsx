import React from "react";
import styled from "styled-components";
import { HiGlobeAlt } from "react-icons/hi";
import { HiBell } from "react-icons/hi";
import { HiUserCircle } from "react-icons/hi";

function Header() {
  return (
    <StyledHeader>
      <IconContainer>
        {" "}
        <HiGlobeAlt />
        <HiBell />
        <HiUserCircle />
      </IconContainer>
      <select>
        <option>Студент</option>
        <option>войти</option>
      </select>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  padding: 10px 20px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 84%;
  border-bottom: 1px solid #ddd;
  margin-top: 5px;
  margin-left: 16%;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 50px;
  margin-left: 100px;

  svg {
    font-size: 30px;
    color: #333;
  }
`;

export default Header;
