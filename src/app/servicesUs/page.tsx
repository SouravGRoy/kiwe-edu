import Footer from "../components/home/footer";
import Navbar from "../components/home/navbar";
import CtaSection from "../components/services/ctaSection";
import LandingService from "../components/services/landingService";
import { TweetImages } from "../components/services/tweet";

const Services = () => {
  return (
    <div>
      <Navbar />
      <LandingService />
      <CtaSection />
      <TweetImages />
      <Footer />
    </div>
  );
};

export default Services;
