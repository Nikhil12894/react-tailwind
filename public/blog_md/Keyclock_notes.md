### How To Setup Keycloak local system using docker.

- Use Below to run the container

```sh
docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:25.0.1 start-dev
```

you can modify the above command

- _-p 9090:8080_ where 9090 is your system port and 8080 is the container port on which the contain will listen.
- can also change -e **KEYCLOAK_ADMIN=admin** -e **KEYCLOAK_ADMIN_PASSWORD=admin** to your desired value.
