import { Button } from "@/app/_components/ui/button";
import Image from "next/image";
import Link from "next/link";
import CustomSheetHeader from "./sheet-header";

const Header = () => {
  return (
    <div className="mb-20 flex h-12 w-full items-center justify-between rounded-full border border-solid border-[#868585] p-4 md:p-10">
      <div>
        {/* Adicione classes responsivas para ajustar o tamanho */}
        <Image
          height={40} // Altura menor para dispositivos móveis
          width={60} // Largura menor para dispositivos móveis
          className="md:height-[55px] md:width-[80px]" // Ajuste para telas médias ou maiores
          src="/dmtn.svg"
          alt="Logo"
        />
      </div>

      <div className="hidden gap-4 md:flex">
        <Link href="#">Consultoria Gratuita</Link>
        <Link href="#">Soluções</Link>
        <Link href="#">Metodologia</Link>
        <Link href="#">Produtos</Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <Button>Entrar em contato</Button>
        </div>

        <div className="md:hidden">
          <CustomSheetHeader />
        </div>
      </div>
    </div>
  );
};

export default Header;
