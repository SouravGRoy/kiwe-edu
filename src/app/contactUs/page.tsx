import ContactForm from "../components/contact/contactForm";
import LandingContact from "../components/contact/contactLanding";
import ContactTab from "../components/contact/contactTab";
import Footer from "../components/home/footer";
import Navbar from "../components/home/navbar";

const Services = () => {
  return (
    <div>
      <Navbar />
      <LandingContact />
      <ContactForm />
      <ContactTab />
      <Footer />
    </div>
  );
};

export default Services;
