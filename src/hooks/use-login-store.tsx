import { KeycloakProfile } from "keycloak-js";
import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  user: KeycloakProfile | null;
  token: string | null;
  setAuthState: (
    isAuthenticated: boolean,
    user: KeycloakProfile | null,
    token: string | null
  ) => void;
  clearAuthState: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  token: null,
  setAuthState: (isAuthenticated, user, token) =>
    set({ isAuthenticated, user, token }),
  clearAuthState: () =>
    set({ isAuthenticated: false, user: null, token: null }),
}));

export default useAuthStore;
