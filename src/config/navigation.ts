export interface NavigationItem {
  key: string;
  path: string;
  icon?: any;
  isContentType?: boolean;
}

export const NAVIGATION_CONFIG = [];

export const CONTENT_TYPES = (NAVIGATION_CONFIG as readonly NavigationItem[])
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, "")) as string[];
