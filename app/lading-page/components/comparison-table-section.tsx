import React from "react";
import Image from "next/image";
import { CircleCheckBig, CircleX } from "lucide-react";

const ComparisonTable = () => {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-lg bg-black shadow-lg">
      <div className="flex items-center justify-between bg-black p-4 text-white">
        <Image
          src="/dmtn.svg"
          alt="DMTN Logo"
          width={50}
          height={50}
          className="brightness-0 invert"
        />
        <p className="text-sm">Outras opções do mercado</p>
      </div>
      <table className="w-full table-auto">
        <tbody>
          {[
            {
              title: "Desenvolvimento Ágil por Sprints",
              dmtn: true,
              other: false,
            },
            {
              title: "Acompanhamento Contínuo e Transparente",
              dmtn: true,
              other: false,
            },
            { title: "Metodologia DMTN", dmtn: true, other: false },
            {
              title: "Sistema de Monitoramento Avançado",
              dmtn: true,
              other: false,
            },
            { title: "Custo-Benefício", dmtn: true, other: false },
            { title: "Design Inteligente (LD)", dmtn: true, other: false },
          ].map((row, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-[#5451A1]" : "bg-black"
              } text-white`}
            >
              <td className="px-4 py-2">{row.title}</td>
              <td className="px-4 py-2 text-center">
                {row.dmtn ? (
                  <Image
                    width={20}
                    height={20}
                    src="checkmark.circle.fill.svg"
                    alt="check"
                  />
                ) : (
                  <Image
                    width={20}
                    height={20}
                    src="checkmark.circle.fill.svg"
                    alt="check"
                  />
                )}
              </td>
              <td className="px-4 py-2 text-center">
                {row.other ? (
                  <Image
                    width={20}
                    height={20}
                    src="checkmark.circle.fill.svg"
                    alt="check"
                  />
                ) : (
                  <Image
                    width={20}
                    height={20}
                    src="checkmark.circle.fill.svg"
                    alt="check"
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
