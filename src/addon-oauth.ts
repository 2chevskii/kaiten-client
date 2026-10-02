import { HttpTransport, pathSegment } from "./http.ts";
import type { ClientOptions, OperationOptions, TokenProvider } from "./http.ts";

export interface AddonOAuthOptions extends Omit<ClientOptions, "token"> {
  addonSecret: TokenProvider;
}

export type AddonTokenKey = [
  addonUid: string,
  userId: number,
  companyId: number,
  options?: OperationOptions,
];

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
  getToken(
    addonUid: string,
    userId: number,
    companyId: number,
    options?: OperationOptions,
  ): Promise<AddonTokenResponse> {
    return this.transport.request({
      method: "GET",
      path: this.tokenPath(addonUid, userId, companyId),
      signal: options?.signal,
    });
  }

  /** @see https://developers.kaiten.ru/addons/api-access */
  refreshToken(
    addonUid: string,
    userId: number,
    companyId: number,
    options?: OperationOptions,
  ): Promise<AddonTokenResponse> {
    return this.transport.request({
      method: "POST",
      path: `${this.tokenPath(addonUid, userId, companyId)}/refresh`,
      signal: options?.signal,
    });
  }

  private tokenPath(
    addonUid: string,
    userId: number,
    companyId: number,
  ): string {
    return `/addon-oauth/${pathSegment(addonUid)}/tokens/${pathSegment(userId)}/${pathSegment(companyId)}`;
  }
}
