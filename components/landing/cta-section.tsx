import { Button } from "@/components/ui/button";
import { SCHEDULING_URL, SEEON_URL } from "@/lib/urls";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function CTASection() {
  return (
    <section id="contacto" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-primary/20 blur-3xl" />

          <div className="rounded-2xl border border-border/50 bg-card p-8 sm:p-12">
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
              ¿Listo para conocer SeeOn o Mymeal?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Agenda una demostración con el equipo de Nuvotech o entra
              directamente al sitio de SeeOn Solutions, nuestro producto
              principal de crecimiento empresarial.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="rounded-lg bg-primary px-8 py-6 text-base text-primary-foreground hover:bg-primary/90"
              >
                <a href={SEEON_URL} target="_blank" rel="noopener noreferrer">
                  Ir a SeeOn
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-lg border-border/50 px-8 py-6 text-base text-foreground hover:bg-secondary"
              >
                <a
                  href={SCHEDULING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar demostración
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Nuvotech Colombia · 11 años · CEO Armando Silvera
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
