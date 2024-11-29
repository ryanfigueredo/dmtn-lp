"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { ArrowUpRight } from "lucide-react";

const HeaderSection = () => {
  useEffect(() => {
    const disableRightClick = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
  };

  return (
    <div className="mt-10 flex flex-col items-center gap-2 md:flex-row md:items-center md:justify-center md:gap-96">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-[#353232] md:text-5xl">
          Sua Solução <br />
          Digital <br />
          Começa Aqui
        </h1>
        <p className="text-justify text-base text-[#353232] md:w-56 md:text-lg">
          Consultoria gratuita para tirar sua ideia do papel com tecnologia ágil
          e eficiente.
        </p>
        <Button>
          Iniciar meu projeto <ArrowUpRight />
        </Button>
      </div>

      <div className="flex justify-center">
        <Image
          src="hero.svg"
          alt="Ilustração de lâmpadas representando ideias"
          className="h-auto w-auto max-w-xs md:max-w-md"
          height={473}
          width={474}
          priority={true}
          onDragStart={handleDragStart} // Adicionado para evitar arrastar a imagem
        />
      </div>
    </div>
  );
};

export default HeaderSection;
