import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  SquareCheckBig,
} from "lucide-react";
import { Button } from "../_components/ui/button";
import Header from "./components/header";
import Image from "next/image";
import ServicesSection from "./components/services-section";
import ComparisonTable from "./components/comparison-table-section";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-[#F8F8F8] p-6">
      {/* Seções Gerais */}
      <div className="b w-ful h-screen">
        <Header />
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-center">
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

        <div className="mt-64 flex flex-col items-center justify-center gap-8 py-64">
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
              Mais de 50 projetos realizados com sucesso para empresas de
              diversos setores. <br />
              Junte-se a nós e transforme seu negócio em um case de sucesso.
            </h2>
            <Button>
              Marcar uma conversa <ArrowRight />
            </Button>
          </div>
        </div>

        <ServicesSection />

        <div className="-mx-6 bg-[#121212] px-0 py-32">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="font-bold text-white md:text-4xl">
              Como funciona nosso método?
            </h1>
            <p className="font-bold text-white opacity-50">
              Temos a solução ideal para suas necessidades, lançando seu projeto
              <br /> de forma organizada e segura, sem complicações.
            </p>

            <div className="md:w- gap-8 md:flex md:max-w-2xl md:justify-center">
              <div className="h-90 flex w-auto max-w-80 flex-col rounded-lg bg-[#5451A1] p-8 md:justify-between">
                <div>
                  <h1 className="text-xl font-extrabold text-white">
                    Método de Sprints
                  </h1>
                  <p className="text-md my-2 text-justify text-white">
                    Para projetos que precisam ganhar vida rapidamente e com
                    baixo custo (MVP).
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

              <div className="h-90 w-auto max-w-80 flex-col rounded-lg bg-[#434173] p-8">
                <h1 className="text-xl font-extrabold text-white">
                  Método de Escalas
                </h1>
                <p className="text-md my-2 text-justify text-white">
                  Para negócios validados que querem escalar ao máximo seu
                  produto
                </p>
                <div className="my-4 gap-2 text-left text-white">
                  <p className="flex items-center gap-2">
                    <SquareCheckBig size={12} />
                    Squads de tecnologia 100% dedicados ao seu projeto
                  </p>
                  <p className="flex items-center gap-2">
                    <SquareCheckBig size={12} />
                    Trabalho contínuo de melhoria e desenvolvimento
                  </p>
                  <p className="flex items-center gap-2">
                    <SquareCheckBig size={12} />
                    Um novo braço da tecnologia para sua empresa
                  </p>
                </div>
                <Button variant="outline">
                  Marcar uma conversa <ArrowRight />
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-8 rounded-lg bg-white p-4 text-start md:max-w-2xl md:p-8">
              <div>
                <h1 className="text-xl font-extrabold text-black">
                  Consultoria de Diagnóstico Gratuita
                </h1>
                <p className="text-md my-2 text-justify text-black">
                  Quer entender qual modalidade é ideal para o seu projeto?
                  <br />
                  <br />
                  Agende uma consultoria gratuita e converse com nossos
                  especialistas. Eles vão indicar o melhor caminho para o
                  sucesso da sua empresa.
                  <br />
                  <br />
                  Lembre-se: não existe ideia ruim, apenas ideias que ainda não
                  foram lançadas. Clique no botão abaixo e agende sua
                  consultoria agora!
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

            <h1 className="font-bold text-white md:text-2xl">
              Diferente de tudo que você ja viu no mercado:
            </h1>
            <ComparisonTable />
          </div>
        </div>

        <div className="py-32">
          <h1 className="font-bold md:text-4xl">Metodologia DMTN</h1>next
          content
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
