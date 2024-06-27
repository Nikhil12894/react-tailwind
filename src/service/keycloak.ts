import Keycloak from "keycloak-js";

interface KeycloakConfig {
  url: string;
  realm: string;
  clientId: string;
}

const keycloakConfig: KeycloakConfig = {
  url: "http://localhost:8080/",
  realm: "myrelm",
  clientId: "react-app",
};

const authClient = new Keycloak(keycloakConfig);

export default authClient;
export { keycloakConfig };
