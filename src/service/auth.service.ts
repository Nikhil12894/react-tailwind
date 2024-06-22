import { useAuthByPass } from "@/hooks/auth-bypass";
import useAuthStore from "@/hooks/use-login-store";
import { AuthClientTokens } from "@react-keycloak/core/lib/types";
import { KeycloakProfile } from "keycloak-js";
import authClient from "./keycloak";

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

const onKeycloakTokens = (tokens: AuthClientTokens) => {
  if (authClient.authenticated) {
    authClient.loadUserProfile().then((user) => {
      // console.log(user, tokens);
      AuthService.setAuthState(true, user, tokens.token);
    });
  }
};

export { AuthService, onKeycloakTokens };
