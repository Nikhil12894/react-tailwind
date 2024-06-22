import Keycloak from "keycloak-js";

const authClient = new Keycloak({
  url: "http://localhost:8080/",
  realm: "myrelm",
  clientId: "react-app",
});

export default authClient;
