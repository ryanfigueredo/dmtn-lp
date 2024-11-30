import React from "react";
import Header from "./components/header";
import ServicesSection from "./components/services-section";
import SectionPartners from "./components/section-partners";
import HeaderSection from "./components/section-header";
import MetodologiaSection from "./components/section-metodology";
import TechSection from "./components/techs-section";
import Footer from "./components/footer";
import FuncMetodology from "./components/section-func-metodology";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-[rgb(248,248,248)]">
      <div className="p-4 md:p-8">
        <Header />
      </div>
      <HeaderSection />
      <SectionPartners />
      <ServicesSection />
      <div className="flex flex-col items-center justify-center gap-4 pb-4 text-center md:pb-10">
        <h1 className="text-2xl font-bold md:text-3xl">
          Como funciona nosso método?
        </h1>
        <p className="font-bold opacity-50">
          Temos a solução ideal para suas necessidades, lançando seu projeto de
          forma organizada e segura, sem complicações.
        </p>
      </div>
      <FuncMetodology />
      <MetodologiaSection />
      <TechSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
