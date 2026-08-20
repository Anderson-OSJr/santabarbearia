import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { BUSINESS, NAV_LINKS, buildWhatsappLink } from "@/lib/constants";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2.5">
          <Image
            src="/images/logo-icon.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10"
            priority
          />
          <span className="font-display text-lg font-semibold tracking-wide">
            {BUSINESS.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            size="sm"
            nativeButton={false}
            render={<a href={buildWhatsappLink()} target="_blank" rel="noopener noreferrer" />}
          >
            Agendar
          </Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" aria-label="Abrir menu" className="md:hidden" />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="font-display text-lg">{BUSINESS.name}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <SheetClose
                  key={link.href}
                  render={
                    <a
                      href={link.href}
                      className="rounded-md px-2 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
                    />
                  }
                >
                  {link.label}
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto p-4">
              <Button
                className="w-full"
                nativeButton={false}
                render={<a href={buildWhatsappLink()} target="_blank" rel="noopener noreferrer" />}
              >
                Agendar no WhatsApp
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
