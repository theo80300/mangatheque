export const environment = {
    production: true,
    envName: 'local',
    keycloak: {
      // Url of the Identity Provider
      issuer: 'http://localhost:8080',
  
      // Realm
      realm: 'angular',
  
      // The SPA's id. 
      // The SPA is registerd with this id at the auth-serverß
      clientId: 'admin-cli',
    }
  };