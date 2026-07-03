import { useEffect, useState } from "react";
import { Menu, X, CloudCog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2" aria-label="CloudDeploy home">
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent glow">
            <CloudCog className="size-5 text-primary-foreground" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight">CloudDeploy</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link to="/login">
    <Button
        variant="ghost"
        className="text-foreground hover:bg-secondary"
    >
        Login
    </Button>
</Link>
          <Button
    variant="hero"
    onClick={() =>
        document
            .getElementById("contact")
            ?.scrollIntoView({
                behavior: "smooth",
            })
    }
>
    Get Started
</Button>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="glass-strong border-t border-border lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
             <Link to="/login">
    <Button
        variant="outline"
        className="w-full"
    >
        Login
    </Button>
</Link>
              <Button
    variant="hero"
    onClick={() => {
        document
            .getElementById("contact")
            ?.scrollIntoView({
                behavior: "smooth",
            });
        setOpen(false);
    }}
>
    Get Started
</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
