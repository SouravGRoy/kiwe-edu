import LandingCourses from "../components/courses/landingCourses";
import Footer from "../components/home/footer";
import Navbar from "../components/home/navbar";
import CoursesCard from "../components/courses/coursesCard";
import { content } from "../../../content";
import { ScrollBasedVelocityDemo } from "../components/courses/scrollVelocity";

const Courses = () => {
  return (
    <div>
      <Navbar />
      <LandingCourses />
      <CoursesCard courses={content} />
      <div className="py-20">
        <ScrollBasedVelocityDemo />
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
