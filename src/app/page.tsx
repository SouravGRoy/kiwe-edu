import AboutLanding from "./components/home/aboutLanding";
import Cards from "./components/home/card";
import Features from "./components/home/features";
import FinalLanding from "./components/home/finalLanding";
import Heading from "./components/home/heading";
import Learn from "./components/home/learn";
import MarqueeAnimation from "./components/home/marqueeAnimation";
import { OrbitingCircleAnimation } from "./components/home/orbitingCircleAnimation";
import Layout from "./components/Layout";

export default function Home() {
    return (
        <div>
            <Layout>
                <FinalLanding />
                <AboutLanding />
                <hr className="mb-10 md:mb-0" />
                <Features />
                <Heading />
                <Cards />
                <MarqueeAnimation />
                <Learn />
                <OrbitingCircleAnimation />
            </Layout>
        </div>
    );
}
