export const environment =
{
  production: true,
  version: '1.0.0',
  api: 'https://hmg.gentile.dev/gentile-api',
  keycloak:
  {
    url: 'http://localhost:8080',
    realm: 'SpringBootKeycloak',
    clientId: 'login-app',
  }
};