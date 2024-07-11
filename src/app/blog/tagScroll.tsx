import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function CarouselSpacing() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="mx-10">
        {tagList.map((tag, index) => (
          <CarouselItem
            key={index}
            className="basis-[30%] md:basis-[15%] lg:basis-[10%] p-0"
          >
            <span
              className={cn([
                "text-xs font-light text-nowrap",
                tag == "For You" ? "underline" : "opacity-50 cursor-pointer",
              ])}
            >
              {tag}
            </span>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const tagList: string[] = [
  "For You",
  "Docker",
  "Java",
  "Go",
  "React",
  "HTML",
  "CSS",
  "JavaScript",
  "SQL",
  "Postgres",
  "Spring-Boot",
  "Spring",
  "Maven",
  "CI/CD",
  "Kubernetes",
  "Vault",
  "Keycloak",
  "Api",
  "Angular",
  "UX",
  "SCSS",
  "TypeScript",
  "Programming",
  "Web Dev",
];
