import Footer from "../components/home/footer";
import Navbar from "../components/home/navbar";
import CtaSection from "../components/services/ctaSection";
import LandingService from "../components/services/landingService";
import NewLetter from "../components/services/newsLetter";
import Pricing from "../components/services/pricing";

const Services = () => {
  return (
    <div>
      <Navbar />
      <LandingService />
      <CtaSection />
      <Pricing />
      <NewLetter />
    </div>
  );
};

export default Services;
