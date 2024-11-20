import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../_components/ui/button";
import Header from "./components/header";

const LandingPage: React.FC = () => {
  return (
    <div className="h-screen w-full bg-[#F8F8F8] p-6">
      <Header />
      <h1 className="text-4xl font-bold text-[#353232]">
        Sua Solução <br />
        Digital <br />
        Começa Aqui
      </h1>
      <p>
        Consultoria gratuita para <br />
        tirar sua ideia do papel com <br />
        tecnologia ágil e eficiente.
      </p>

      <Button>
        Iniciar meu projeto <ArrowUpRight />
      </Button>
    </div>
  );
};

export default LandingPage;
