import { useNavigate } from "react-router";
import styled from "styled-components";

export const CourseCard = (props) => {
  const { id, courseName, dateOfFinish, description, imageLink } = props;
  const navigate = useNavigate()
  return (
    <StyledCard onClick={()=> navigate(`${id}`)}>
      <div>
        <Image src={imageLink} alt="course-image" />
      </div> 
      <div>
        <DecriptionContainer>
          <div>{courseName}</div>
          <span>{dateOfFinish}</span>
        </DecriptionContainer>
        <SubDescription>{description}</SubDescription>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 270px;
  max-width: 270px;
  height: 305px;
  background-color: white;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 4px;
  overflow: hidden;
  padding: 12px 12px 0px;
  box-sizing: border-box;
  cursor: pointer;
`;

const Image = styled.img`
  height: 146px;
  width: 100%;
  object-fit: cover;
  border-radius: 6px;
`;
const DecriptionContainer = styled.div`
  padding: 20px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SubDescription = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #c7c2c2;
  margin-top: 10px;
  padding-left: 16px;
  padding-right: 16px;
`;
