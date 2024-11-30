import { Button } from "@/app/_components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function TechSection() {
  const technologies = [
    { name: "Firebase", logo: "/techs/fire.svg" },
    { name: "Neon", logo: "/techs/neon.svg" },
    { name: "Next.js", logo: "/techs/nextjs.svg" },
    { name: "WebFlow", logo: "/techs/webflow.svg" },
    { name: "AWS", logo: "/techs/aws.svg" },
    { name: "MP", logo: "/techs/mp.svg" },
    { name: "Stripe", logo: "/techs/stripe.svg" },
    { name: "Bubble", logo: "/techs/bubble.svg" },
    { name: "Figma", logo: "/techs/figma.svg" },
    { name: "Supabase", logo: "/techs/supabase.svg" },
  ];

  return (
    <section className="flex items-center justify-center py-20">
      <div className="w-96 space-y-6">
        <h1 className="text-2xl font-bold">
          Aplicamos as tecnologias e ferramentas mais avançadas do mercado no
          seu projeto.
        </h1>
        <p className="font-semibold text-[#353232] opacity-50">
          Projetos incriveis exigem ferramentas incriveis
        </p>
        <Button>
          Começar agora <ArrowUpRight />
        </Button>
      </div>

      <div className="px-8 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="relative flex h-20 w-20 flex-col items-center justify-center space-y-2 rounded-full bg-white p-4 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
            >
              <Image
                width={32}
                height={32}
                src={tech.logo}
                alt={tech.name}
                className="h-8 w-8 object-contain transition-opacity duration-300 ease-in-out hover:opacity-80"
              />

              <p className="text-xs font-medium text-gray-700">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
