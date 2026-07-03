import { Reveal } from "./Reveal";

const LOGOS = ["Northwind", "Quantile", "Hexaform", "Vertexa", "Lumenstack", "Corematic"];

export function TrustedBy() {
  return (
    <section className="border-y border-border/60 bg-card/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Trusted by fast-moving engineering teams worldwide
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {LOGOS.map((name, i) => (
            <Reveal key={name} delay={i * 0.05}>
              <span className="block text-center text-xl font-bold text-muted-foreground/60 grayscale transition-all duration-300 hover:text-foreground hover:grayscale-0">
                {name}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
