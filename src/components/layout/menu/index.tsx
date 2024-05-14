import { ElementType } from "react";
import { Link } from "react-router-dom";

export const Menu = ({ ...props }: { menuItems: MenuItem[] }) => {
  return (
    <div className="overflow-hidden hover:overflow-y-auto max-h-[50vh]">
      <ul className="mt-8 space-y-2 tracking-wide">
        {props.menuItems.map((item: MenuItem) => (
          <li key={item.name}>
            <Link
              to={item.link}
              aria-label="dashboard"
              className="relative flex items-center space-x-4 rounded-xl px-4 py-3 hover:text-white hover:bg-gradient-to-r from-sky-400 to-cyan-100"
            >
              {item.icon && <item.icon />}
              <span className="-mr-1 font-medium">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export interface MenuItem {
  name: string;
  link: string;
  icon?: string | ElementType;
  iconClass?: string;
  children?: MenuItem[];
}
