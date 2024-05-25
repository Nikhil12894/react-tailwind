import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

interface BreadcrumbProps {
  label: string;
  path: string;
}
const generateBreadcrumbs = (pathname: string): BreadcrumbProps[] => {
  const pathnames = pathname.split("/").filter((x) => x);
  return pathnames.map((value, index) => {
    const path = `/${pathnames.slice(0, index + 1).join("/")}`;
    return { label: value, path };
  });
};
export const BreadcrumbComponent = () => {
  const location = useLocation();
  const [paths, setPaths] = useState<BreadcrumbProps[]>([]);
  useEffect(() => {
    setPaths(generateBreadcrumbs(location.pathname));
  }, [location]);
  return (
    <Breadcrumb className="text-">
      <BreadcrumbList className="flex items-center">
        {paths.map((path, index) => (
          <span key={index} className="flex items-center justify-center">
            {index > 0 && (
              <BreadcrumbSeparator className="text-muted-foreground p-0 m-0">
                <Slash className="h-1 w-1 p-0 m-0" />
              </BreadcrumbSeparator>
            )}
            <BreadcrumbItem>
              <BreadcrumbLink
                href={path.path}
                className={`text-muted-foreground text-xs ${
                  index === paths.length - 1 && "text-foreground"
                }`}
              >
                {path.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </span>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
