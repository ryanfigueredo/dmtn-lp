import Image from "next/image";

export default function MetodologiaSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "Nessa primeira etapa, definiremos quais são as prioridades do seu negócio. Dores, dificuldades, e problemas serão mapeados e novas soluções serão levantadas.",
      image: "/planejar.svg",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Usamos várias técnicas avançadas de UX/UI para deixar sua solução agradável aos usuários, aumentando, por consequência, o LTV do seu negócio.",
      image: "/explorar.svg",
    },
    {
      number: "03",
      title: "Develop",
      description:
        "Nós temos um time de especialistas em desenvolvimento que irão tirar qualquer ideia sua do papel, independente da dificuldade aparente.",
      image: "/construir.svg",
    },
    {
      number: "04",
      title: "Deploy",
      description:
        "Nessa última etapa, publicaremos a sua solução para o mundo. É a hora de vender e vender muito.",
      image: "/lancar.svg",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center space-y-12 pt-24">
      {/* Título e descrição */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold">Metodologia DMTN</h1>
        <p className="mx-auto mt-4 max-w-xl font-medium text-gray-600">
          Criamos uma abordagem própria para impulsionar e transformar negócios,
          descomplicando desafios complexos por meio da tecnologia. Conheça a
          Metodologia DMTN:
        </p>
      </div>

      {/* Etapas com setas */}
      <div className="space-y-16">
        {/* Etapa 1 */}
        <div className="flex flex-col items-center space-y-6">
          <Image src="/planejar.svg" alt="Discovery" width={200} height={200} />
          <div className="text-center">
            <h2 className="text-xl font-bold">01 Discovery</h2>
            <p className="text-gray-600">
              Nessa primeira etapa, definiremos quais são as prioridades do seu
              negócio. Dores, dificuldades, e problemas serão mapeados e novas
              soluções serão levantadas.
            </p>
          </div>
          <Image
            src="/arrow.png"
            alt="Seta para próxima etapa"
            width={100}
            height={50}
            className="rotate-90 md:rotate-0"
          />
        </div>

        {/* Etapa 2 */}
        <div className="flex flex-col items-center space-y-6">
          <Image src="/explorar.svg" alt="Design" width={200} height={200} />
          <div className="text-center">
            <h2 className="text-xl font-bold">02 Design</h2>
            <p className="text-gray-600">
              Usamos várias técnicas avançadas de UX/UI para deixar sua solução
              agradável aos usuários, aumentando, por consequência, o LTV do seu
              negócio.
            </p>
          </div>
          <Image
            src="/arrow.png"
            alt="Seta para próxima etapa"
            width={100}
            height={50}
            className="rotate-90 md:rotate-0"
          />
        </div>

        {/* Etapa 3 */}
        <div className="flex flex-col items-center space-y-6">
          <Image src="/construir.svg" alt="Develop" width={200} height={200} />
          <div className="text-center">
            <h2 className="text-xl font-bold">03 Develop</h2>
            <p className="text-gray-600">
              Nós temos um time de especialistas em desenvolvimento que irão
              tirar qualquer ideia sua do papel, independente da dificuldade
              aparente.
            </p>
          </div>
          <Image
            src="/arrow.png"
            alt="Seta para próxima etapa"
            width={100}
            height={50}
            className="rotate-90 md:rotate-0"
          />
        </div>

        {/* Etapa 4 */}
        <div className="flex flex-col items-center space-y-6">
          <Image src="/lancar.svg" alt="Deploy" width={200} height={200} />
          <div className="text-center">
            <h2 className="text-xl font-bold">04 Deploy</h2>
            <p className="text-gray-600">
              Nessa última etapa, publicaremos a sua solução para o mundo. É a
              hora de vender e vender muito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
