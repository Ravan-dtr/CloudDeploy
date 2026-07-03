import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const PLANS = [
  {
    name: "Starter", monthly: 0, annual: 0, tag: "For side projects",
    highlight: false, cta: "Start Free",
    features: ["1 project", "3 deployments / day", "Community support", "Basic monitoring"],
  },
  {
    name: "Growth", monthly: 49, annual: 39, tag: "For scaling teams",
    highlight: true, cta: "Start Free Trial",
    features: ["Unlimited projects", "Unlimited deployments", "Priority support", "Advanced monitoring & alerts", "Cost optimization"],
  },
  {
    name: "Enterprise", monthly: null, annual: null, tag: "For large orgs",
    highlight: false, cta: "Contact Sales",
    features: ["Everything in Growth", "SSO & SAML", "Dedicated support engineer", "Custom SLAs", "On-prem / hybrid"],
  },
];

const COMPARISON: { label: string; values: (boolean | string)[] }[] = [
  { label: "Projects", values: ["1", "Unlimited", "Unlimited"] },
  { label: "Deployments / day", values: ["3", "Unlimited", "Unlimited"] },
  { label: "Team members", values: ["2", "25", "Unlimited"] },
  { label: "Monitoring & alerts", values: [true, true, true] },
  { label: "Cost optimization", values: [false, true, true] },
  { label: "SSO / SAML", values: [false, false, true] },
  { label: "Dedicated engineer", values: [false, false, true] },
  { label: "Custom SLA", values: [false, false, true] },
];

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that scales with you"
          description="Start free, upgrade when you're ready. No hidden fees, cancel anytime."
        />

        <Reveal className="mt-10 flex items-center justify-center gap-4">
          <span className={annual ? "text-muted-foreground" : "font-semibold"}>Monthly</span>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            aria-label="Toggle annual billing"
            onClick={() => setAnnual((v) => !v)}
            className="relative h-7 w-12 rounded-full bg-secondary transition-colors"
          >
            <span className={`absolute top-1 size-5 rounded-full bg-gradient-to-br from-primary to-accent transition-all ${annual ? "left-6" : "left-1"}`} />
          </button>
          <span className={!annual ? "text-muted-foreground" : "font-semibold"}>
            Annual <span className="text-accent">(save 20%)</span>
          </span>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => {
            const price = annual ? plan.annual : plan.monthly;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col rounded-3xl p-8 ${
                  plan.highlight
                    ? "glass-strong border-2 border-primary/50 shadow-[var(--shadow-glow)]"
                    : "glass"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most popular
                  </span>
                )}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.tag}</p>
                <div className="mt-6 flex items-end gap-1">
                  {price === null ? (
                    <span className="text-4xl font-bold">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold">${price}</span>
                      <span className="mb-1 text-sm text-muted-foreground">/mo</span>
                    </>
                  )}
                </div>
                <Button variant={plan.highlight ? "hero" : "glass"} size="lg" className="mt-6">
                  {plan.cta}
                </Button>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison table */}
        <Reveal className="mt-16 hidden overflow-hidden rounded-3xl glass md:block">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-5 font-semibold">Compare features</th>
                {PLANS.map((p) => (
                  <th key={p.name} className="p-5 text-center font-semibold">{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, ri) => (
                <tr key={row.label} className={ri % 2 ? "bg-secondary/20" : ""}>
                  <td className="p-5 text-muted-foreground">{row.label}</td>
                  {row.values.map((v, vi) => (
                    <td key={vi} className="p-5 text-center">
                      {typeof v === "boolean" ? (
                        v ? (
                          <Check className="mx-auto size-5 text-accent" />
                        ) : (
                          <Minus className="mx-auto size-5 text-muted-foreground/40" />
                        )
                      ) : (
                        <span className="font-medium">{v}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
