import Footer from "../Footer";
import Header from "../Header";
import React from "react";
import Facilities from "./Facilities/Index";
import WebDevelopmentServices from "./Webdev";
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: "🌐",
      description: "Crafting modern and responsive websites.",
    },
    {
      id: 2,
      title: "App Development",
      icon: "📱",
      description: "Building user-friendly mobile apps.",
    },
    {
      id: 3,
      title: "UI/UX Design",
      icon: "🎨",
      description: "Designing intuitive user interfaces.",
    },
    {
      id: 4,
      title: "Digital Marketing",
      icon: "📈",
      description: "Boosting online presence with SEO.",
    },
    {
      id: 5,
      title: "Cloud Solutions",
      icon: "☁️",
      description: "Scalable cloud services for businesses.",
    },
    {
      id: 6,
      title: "E-commerce Solutions",
      icon: "🛒",
      description: "Setting up online stores efficiently.",
    },
  ];
  return (
    <div>
      <Header />
      <Facilities/>
      <WebDevelopmentServices/>
      <Footer/>
    </div>
  );
};

export default Services;
