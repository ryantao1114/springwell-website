import Image from "next/image";
import { site } from "@/content/site";

type ProviderImageProps = {
  className?: string;
};

export function ProviderImage({ className = "" }: ProviderImageProps) {
  return (
    <div
      className={`relative min-h-80 overflow-hidden rounded-md border border-forestDeep/10 bg-sage/20 shadow-soft md:min-h-96 ${className}`}
    >
      <Image
        alt="Springwell provider image"
        className="object-cover"
        fill
        sizes="(min-width: 768px) 45vw, 100vw"
        src={site.provider.headshotImage}
      />
    </div>
  );
}
