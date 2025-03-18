import { Link, Navigate, Route, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";
import MyCourses from "../pages/MyCourses";
import Announcement from "../pages/Announcement";
import Basket from "../pages/Basket";
import Schedule from "../pages/Schedule";
import CoursesLayout from "../layout/CoursesLayout";
import Materials from "./coursesPages/Materials";
import Students from "./coursesPages/Students";
import Rating from "./coursesPages/Rating";
import MaterialLayout from "../layout/MaterialLayout";
import Video from "./MaterialPages.jsx/Video";
import Presentation from "./MaterialPages.jsx/Presentation";
import Task from "./MaterialPages.jsx/Task";
import Test from "./MaterialPages.jsx/Test";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="courses" />} />
        <Route path="/courses" element={<MyCourses />} />
        <Route path="courses/:id" element={<CoursesLayout />}>
          <Route index element={<Navigate to="materials" />} />
          <Route path="materials" element={<Materials />} />
          <Route path="materials/:id" element={<MaterialLayout />}>
            <Route path="video" element={<Video />} />
            <Route path="presentation" element={<Presentation />} />
            <Route path="task" element={<Task />} />
            <Route path="link" element={<Link />} />
            <Route path="test" element={<Test />} />
          </Route>
          <Route path="students" element={<Students />} />
          <Route path="rating" element={<Rating />} />
        </Route>
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/schedule" element={<Schedule />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
