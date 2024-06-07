import {
  ArrowDownToLine,
  AtSign,
  Github,
  Linkedin,
  MapPin,
  Phone,
} from "lucide-react";
export interface CVHeaderProps {
  header: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    gitHub: {
      href: string;
      displayName: string;
    };
    linkedin: {
      href: string;
      displayName: string;
    };
    imageUrl: string;
  };
}
export const CVHeader = ({ ...headerData }: CVHeaderProps) => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-start-1 col-span-4 lg:col-span-5">
        <h1
          className="text-2xl lg:text-6xl font-bold flex items-center"
          title="To download click on download icon"
        >
          {headerData.header.name}
          <a href="./Nalin_CV.pdf">
            <ArrowDownToLine className="h-6 w-6 ml-2 text-muted-foreground hover:text-black/50 dark:hover:text-white/50 cursor-pointer" />
          </a>
        </h1>
        <h2 className="text-sm lg:text-2xl text-muted-foreground text-teal-600">
          {headerData.header.title}
        </h2>
        <ul className="flex flex-wrap text-xs lg:text-lg">
          <li className="mr-4 flex items-center justify-center cursor-pointer ">
            <AtSign className="h-4 w-4 mr-2 text-teal-600" />
            <a
              href={`mailto: ${headerData.header.email}`}
              className="hover:text-black/50 dark:hover:text-white/50"
            >
              {headerData.header.email}
            </a>
          </li>
          <li className="mr-4 flex items-center justify-center cursor-pointer ">
            <Phone className="h-4 w-4 mr-2 text-teal-600" />
            <span className="hover:text-black/50 dark:hover:text-white/50">
              {headerData.header.phone}
            </span>
          </li>
          <li className="mr-4 flex items-center justify-center cursor-pointer">
            <MapPin className="h-4 w-4 mr-2 text-teal-600" />
            <span className="hover:text-black/50 dark:hover:text-white/50">
              {headerData.header.location}
            </span>
          </li>
        </ul>
        <h3 className="text-xs lg:text-lg text-muted-foreground flex items-center">
          <Linkedin className="h-4 w-4 mr-2 text-teal-600" />
          <a
            href={headerData.header.linkedin.href}
            className="hover:text-black/50 dark:hover:text-white/50"
          >
            {headerData.header.linkedin.displayName}
          </a>
        </h3>
        <h3 className="text-xs lg:text-lg text-muted-foreground flex items-center">
          <Github className="h-4 w-4 mr-2 text-teal-600" />
          <a
            href={headerData.header.gitHub.href}
            className="hover:text-black/50 dark:hover:text-white/50"
          >
            {headerData.header.gitHub.displayName}
          </a>
        </h3>
      </div>
      <div className="flex col-end-8 lg:col-end-7 col-span-2 lg:col-span-1">
        <div className="items-center flex pt-6 pb-6 float-end">
          <img
            src={headerData.header.imageUrl}
            alt="alt img"
            className="rounded-full w-20 h-20 lg:w-40 lg:h-40"
          />
        </div>
      </div>
    </div>
  );
};
