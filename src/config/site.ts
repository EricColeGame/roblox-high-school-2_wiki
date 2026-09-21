export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Roblox High School 2 Wiki",
  shortName: "Roblox High School 2",
  logoText: "RHS2",
  tagline: "Codes, Guides & Roleplay",
  description: "Roblox High School 2 Wiki provides codes, guides, roleplay tips, updates and gameplay resources to help players explore the virtual school world.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://roblox-high-school-2.wiki",
 supportEmail: "support@roblox-high-school-2.wiki",
  gameUrl: "https://www.roblox.com/games/2098516465/Roblox-High-School-2",
 heroVideoId: "0Tz1yKZ-6BI",
 social: {
   discord: "https://discord.gg/roblox",
   youtube: "https://www.youtube.com/@roblox",
 },
  locales: ["en", "es", "pt", "fr"],
 defaultLocale: "en",
};
