/** Request Kaiten sends to a configured user metadata service. */
export interface UserMetadataRequest {
  email: string;
  token?: string | null;
}

export type UserMetadataPropertyValue =
  string | number | null | Record<string, unknown>;

/** Response fields Kaiten accepts from the metadata service. */
export type UserMetadataResponse = {
  description?: string | number;
} & Partial<Record<`id_${number}`, UserMetadataPropertyValue>>;

export type UserMetadataHandler = (
  request: UserMetadataRequest,
) => UserMetadataResponse | Promise<UserMetadataResponse>;
