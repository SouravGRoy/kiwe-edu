import React from "react";
import Navbar from "./components/home/navbar";
import Features from "./components/home/features";
import MarqueeAnimation from "./components/home/marqueeAnimation";
import Cards from "./components/home/card";
import Learn from "./components/home/learn";
import Heading from "./components/home/heading";
import { OrbitingCircleAnimation } from "./components/home/orbitingCircleAnimation";
import Footer from "./components/home/footer";
import FinalLanding from "./components/home/finalLanding";
import AboutLanding from "./components/home/aboutLanding";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <FinalLanding />
        <AboutLanding />
        <hr className="md:mb-0 mb-10" />
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
