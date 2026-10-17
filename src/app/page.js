import CTA from "@/components/common/CTA";
import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import ProductShowcase from "@/components/home/ProductShowcase";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ProductShowcase />
      <WhyChooseUs />
      <CTA />
    </>
  );
};

export default page;
