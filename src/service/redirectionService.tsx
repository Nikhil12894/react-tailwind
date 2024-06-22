import { useAuthByPass } from "@/hooks/auth-bypass";
import { AuthService } from "./auth.service";
import authClient from "./keycloak";
import { Navigate } from "react-router-dom";

function HandleLogout({ rout = "/home" }: { rout?: string }) {
  if (!useAuthByPass()) {
    authClient.logout().then(() => {
      AuthService.clearAuthState();
    });
  }
  console.log(rout);
  return <Navigate to={rout} replace={true} />;
}

export { HandleLogout };
