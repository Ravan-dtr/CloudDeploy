import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const TESTIMONIALS = [
  { name: "Amara Okonkwo", role: "VP Engineering, Northwind", initials: "AO", rating: 5,
    quote: "CloudDeploy cut our release cycle from days to minutes. Rollbacks that used to page the whole team now happen in one click." },
  { name: "Daniel Reyes", role: "CTO, Quantile", initials: "DR", rating: 5,
    quote: "The cost optimization alone paid for itself in a month. We found 30% of idle spend we didn't even know existed." },
  { name: "Sofia Lindqvist", role: "Platform Lead, Hexaform", initials: "SL", rating: 5,
    quote: "Our Kubernetes ops went from a full-time headache to a background task. The observability is genuinely best-in-class." },
  { name: "Marcus Tan", role: "SRE Manager, Vertexa", initials: "MT", rating: 5,
    quote: "We hit 99.99% uptime the quarter we switched. Progressive rollouts caught two bad deploys before customers noticed." },
  { name: "Priya Nair", role: "Head of DevOps, Lumenstack", initials: "PN", rating: 4,
    quote: "Onboarding was shockingly smooth. Pipelines that took weeks to configure elsewhere were live the same afternoon." },
  { name: "Elias Weber", role: "Founder, Corematic", initials: "EW", rating: 5,
    quote: "As a small team, having enterprise-grade automation without an enterprise-sized ops team is a genuine superpower." },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by engineering teams"
          description="Don't just take our word for it — here's what teams shipping on CloudDeploy have to say."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="flex flex-col rounded-2xl glass p-6"
            >
              <div className="mb-3 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className={`size-4 ${s < t.rating ? "fill-accent text-accent" : "text-muted-foreground/30"}`} />
                ))}
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground">
                  {t.initials}
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold">{t.name}</span>
                  <span className="text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
