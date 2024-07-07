import React from "react";
import Navbar from "./components/home/navbar";
import Landing from "./components/home/landing";
import Features from "./components/home/features";
import MarqueeAnimation from "./components/home/marqueeAnimation";
import Cards from "./components/home/card";
import Learn from "./components/home/learn";
import Heading from "./components/home/heading";
import { OrbitingCircleAnimation } from "./components/home/orbitingCircleAnimation";
import Footer from "./components/home/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Features />
      <Heading />
      <Cards />
      <MarqueeAnimation />
      <Learn />
      <OrbitingCircleAnimation />
      <Footer />
    </div>
  );
}
