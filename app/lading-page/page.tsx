import React from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "../_components/ui/button";
import Header from "./components/header";
import Image from "next/image";
import ServicesSection from "./components/services-section";

const LandingPage: React.FC = () => {
  return (
    <div className="h-screen w-full bg-[#F8F8F8] p-6">
      <Header />
      <div className="flex flex-col items-center justify-between gap-8 p-8 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold text-[#353232] md:text-5xl">
            Sua Solução <br />
            Digital <br />
            Começa Aqui
          </h1>
          <p className="text-justify text-base text-[#353232] md:w-56 md:text-lg">
            Consultoria gratuita para tirar sua ideia do papel com tecnologia
            ágil e eficiente.
          </p>
          <Button>
            Iniciar meu projeto <ArrowUpRight />
          </Button>
        </div>

        <div className="flex flex-1 justify-center">
          <Image
            src="hero.svg"
            alt="Ilustração de lâmpadas representando ideias"
            className="h-auto w-auto max-w-xs md:max-w-md"
            height={473}
            width={474}
            priority={true}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 py-64">
        <div className="flex flex-wrap justify-center gap-8">
          <Image src="kl.svg" height={40} width={80} alt="" />
          <Image src="barber.svg" height={40} width={80} alt="" />
          <Image src="mury.svg" height={40} width={80} alt="" />
          <Image src="netshoes.svg" height={40} width={80} alt="" />
          <Image src="pedracom.svg" height={40} width={80} alt="" />
          <Image src="tz.svg" height={40} width={80} alt="" />
        </div>

        <div className="space-y-4 text-center">
          <h2 className="text-lg text-[#353232]">
            Mais de 50 projetos realizados com sucesso para empresas de diversos
            setores. <br />
            Junte-se a nós e transforme seu negócio em um case de sucesso.
          </h2>
          <Button>
            Marcar uma conversa <ArrowRight />
          </Button>
        </div>
      </div>

      <ServicesSection />
    </div>
  );
};

export default LandingPage;
