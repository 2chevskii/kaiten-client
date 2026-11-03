export interface ApiReferenceSidebarItem {
  text: string;
  link: string;
}

export function generateApiReference(options?: {check?: boolean}): Promise<{
  en: {rest: ApiReferenceSidebarItem[]; scim: ApiReferenceSidebarItem[]};
  ru: {rest: ApiReferenceSidebarItem[]; scim: ApiReferenceSidebarItem[]};
}>;
