import { KeycloakService } from "keycloak-angular";
import { environment } from "src/environments/environment";

export function keycloakInitializer(keycloakService: KeycloakService): () => Promise<any>
{
  return () => keycloakService.init
  (
    {
      config: environment.keycloak,
      initOptions:
      {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/assets/verify-sso.html'
      }
    }
  );
}