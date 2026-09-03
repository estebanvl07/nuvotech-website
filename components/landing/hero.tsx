import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeroEyebrowBadge } from "@/components/landing/hero-eyebrow-badge";
import { HeroSpotlight } from "@/components/landing/hero-spotlight";
import { SCHEDULING_URL, SEEON_URL } from "@/lib/urls";
import { ArrowUpRight, CalendarClock } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate scroll-mt-20 overflow-visible pb-10 pt-20 sm:pb-12 sm:pt-24 md:pb-16 md:pt-32 lg:scroll-mt-24 lg:pt-36"
    >
      <HeroSpotlight />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex justify-center">
            <HeroEyebrowBadge>11 años impulsando empresas</HeroEyebrowBadge>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:mt-6 sm:text-5xl lg:text-6xl">
            Nuvotech Colombia
          </h1>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
            Desarrollamos software que conecta la información entre áreas y
            acelera resultados. Creadores de{" "}
            <span className="font-semibold text-foreground">SeeOn Solutions</span>{" "}
            y{" "}
            <span className="font-semibold text-foreground">Mymeal</span>, con
            foco en crecimiento operativo y experiencia de cliente.
          </p>

          <div className="mt-5 flex w-full flex-col justify-center gap-3 min-[400px]:flex-row min-[400px]:flex-wrap sm:mt-8">
            <Button
              asChild
              className="w-full rounded-lg bg-primary px-6 py-4 text-base text-primary-foreground hover:bg-primary/90 min-[400px]:w-auto sm:px-8 sm:py-5"
            >
              <a href={SEEON_URL} target="_blank" rel="noopener noreferrer">
                <ArrowUpRight className="size-5 shrink-0" aria-hidden />
                Abrir SeeOn
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full rounded-lg border-border/50 px-6 py-4 text-base text-foreground hover:bg-secondary min-[400px]:w-auto sm:px-8 sm:py-5"
            >
              <a href={SCHEDULING_URL} target="_blank" rel="noopener noreferrer">
                <CalendarClock className="size-5 shrink-0" aria-hidden />
                Solicitar demostración
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 w-full sm:mt-10">
          <div className="fade-bottom-sm sm:fade-bottom mx-auto w-full max-w-[min(100%,72rem)] overflow-hidden rounded-lg border border-border bg-card shadow-[0_28px_90px_-18px_rgba(0,0,0,0.18),0_0_48px_-6px_rgba(124,58,237,0.12)] ring-1 ring-black/5 sm:rounded-xl">
            <div className="flex h-6 shrink-0 items-center gap-3 border-b border-border bg-[#ececf0] px-4 sm:px-2">
              <div
                className="flex shrink-0 items-center gap-2 sm:gap-1"
                aria-hidden
              >
                <span className="size-1 rounded-full bg-[#ff5f57] shadow-[inset_0_-1px_0_rgba(0,0,0,0.25)] ring-1 ring-black/15 sm:size-2.5" />
                <span className="size-1 rounded-full bg-[#febc2e] shadow-[inset_0_-1px_0_rgba(0,0,0,0.2)] ring-1 ring-black/12 sm:size-2.5" />
                <span className="size-1 rounded-full bg-[#28c840] shadow-[inset_0_-1px_0_rgba(0,0,0,0.2)] ring-1 ring-black/12 sm:size-2.5" />
              </div>
              <div className="flex min-w-0 flex-1 justify-center">
                <span className="truncate px-2 text-xs font-medium text-muted-foreground sm:text-[10px]">
                  SeeOn — producto estrella de Nuvotech
                </span>
              </div>
              <div className="w-14 shrink-0 sm:w-[60px]" aria-hidden />
            </div>
            <div className="relative overflow-hidden bg-white">
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/dashboard_seeon-mobile.avif"
                  type="image/avif"
                />
                <source srcSet="/dashboard_seeon.avif" type="image/avif" />
                <img
                  src="/dashboard_seeon.avif"
                  width={1911}
                  height={929}
                  alt="Dashboard de SeeOn Solutions"
                  className="h-auto max-h-[min(42vh,220px)] w-full object-cover object-top shadow-[0_12px_40px_-8px_rgba(0,0,0,0.45)] sm:max-h-[min(50vh,380px)] md:max-h-[min(58vh,520px)] lg:max-h-[650px]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1152px) 90vw, 1152px"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Image
              src="/logo_seeon.png"
              alt="SeeOn Solutions"
              width={120}
              height={48}
              className="h-10 w-auto object-contain opacity-90"
            />
            <span className="text-sm text-muted-foreground">
              Desarrollado por Nuvotech
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
