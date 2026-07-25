import Image from "next/image";
import type { GalleryImage } from "@/data/galleries";

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {images.map((img, i) => (
        <div
          key={img.src}
          className="group relative aspect-4/3 overflow-hidden border-2 border-ink bg-black/5"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(min-width: 1024px) 23vw, (min-width: 640px) 31vw, 46vw"
            loading={i < 4 ? "eager" : "lazy"}
            className="object-cover grayscale-[0.2] transition duration-300 group-hover:scale-105 group-hover:grayscale-0"
          />
        </div>
      ))}
    </div>
  );
}
