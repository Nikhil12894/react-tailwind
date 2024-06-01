import { MenuItem } from "./types/menu";

const headerMenus: MenuItem[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "App",
    link: "/app",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
];
const signUpAndLoginMenus: MenuItem[] = [
  {
    name: "Login",
    link: "/login",
  },
  {
    name: "Sign Up",
    link: "/signUp",
  },
];

export { headerMenus, signUpAndLoginMenus };
