import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  LayoutPanelLeft,
  Rss,
  SquareMousePointer,
  TabletSmartphone,
} from "lucide-react";
import { Button } from "@/app/_components/ui/button";

const ServicesSection: React.FC = () => {
  return (
    <div className="relative py-16">
      <div className="container mx-auto px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#353232] md:text-4xl">
            O melhor desenvolvimento para a sua ideia
          </h2>
          <p className="mt-4 text-lg text-[#353232] opacity-70">
            Transformamos, aprimoramos e impulsionamos negócios de todos os
            tamanhos pequenos, médios ou grandes – com agilidade e sem
            complicação.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="flex flex-col items-center rounded-xl bg-[#9C66FF] p-6 text-center text-white shadow-md">
            <div className="relative flex items-center justify-center">
              <div className="absolute h-16 w-16 rounded-full bg-[#6f46bc] shadow-[0_1px_5px_rgba(0,0,0,0.25)]"></div>
              <LayoutPanelLeft className="relative z-10" />
            </div>
            <h3 className="mt-8 text-lg font-bold">Criação de Aplicativos</h3>
            <p className="mt-2 text-sm">
              Aplicativos personalizados para iOS e Android, focados na
              experiência do usuário e alta performance.
            </p>
          </div>

          <div className="flex flex-col items-center rounded-xl bg-white p-6 text-center text-[#353232] shadow-md">
            <div className="relative flex items-center justify-center">
              <div className="absolute h-16 w-16 rounded-full bg-white shadow-[0_1px_5px_rgba(0,0,0,0.25)]"></div>
              <SquareMousePointer className="relative z-10" />
            </div>
            <h3 className="mt-8 text-lg font-bold">Design UI/UX</h3>
            <p className="mt-2 text-sm">
              Criação de interfaces de usuário e experiências intuitivas e
              envolventes.
            </p>
          </div>

          <div className="flex flex-col items-center rounded-xl bg-white p-6 text-center text-[#353232] shadow-md">
            <div className="relative flex items-center justify-center">
              <div className="absolute h-16 w-16 rounded-full bg-white shadow-[0_1px_5px_rgba(0,0,0,0.25)]"></div>
              <Rss className="relative z-10" />
            </div>
            <h3 className="mt-8 text-lg font-bold">
              Desenvolvimento de páginas web
            </h3>
            <p className="mt-2 text-sm">
              Modernas e responsivas, com foco na experiência do usuário e
              performance.
            </p>
          </div>

          <div className="flex flex-col items-center rounded-xl bg-white p-6 text-center text-[#353232] shadow-md">
            <div className="relative flex items-center justify-center">
              <div className="absolute h-16 w-16 rounded-full bg-white shadow-[0_1px_5px_rgba(0,0,0,0.25)]"></div>
              <TabletSmartphone className="relative z-10" />
            </div>
            <h3 className="mt-8 text-lg font-bold">Gestão de Mídias Sociais</h3>
            <p className="mt-2 text-sm">
              Estratégias que geram engajamento e conectam sua marca ao público
              certo.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          {/* Texto */}
          <div className="mt-4">
            <p className="mt-8 text-lg font-bold text-[#353232]">
              Vamos te ajudar a estabelecer sua empresa através da Tecnologia,{" "}
              <br />
              design e estratégia personalizada.
            </p>
          </div>

          {/* Botão */}
          <Button>
            Marcar uma conversa <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
