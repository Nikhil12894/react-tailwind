import Keycloak from "keycloak-js";

interface KeycloakConfig {
  url: string;
  realm: string;
  clientId: string;
}

const keycloakConfig: KeycloakConfig = {
  url: "https://keycloak.learnwithnk.in/",
  realm: "NK",
  clientId: "nk_client",
};

const authClient = new Keycloak(keycloakConfig);

export default authClient;
export { keycloakConfig };
