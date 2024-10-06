import Companies from "../components/about/companies";
import Content from "../components/about/content";
import LandingAbout from "../components/about/landingAbout";
import Footer from "../components/home/footer";
import Navbar from "../components/home/navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <LandingAbout />
      <Content />
      <Footer />
    </div>
  );
};

export default About;
