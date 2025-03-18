import React from "react";
import styled from "styled-components";
function Pagination() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          style={{ marginTop: "40px", marginLeft: "35px", fontSize: "22px" }}
        >
          <span> Перейти на страницу</span>
          <button
            style={{
              marginLeft: "15px",
              fontSize: "20px",
              border: "2px solid blue",
            }}
          >
            {" "}
            1
          </button>
        </div>
        <Styledtext>
          <span>Показать</span>
          <button
            style={{
              padding: "6px 20px",

              border: "1px solid blue",
            }}
          >
            6
          </button>
          <span>из 21</span>
        </Styledtext>
      </div>
    </>
  );
}
const Styledtext = styled.div`
  font-size: 20px;

  margin-top: 40px;
  margin-left: 55%;
  display: flex;
  column-gap: 13px;
`;

export default Pagination;
