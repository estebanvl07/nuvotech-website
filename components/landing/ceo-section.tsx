import { HeroEyebrowBadge } from "@/components/landing/hero-eyebrow-badge";
import { Button } from "@/components/ui/button";
import { SCHEDULING_URL, WHATSAPP_URL } from "@/lib/urls";
import { Quote } from "lucide-react";

export function CeoSection() {
  return (
    <section
      id="ceo"
      className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <div className="flex justify-center">
            <HeroEyebrowBadge>Liderazgo</HeroEyebrowBadge>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Armando Silvera
          </h2>
          <p className="mt-2 text-sm font-medium text-primary sm:text-base">
            CEO · Nuvotech Colombia &amp; Nuvotech USA
          </p>
        </div>

        <blockquote className="relative mt-10 rounded-2xl border border-border/50 bg-card p-6 sm:p-10">
          <Quote
            className="absolute top-6 left-6 size-8 text-primary/30 sm:size-10"
            aria-hidden
          />
          <p className="relative z-10 pt-8 text-base leading-relaxed text-muted-foreground sm:pt-6 sm:text-lg">
            Creemos que las empresas pierden valor cuando la información vive en
            silos. Por eso construimos SeeOn: para que comercial, operaciones y
            servicios trabajen sobre la misma realidad, más rápido y con mejor
            criterio. Tras 11 años acompañando organizaciones en Colombia y USA,
            seguimos enfocados en productos que liberan tiempo y generan
            crecimiento medible.
          </p>
          <footer className="mt-6 border-t border-border/40 pt-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="font-semibold text-foreground">Armando Silvera</p>
                <p className="text-sm text-muted-foreground">
                  Fundador y CEO de Nuvotech
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  asChild
                  size="sm"
                  className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a
                    href={SCHEDULING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar con el equipo
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="rounded-lg border-border/50 hover:bg-secondary"
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
