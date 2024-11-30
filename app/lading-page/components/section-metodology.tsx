import Image from "next/image";

export default function MetodologiaSection() {
  return (
    <section className="flex flex-col items-center justify-center space-y-12 pt-24">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold">Metodologia DMTN</h1>
        <p className="mx-auto mt-4 font-medium text-gray-600 md:max-w-lg">
          Criamos uma abordagem própria para impulsionar e transformar negócios,
          descomplicando desafios complexos por meio da tecnologia. Conheça a
          Metodologia DMTN:
        </p>
      </div>

      <div className="space-y-8 pb-28 text-[#353232]">
        {/* Primeira linha */}
        <div className="flex gap-10">
          {/* Quadro 1 */}
          <div className="animate-bgPulse w-80 rounded bg-gray-100 p-8 delay-0">
            <div className="text-justify">
              <h2 className="text-2xl font-bold">01 - Explorar</h2>
              <p className="md:max-w-sm">
                Entendemos profundamente o seu negócio e descobrimos
                oportunidades de crescimento.
              </p>
            </div>
            <Image
              src="/explorar.svg"
              alt="Discovery"
              width={200}
              height={200}
            />
          </div>

          {/* Quadro 2 */}
          <div className="animate-bgPulse flex w-96 flex-col items-end justify-end rounded bg-gray-100 p-8 delay-300">
            <Image
              src="/planejar.svg"
              alt="Discovery"
              width={200}
              height={200}
            />
            <div>
              <h2 className="text-2xl font-bold">02 - Planejar</h2>
              <p className="md:max-w-58">
                Estruturamos soluções estratégicas com um design centrado no
                usuário.
              </p>
            </div>
          </div>
        </div>

        {/* Segunda linha */}
        <div className="flex gap-10">
          {/* Quadro 3 */}
          <div className="animate-bgPulse delay-600 w-96 rounded bg-gray-100 p-8">
            <Image
              src="/construir.svg"
              alt="Discovery"
              width={200}
              height={200}
            />
            <div className="text-justify">
              <h2 className="text-2xl font-bold">03 - Construir</h2>
              <p>
                Desenvolvemos seu projeto com as melhores práticas e tecnologias
                atuais.
              </p>
            </div>
          </div>

          {/* Quadro 4 */}
          <div className="animate-bgPulse delay-900 flex w-80 flex-col rounded bg-gray-100 p-8">
            <div className="">
              <h2 className="text-2xl font-bold">04 - Lançar</h2>
              <p className="md:max-w-52">
                Garantimos uma entrega eficiente e segura, pronta para escalar.
              </p>
            </div>
            <Image src="/lancar.svg" alt="Discovery" width={300} height={200} />
          </div>
        </div>
      </div>
    </section>
  );
}
