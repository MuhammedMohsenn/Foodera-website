import React from "react";
import AboutUs from "../components/AboutUs";
import AskedQuestions from "../components/AskedQuestions";
import ExploreSection from "../components/ExploreSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LearnMore from "../components/LearnMore";
import NewsLetter from "../components/NewsLetter";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import VideoAction from "../components/VideoAction";

const Home = () => {
  return (
    <div>
      <Header />
      <Stats />
      <AboutUs />
      <VideoAction />
      <ExploreSection />
      <Testimonials />
      <AskedQuestions />
      <LearnMore />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
