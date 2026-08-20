import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-3 sm:px-6 lg:px-8">
        <div>
          <span className="font-display text-lg font-semibold">
            {BUSINESS.name}
          </span>
          <p className="mt-3 text-sm text-muted-foreground">
            {BUSINESS.addressLine}
            <br />
            {BUSINESS.addressCity}, {BUSINESS.postalCode}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            {BUSINESS.phoneDisplay}
          </p>
        </div>

        <div>
          <span className="text-sm font-semibold text-foreground">
            Navegação
          </span>
          <ul className="mt-3 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-sm font-semibold text-foreground">Horário</span>
          <ul className="mt-3 flex flex-col gap-2">
            {BUSINESS.hours.map((h) => (
              <li key={h.day} className="text-sm text-muted-foreground">
                <span className="text-foreground/80">{h.day}:</span> {h.value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 py-6">
        <p className="text-center text-xs text-muted-foreground">
          © {year} {BUSINESS.name} — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
