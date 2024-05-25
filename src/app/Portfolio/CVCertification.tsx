import { CalendarDays, MapPin } from "lucide-react";

interface CVCertificationProps {
  title: string;
  certifications: {
    name: string;
    compony: string;
    dates: string;
    location: string;
    points: string[];
  }[];
}
export const CVCertification = (certifications: CVCertificationProps) => {
  return (
    <div>
      <h2 className="text-lg lg:text-2xl text-teal-600 mt-4">
        {certifications.title}
      </h2>
      <hr className="w-full h-[.3rem] bg-teal-600  mb-2" />
      {certifications.certifications.map((cert, $index) => (
        <div key={$index}>
          <h3 className="text-xs lg:text-lg">{cert.name}</h3>
          <h4 className="text-xs lg:text-lg text-teal-600">{cert.compony}</h4>
          <div className="flex justify-between text-muted-foreground">
            <span className="flex text-xs lg:text-lg items-center">
              <CalendarDays className="h-4 w-4 mr-2" />
              {cert.dates}
            </span>
            <span className="flex text-xs lg:text-lg items-center">
              <MapPin className="h-4 w-4 mr-2" />
              {cert.location}
            </span>
          </div>
          <div>
            <ul className="text-xs lg:text-lg text-wrap list-disc text-muted-foreground ml-4">
              {cert.points.map((point, $index) => (
                <li key={$index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
