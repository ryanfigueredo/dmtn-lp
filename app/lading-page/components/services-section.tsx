import React from "react";
import Image from "next/image";

const ServicesSection: React.FC = () => {
  return (
    <div className="relative py-16">
      <div className="absolute inset-0 -z-10">
        <Image
          src="background-shape.svg"
          alt="Background Shape"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-8">
        {/* Título */}
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

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* Card 1 */}
          <div className="flex flex-col items-center rounded-xl bg-[#9C66FF] p-6 text-center text-white shadow-md">
            <Image
              src="/icon-app.svg"
              alt="Criação de Aplicativos"
              width={48}
              height={48}
            />
            <h3 className="mt-4 text-lg font-bold">Criação de Aplicativos</h3>
            <p className="mt-2 text-sm">
              Aplicativos personalizados para iOS e Android, focados na
              experiência do usuário e alta performance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center rounded-xl bg-white p-6 text-center text-[#353232] shadow-md">
            <Image
              src="/icon-uiux.svg"
              alt="Design UI/UX"
              width={48}
              height={48}
            />
            <h3 className="mt-4 text-lg font-bold">Design UI/UX</h3>
            <p className="mt-2 text-sm">
              Criação de interfaces de usuário e experiências intuitivas e
              envolventes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center rounded-xl bg-white p-6 text-center text-[#353232] shadow-md">
            <Image
              src="/icon-web.svg"
              alt="Desenvolvimento de páginas web"
              width={48}
              height={48}
            />
            <h3 className="mt-4 text-lg font-bold">
              Desenvolvimento de páginas web
            </h3>
            <p className="mt-2 text-sm">
              Modernas e responsivas, com foco na experiência do usuário e
              performance.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center rounded-xl bg-white p-6 text-center text-[#353232] shadow-md">
            <Image
              src="/icon-social.svg"
              alt="Gestão de Mídias Sociais"
              width={48}
              height={48}
            />
            <h3 className="mt-4 text-lg font-bold">Gestão de Mídias Sociais</h3>
            <p className="mt-2 text-sm">
              Estratégias que geram engajamento e conectam sua marca ao público
              certo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
