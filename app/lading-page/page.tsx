import React from "react";
import { ArrowRight, ArrowUpRight, SquareCheckBig } from "lucide-react";
import { Button } from "../_components/ui/button";
import Header from "./components/header";
import Image from "next/image";
import ServicesSection from "./components/services-section";
import ComparisonTable from "./components/comparison-table-section";
import SectionPartners from "./components/section-partners";
import HeaderSection from "./components/section-header";
import MetodologiaSection from "./components/section-metodology";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-[rgb(248,248,248)]">
      <div className="p-4 md:p-8">
        <Header />
        <HeaderSection />
        <SectionPartners />
        <ServicesSection />
      </div>

      <div className="flex flex-col items-center justify-center gap-4 pb-4 text-center text-black md:pb-10">
        <h1 className="text-2xl font-bold md:text-3xl">
          Como funciona nosso método?
        </h1>
        <p className="font-bold opacity-50">
          Temos a solução ideal para suas necessidades, lançando seu projeto de
          forma organizada e segura, sem complicações.
        </p>
      </div>

      <div className="h-full bg-[#121212] p-10">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="md:w- gap-8 md:flex md:max-w-2xl md:justify-center">
            <div className="h-90 mb-2 flex w-auto flex-col rounded-lg bg-[#5451A1] p-8 md:m-0 md:max-w-80 md:justify-between">
              <div>
                <h1 className="text-xl font-extrabold text-white">
                  Método de Sprints
                </h1>
                <p className="text-md my-2 text-justify text-white">
                  Para projetos que precisam ganhar vida rapidamente e com baixo
                  custo (MVP).
                </p>
                <div className="my-4 gap-2 text-left text-white">
                  <p className="flex items-center gap-2">
                    <SquareCheckBig size={12} />
                    Seu MVP no ar em poucos dias
                  </p>
                  <p className="flex items-center gap-2">
                    <SquareCheckBig size={12} />
                    Baixo custo de produção
                  </p>
                  <p className="flex items-center gap-2">
                    <SquareCheckBig size={12} />
                    Profissionais especialistas.
                  </p>
                </div>
              </div>
              <Button variant="outline">
                Marcar uma conversa <ArrowRight />
              </Button>
            </div>

            <div className="h-90 flex w-auto flex-col rounded-lg bg-[#434173] p-8 md:max-w-80 md:justify-between">
              <div>
                <h1 className="text-xl font-extrabold text-white">
                  Método de Sprints
                </h1>
                <p className="text-md my-2 text-justify text-white">
                  Para projetos que precisam ganhar vida rapidamente e com baixo
                  custo (MVP).
                </p>
                <div className="my-4 gap-2 text-left text-white">
                  <p className="flex items-center gap-2">
                    <SquareCheckBig size={12} />
                    Seu MVP no ar em poucos dias
                  </p>
                  <p className="flex items-center gap-2">
                    <SquareCheckBig size={12} />
                    Baixo custo de produção
                  </p>
                  <p className="flex items-center gap-2">
                    <SquareCheckBig size={12} />
                    Profissionais especialistas.
                  </p>
                </div>
              </div>
              <Button variant="outline">
                Marcar uma conversa <ArrowRight />
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-8 rounded-lg bg-white p-4 text-start md:max-w-2xl md:p-8">
            <div>
              <h1 className="text-2xl font-extrabold text-black">
                Consultoria de Diagnóstico Gratuita
              </h1>
              <p className="text-md my-2 text-justify text-black">
                Quer entender qual modalidade é ideal para o seu projeto?
                <br />
                <br />
                Agende uma consultoria gratuita e converse com nossos
                especialistas. Eles vão indicar o melhor caminho para o sucesso
                da sua empresa.
                <br />
                <br />
                Lembre-se: não existe ideia ruim, apenas ideias que ainda não
                foram lançadas. Clique no botão abaixo e agende sua consultoria
                agora!
              </p>
              <h1 className="text-xl font-bold text-black">
                Vamos conversar sobre o seu projeto
              </h1>
            </div>
            <div>
              <Button>
                Quero receber contato <ArrowRight />
              </Button>
              <p className="text-xs">
                Nossos especialistas estão prontos para atender você!
              </p>
            </div>
          </div>

          <h1 className="pt-4 text-2xl font-bold text-white md:text-2xl">
            Diferente de tudo que você <br />
            ja viu no mercado:
          </h1>
          <ComparisonTable />
        </div>
      </div>

      <MetodologiaSection />
    </div>
  );
};

export default LandingPage;
