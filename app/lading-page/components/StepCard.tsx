// components/StepCard.tsx
import Image from "next/image";

interface StepCardProps {
  stepNumber: string;
  title: string;
  description: string;
  imageSrc: string;
}

export default function StepCard({
  stepNumber,
  title,
  description,
  imageSrc,
}: StepCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <Image
        src={imageSrc}
        alt={title}
        width={200}
        height={200}
        className="mb-4"
      />
      <h2 className="text-xl font-bold md:text-2xl">
        {`${stepNumber} ${title}`}
      </h2>
      <p className="text-sm opacity-70 md:w-2/4">{description}</p>
    </div>
  );
}
