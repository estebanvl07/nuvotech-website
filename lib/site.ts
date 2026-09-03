/** Configuración central de marca y SEO (usar NEXT_PUBLIC_SITE_URL en producción). */
export const siteConfig = {
  name: "Nuvotech Colombia",
  shortName: "Nuvotech",
  title: "Nuvotech Colombia | Tecnología que conecta tu operación",
  description:
    "11 años desarrollando software empresarial. Creadores de SeeOn Solutions y Mymeal POS. Liderados por Armando Silvera.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nuvotech.com.co",
  locale: "es",
  ogImage: "/nuvotech-colombia.jpg",
  ogImageAlt: "Nuvotech Colombia — tecnología empresarial",
  keywords: [
    "Nuvotech Colombia",
    "SeeOn Solutions",
    "Mymeal",
    "POS restaurantes",
    "CRM",
    "software empresarial",
    "Armando Silvera",
  ],
} as const;

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}
