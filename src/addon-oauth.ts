import { HttpTransport, pathSegment } from "./http.js";
import type { ClientOptions, OperationOptions, TokenProvider } from "./http.js";

export interface AddonOAuthOptions extends Omit<ClientOptions, "token"> {
  addonSecret: TokenProvider;
}

export interface AddonTokenKey extends OperationOptions {
  addon_uid: string;
  user_id: number;
  company_id: number;
}

export type AddonTokenResponse =
  | {
      has_token: true;
      access_token: string;
      expires_at: string;
      domain?: string;
    }
  | { has_token: false; domain?: string };

/** Server-side Kaiten addon OAuth token endpoints. */
export class AddonOAuthClient {
  private readonly transport: HttpTransport;

  constructor(options: AddonOAuthOptions) {
    this.transport = new HttpTransport(
      {
        origin: options.origin,
        token: options.addonSecret,
        fetch: options.fetch,
      },
      "/api/v1",
    );
  }

  /** @see https://developers.kaiten.ru/addons/api-access */
  getToken(key: AddonTokenKey): Promise<AddonTokenResponse> {
    return this.transport.request({
      method: "GET",
      path: this.tokenPath(key),
      signal: key.signal,
    });
  }

  /** @see https://developers.kaiten.ru/addons/api-access */
  refreshToken(key: AddonTokenKey): Promise<AddonTokenResponse> {
    return this.transport.request({
      method: "POST",
      path: `${this.tokenPath(key)}/refresh`,
      signal: key.signal,
    });
  }

  private tokenPath(key: AddonTokenKey): string {
    return `/addon-oauth/${pathSegment(key.addon_uid)}/tokens/${pathSegment(key.user_id)}/${pathSegment(key.company_id)}`;
  }
}
