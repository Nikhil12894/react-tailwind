import { ElementType } from "react";

export interface MenuItem {
  name: string;
  link: string;
  icon?: string | ElementType;
  iconClass?: string;
  children?: MenuItem[];
}
