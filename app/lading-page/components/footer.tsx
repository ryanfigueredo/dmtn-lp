import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1D1D1D] py-20 text-white">
      <div className="mx-auto flex items-center justify-center space-y-8 md:flex-row md:items-start md:space-x-80 md:space-y-16">
        <div className="text-center md:space-y-6 md:text-left">
          <Image
            height={30}
            width={50}
            className="md:h-[55px] md:w-[80px]"
            src="/dmtnw.svg"
            alt="Logo"
          />
          <h2 className="text-lg font-bold">Sitemap</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#solucoes" className="hover:underline">
                Soluções
              </a>
            </li>
            <li>
              <a href="#metodologia" className="hover:underline">
                Metodologia
              </a>
            </li>
            <li>
              <a href="#produtos" className="hover:underline">
                Produtos
              </a>
            </li>
            <li>
              <a href="#consultoria" className="hover:underline">
                Consultoria gratuita
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">Contato</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <Link
                href="#https://wa.me/5521997624873?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20DMTN%20Digital"
                className=""
                target="_blank"
                rel="noopener noreferrer"
              >
                +55 21 99762-4873
              </Link>
            </li>
            <li>
              <Link href="#trabalhe-conosco" className="">
                contato@dmtndigital.com.br
              </Link>
            </li>
            <li>
              <Link href="#trabalhe-conosco" className="">
                Trabalhe conosco
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-white"></div>

      <div className="mt-4 text-center text-sm text-white">
        Direitos Reservados © | DMTN DIGITAL CNPJ 77.562.377/0001-69 | Visconde
        de Pirajá 414, Ipanema - RJ
      </div>
    </footer>
  );
};

export default Footer;
