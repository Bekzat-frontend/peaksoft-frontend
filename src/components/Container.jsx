import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Container;

const StyledDiv = styled.div`
  min-height: 100vh;
  background-color: #d9dbda;
  padding-left: 10px;
  color: #3c3b3b;
`;
