import styled from "styled-components";
import Container from "../../components/Container";
import MaterialCard from "../../components/MaterialCard";

const MATERIALS = [
  { id: 1, title: "Lesson-1  React intro", number: 1 },
  { id: 2, title: "Lesson-2  React components", number: 2 },
  { id: 3, title: "Lesson-3  React Hooks", number: 3 },
  { id: 4, title: "Lesson-4  React useRef", number: 4 },
  { id: 5, title: "Lesson-5  React useState", number: 5 },

];

const Materials = () => {
  return (
    <Container>
      <h1>Materials</h1>
      <StyledMaterials>
        {MATERIALS.map((item) => {
          return <MaterialCard key={item.id} {...item} />;
        })}
      </StyledMaterials>
    </Container>
  );
};

export default Materials;

const StyledMaterials = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-left: 40px;
`;
