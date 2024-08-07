import Navbar from "../components/home/navbar";
import CtaSection from "../components/services/ctaSection";
import LandingService from "../components/services/landingService";
import NewLetter from "../components/services/newsLetter";
import { TweetImages } from "../components/services/tweet";

const Services = () => {
  return (
    <div>
      <Navbar />
      <LandingService />
      <CtaSection />
      <TweetImages />
      <NewLetter />
    </div>
  );
};

export default Services;
