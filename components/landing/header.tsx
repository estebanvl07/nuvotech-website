"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SEEON_URL, SCHEDULING_URL } from "@/lib/urls";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const SCROLL_THRESHOLD = 16;

const navItems = [
  { id: "inicio", label: "Inicio", href: "#inicio" },
  { id: "empresa", label: "Empresa", href: "#empresa" },
  { id: "productos", label: "Productos", href: "#productos" },
  { id: "ceo", label: "CEO", href: "#ceo" },
  { id: "contacto", label: "Contacto", href: "#contacto" },
] as const;

function navLinkClassName(isActive: boolean) {
  return cn(
    "rounded-lg px-3 py-2 text-sm transition-colors",
    isActive
      ? "font-bold text-primary"
      : "font-normal text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [mobilePanelMaxHeight, setMobilePanelMaxHeight] = useState<number>();
  const solidHeader = scrolled || mobileMenuOpen;

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);

      const offset = 120;
      let current = "inicio";
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (window.scrollY + offset >= el.offsetTop) {
          current = item.id;
        }
      }
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const updateHeight = () => {
      setMobilePanelMaxHeight(Math.max(160, window.innerHeight - 72));
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("resize", updateHeight);
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed right-0 left-0 z-50 transition-all duration-300 ease-out",
        scrolled ? "top-3 px-3 sm:top-4 sm:px-4 md:px-5" : "top-0 px-0",
      )}
    >
      <div
        className={cn(
          "relative mx-auto max-w-7xl transition-all duration-300 ease-out",
          solidHeader
            ? cn(
                "border border-border/60 bg-background/95 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.12)] backdrop-blur-md supports-[backdrop-filter]:bg-background/90",
                scrolled ? "rounded-2xl" : "rounded-b-2xl border-t-transparent",
              )
            : "rounded-none border-transparent bg-transparent shadow-none backdrop-blur-none",
        )}
      >
        <div className="flex h-16 w-full items-center gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="#inicio" className="relative shrink-0" aria-label="Inicio">
            <Image
              src="/nuvotech-colombia.jpg"
              alt="Nuvotech Colombia"
              width={160}
              height={48}
              priority
              className="h-9 w-auto object-contain sm:h-10"
            />
          </Link>

          <nav
            aria-label="Principal"
            className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={navLinkClassName(activeSection === item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <div className="hidden items-center gap-2 lg:flex">
              <a
                href={SEEON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Ver SeeOn
              </a>
              <Button
                asChild
                size="sm"
                className="rounded-lg bg-primary px-5 text-primary-foreground hover:bg-primary/90"
              >
                <a href={SCHEDULING_URL} target="_blank" rel="noopener noreferrer">
                  Agendar demo
                </a>
              </Button>
            </div>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileMenuOpen}
              className="rounded-lg p-2 text-foreground transition-colors hover:bg-secondary/60 lg:hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div
            className="scrollbar-thin touch-pan-y overflow-y-auto overscroll-contain border-t border-border/40 px-4 py-4 sm:px-6 lg:hidden"
            style={{ maxHeight: mobilePanelMaxHeight }}
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={cn(
                    navLinkClassName(activeSection === item.id),
                    "px-3 py-2.5",
                  )}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-border/40 pt-4">
                <a
                  href={SEEON_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                  onClick={closeMobileMenu}
                >
                  Ver SeeOn
                </a>
                <Button
                  asChild
                  className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a
                    href={SCHEDULING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar demo
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
