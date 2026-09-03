import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";
import { siteConfig } from "@/lib/site";

const SectionReveal = dynamic(() =>
  import("@/components/landing/section-reveal").then((mod) => mod.SectionReveal),
);

const AboutSection = dynamic(() =>
  import("@/components/landing/company-section").then(
    (mod) => mod.AboutSection,
  ),
);

const ProductsSection = dynamic(() =>
  import("@/components/landing/products-section").then(
    (mod) => mod.ProductsSection,
  ),
);

const CeoSection = dynamic(() =>
  import("@/components/landing/ceo-section").then((mod) => mod.CeoSection),
);

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        alt: siteConfig.ogImageAlt,
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido-principal">
        <Hero />
        <SectionReveal direction="up" delay={0.05}>
          <AboutSection />
        </SectionReveal>
        <SectionReveal direction="up" delay={0.05}>
          <ProductsSection />
        </SectionReveal>
        <SectionReveal direction="fade" delay={0.08}>
          <CeoSection />
        </SectionReveal>
        <SectionReveal direction="up" delay={0.05}>
          <CTASection />
        </SectionReveal>
      </main>
      <Footer />
    </>
  );
}
