import { useNavigate } from "react-router";
import styled from "styled-components";

const MaterialCard = ({ number, title ,id}) => {
  const navigate = useNavigate();
  return (
    <StyledMaterial onClick={() => navigate(`${id}/video`)}>
      <p>{number}</p>
      <p>{title}</p>
    </StyledMaterial>
  );
};

export default MaterialCard;

const StyledMaterial = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 400px;
  background-color: gray;
  padding: 20px;
  border-radius: 20px;
  color: white;
`;
