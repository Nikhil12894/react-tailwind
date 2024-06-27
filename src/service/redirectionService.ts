import { useAuthByPass } from "@/hooks/auth-bypass";
import { AuthService } from "./auth.service";
import authClient from "./keycloak";

function HandleLogout(): void {
  if (!useAuthByPass()) {
    authClient.logout();
    AuthService.clearAuthState();
  }
}

export { HandleLogout };
