import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMemo } from "react";
const data = [
  {
    src: "images/12Factor.png",
    alt: "12Factor",
    link: "https://kodekloud.com/certificate-verification/2D08936F7DDD-2DFAD5F321E1-2D0674CB76B7/",
  },
  {
    src: "images/angular_base.png",
    alt: "angular_base",
    link: "https://www.hackerrank.com/certificates/f5f0bd7a8002",
  },
  {
    src: "images/angular_inter.png",
    alt: "angular_inter",
    link: "https://www.hackerrank.com/certificates/51141a6df0d2",
  },
  {
    src: "images/git.png",
    alt: "git",
    link: "https://kodekloud.com/certificate-verification/2D08936F7DDD-2D0674F87D4D-2D0674CB76B7/",
  },
  {
    src: "images/go.png",
    alt: "go",
    link: "https://www.hackerrank.com/certificates/e0c8eadd5781",
  },
  {
    src: "images/java_bas.png",
    alt: "java",
    link: "https://www.hackerrank.com/certificates/33f17a359987",
  },
  {
    src: "images/kubernetes.png",
    alt: "kubernetes",
    link: "https://kodekloud.com/certificate-verification/2D08936F7DDD-2D067507BE60-2D0674CB76B7/",
  },
  {
    src: "images/lens.png",
    alt: "lens",
    link: "https://kodekloud.com/certificate-verification/2D08936F7DDD-2D0AFF62274D-2D0674CB76B7/",
  },
];
export function CVExtCertification() {
  const extCertificate = useMemo(() => data, []);
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="lg:w-full max-w-5xl w-[70%] m-auto"
    >
      <CarouselContent>
        {extCertificate.map((item, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 p-0 m-0"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center">
                  <a href={item.link} target="_blank" className="p-0 m-0">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full"
                    />
                  </a>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
