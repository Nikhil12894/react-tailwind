import useAuthStore from "@/hooks/use-login-store";
import authClient from "./keycloak";
import { KeycloakProfile } from "keycloak-js";
import { AuthClientTokens } from "@react-keycloak/core/lib/types";
import { useAuthByPass } from "@/hooks/auth-bypass";

class AuthService {
  static setAuthState = (
    isAuthenticated: boolean,
    user: KeycloakProfile | null,
    token: string | undefined
  ): void => {
    useAuthStore.setState({ isAuthenticated, user, token });
  };

  static clearAuthState = (): void => {
    useAuthStore.setState({ isAuthenticated: false, user: null, token: null });
  };

  static handleLogin = (): void => {
    if (!useAuthByPass()) authClient.login();
  };

  static handleReg = (): void => {
    if (!useAuthByPass()) authClient.register();
  };

  static handleLogout = (): void => {
    if (!useAuthByPass()) {
      authClient.logout();
      this.clearAuthState();
    }
  };
}

const onKeycloakEvent = (event: string, error: any) => {
  console.log("onKeycloakEvent", event, error);
};

const onKeycloakTokens = (tokens: AuthClientTokens) => {
  authClient.loadUserProfile().then((user) => {
    console.log(user, tokens);
    AuthService.setAuthState(true, user, tokens.token);
  });
};

export { AuthService, onKeycloakEvent, onKeycloakTokens };
