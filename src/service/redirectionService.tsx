import { useAuthByPass } from "@/hooks/auth-bypass";
import { useNavigate } from "react-router-dom";
import { AuthService } from "./auth.service";
import authClient from "./keycloak";

const handleLogout = ({ rout = "/home" }: { rout?: string }): void => {
  const navigate = useNavigate();
  if (!useAuthByPass()) {
    console.log(rout);
    authClient.logout().then(() => {
      AuthService.clearAuthState();
      navigate(rout);
    });
  }
};

export { handleLogout };
