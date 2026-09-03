import { NumberTicker } from "@/components/ui/number-ticker";
import { HeroEyebrowBadge } from "@/components/landing/hero-eyebrow-badge";

const stats = [
  { value: 11, suffix: "+", label: "Años de trayectoria" },
  { value: 2, suffix: "", label: "Países (Colombia y USA)" },
  { value: 50, suffix: "+", label: "Empresas acompañadas" },
  { value: 2, suffix: "", label: "Productos propios" },
] as const;

export function AboutSection() {
  return (
    <section
      id="empresa"
      className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <HeroEyebrowBadge>Nuestra empresa</HeroEyebrowBadge>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            11 años conectando información y resultados
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Desde NUVOTECH COLOMBIA S.A.S. y NUVOTECH USA LLC desarrollamos
            soluciones para manufactura y servicios. Vimos cómo las islas de
            información entre áreas generan demoras y pérdida de dinero — y
            construimos plataformas transversales para cerrar esa brecha.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border/50 bg-card p-6 text-center"
            >
              <p className="text-4xl font-bold text-primary sm:text-5xl">
                <NumberTicker
                  value={stat.value}
                  className="text-primary"
                />
                {stat.suffix}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border/50 bg-card/80 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-foreground">
              De preventa a postventa
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Optimizamos el flujo desde la cotización hasta la entrega,
              facturación y fidelización. El motor es una autopista de
              información operativa alineada con lo contable, clara para
              comercial, producción, compras y servicios.
            </p>
          </article>
          <article className="rounded-2xl border border-border/50 bg-card/80 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-foreground">
              Escuchar e integrar
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Una de nuestras fortalezas es escuchar al cliente e integrar
              soluciones en una sola plataforma. Liberamos tiempo operativo para
              que los equipos sean más efectivos y enfoquen energía en vender y
              servir mejor.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
