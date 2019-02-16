import { InjectionToken } from '@angular/core';

export class OauthStore {
    // userData: string;
    username: string;
    accessToken: string;
    authorizationCode: string;
}

export class CredentialsApp {
    client_id: string;
    client_secret: string;
    redirect_uri: string;
}

export const TOKEN_OAUTH_STORE = new InjectionToken<OauthStore>('Upeu Oauth Store');
