import { KeycloakService } from 'keycloak-angular';
import { environment } from './environment';
 
export function initializer(keycloak: KeycloakService) {
    return async () =>
            await keycloak.init({
                config: {
                    url: environment.keycloak.issuer,
                    realm: environment.keycloak.realm,
                    clientId: environment.keycloak.clientId
                },
              loadUserProfileAtStartUp: false,
              initOptions: {
                onLoad: 'login-required',
                silentCheckSsoRedirectUri:
                  window.location.origin + 'assets/silent-sso.html'
              },
              shouldAddToken: (request) => {
                const { method, url } = request;
            
                const acceptablePaths = ['http://localhost:8090','/api'];
                const isAcceptablePathMatch = acceptablePaths.some((path) => url.includes(path));
            
                return (isAcceptablePathMatch);
              },
              enableBearerInterceptor: true,
              bearerPrefix: 'Bearer',
              bearerExcludedUrls: ["https://graphql.anilist.co"]
            });
      };


