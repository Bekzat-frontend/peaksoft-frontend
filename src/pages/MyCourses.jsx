import styled from "styled-components";
import Container from "../components/Container";
import { CourseCard } from "../components/CourseCard";

const COURSES = [
  {
    id: 1,
    courseName: "React 17 Morning",
    dateOfFinish: "2025-02-28",
    description: "9:00/11:00",
    imageLink:
      "https://peaksoftlms.s3.amazonaws.com/png/1740719457000%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%20%D0%B1%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.png",
  },
  {
    id: 2,
    courseName: "JS 17 - DAY",
    dateOfFinish: "2025-01-13",
    description: "JavaScript, HTML, CSS",
    imageLink: "https://peaksoftlms.s3.amazonaws.com/IT-prod.webp",
  },
  {
    id: 3,
    courseName: "React 16 Evening",
    dateOfFinish: "2024-09-17",
    description: "18:00/20:00",
    imageLink:
      "https://peaksoftlms.s3.amazonaws.com/jpg/173622532039924282418-63a54bede68da.jpg",
  },
  {
    id: 4,
    courseName: "JS 17 - Morning",
    dateOfFinish: "2024-08-25",
    description: "Introduction to Javascript",
    imageLink: "http://dummyimage.com/140x100.png/cc0000/ffffff",
  },
  {
    id: 5,
    courseName: "JS 16 Evening",
    dateOfFinish: "2024-08-25",
    description: "01.10.2024 - 18:00 \\ 20:00",
    imageLink:
      "https://peaksoftlms.s3.amazonaws.com/jpg/1727761680205javascript-series.jpg",
  },
  {
    id: 6,
    courseName: "sessions JS-14",
    dateOfFinish: "2024-12-04",
    description: "PRACTICE LESSONS",
    imageLink: "https://peaksoftlms.s3.amazonaws.com/IT-prod.webp",
  },
  {
    id: 7,
    courseName: "Java 15",
    dateOfFinish: "2024-12-04",
    description: "Java core first stage",
    imageLink:
      "https://peaksoftlms.s3.amazonaws.com/jpg/1719826723447MasterClass-Java.mukhammed.jpg",
  },
  {
    id: 8,
    courseName: "JS-14 REACT LESSONS",
    dateOfFinish: "2024-09-05",
    description: "JS-14 REACT Lessons",
    imageLink:
      "https://peaksoftlms.s3.amazonaws.com/jpg/1719745184591React.jpg",
  },
];

const MyCourses = () => {
  return (
    <Container>
      <h1>MyCourses</h1>
      <StyledWrapper>
        {COURSES.map((item) => {
          return <CourseCard key={item.id} {...item} />;
        })}
      </StyledWrapper>
    </Container>
  );
};

export default MyCourses;
const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex: 1 0 auto;
`;
