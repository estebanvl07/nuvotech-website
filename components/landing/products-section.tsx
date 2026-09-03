import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeroEyebrowBadge } from "@/components/landing/hero-eyebrow-badge";
import {
  ADMIN_REGISTER_URL,
  SCHEDULING_URL,
  SEEON_URL,
} from "@/lib/urls";
import {
  ArrowUpRight,
  Bot,
  MessageSquare,
  ShoppingBag,
  UtensilsCrossed,
  Workflow,
} from "lucide-react";

const seeonHighlights = [
  {
    icon: MessageSquare,
    title: "Canales unificados",
    description:
      "WhatsApp, Instagram, Messenger y más en un solo inbox comercial.",
  },
  {
    icon: Bot,
    title: "IA en cada etapa",
    description:
      "Automatiza respuestas, seguimiento y decisiones del Growth Framework.",
  },
  {
    icon: Workflow,
    title: "CRM + Marketing + Servicios",
    description:
      "De la atracción a la prestación de servicio, sin islas de información.",
  },
] as const;

export function ProductsSection() {
  return (
    <section
      id="productos"
      className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <HeroEyebrowBadge>Productos</HeroEyebrowBadge>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Software propio, enfocado en resultados
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nuestro producto principal es SeeOn. También impulsamos Mymeal, el
            POS pensado para restaurantes que necesitan velocidad y control en
            sala y cocina.
          </p>
        </div>

        {/* SeeOn — producto principal */}
        <article className="mt-12 overflow-hidden rounded-2xl border border-primary/25 bg-card shadow-[0_12px_40px_-16px_rgba(124,58,237,0.2)]">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo_seeon.png"
                  alt="SeeOn Solutions"
                  width={140}
                  height={56}
                  className="h-12 w-auto object-contain"
                />
                <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                  Producto estrella
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-foreground sm:text-3xl">
                SeeOn Solutions
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Plataforma de crecimiento con CRM, marketing multicanal, módulo
                de servicios en campo e inteligencia artificial. Diseñada para
                conectar preventa, operación y postventa en un solo flujo.
              </p>

              <ul className="mt-6 space-y-4">
                {seeonHighlights.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a href={SEEON_URL} target="_blank" rel="noopener noreferrer">
                    Abrir sitio de SeeOn
                    <ArrowUpRight className="ml-1 size-4" aria-hidden />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-lg border-border/50 hover:bg-secondary"
                >
                  <a
                    href={ADMIN_REGISTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Probar SeeOn
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative min-h-[240px] border-t border-border/40 bg-secondary/30 lg:min-h-full lg:border-t-0 lg:border-l">
              <picture>
                <source srcSet="/dashboard_seeon.avif" type="image/avif" />
                <img
                  src="/dashboard_seeon.png"
                  alt="Interfaz de SeeOn CRM"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </article>

        {/* Mymeal */}
        <article className="mt-6 rounded-2xl border border-border/50 bg-card p-6 sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15">
                  <UtensilsCrossed className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                    Mymeal
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    POS para restaurantes
                  </p>
                </div>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Sistema punto de venta pensado para la operación gastronómica:
                tomas de pedido ágiles, control de mesas, cocina y caja. Mymeal
                ayuda a restaurantes a reducir errores, acelerar el servicio y
                tener visibilidad del día a día en un solo lugar.
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {[
                  "Pedidos y mesas",
                  "Caja y reportes",
                  "Operación en sala",
                  "Hecho para restaurantes",
                ].map((tag) => (
                  <li
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
                  >
                    <ShoppingBag className="size-3.5" aria-hidden />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <Button
              asChild
              variant="outline"
              className="w-full rounded-lg border-border/50 hover:bg-secondary md:w-auto"
            >
              <a href={SCHEDULING_URL} target="_blank" rel="noopener noreferrer">
                Consultar por Mymeal
              </a>
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
}
