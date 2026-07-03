import { motion } from "framer-motion";
import { Gauge, ShieldCheck, TrendingUp, Zap, Headphones, Workflow } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useCountUp } from "@/hooks/useCountUp";

const BENEFITS = [
  { icon: Zap, title: "Faster deployments", desc: "Ship 10x more often with automated, self-healing pipelines." },
  { icon: Gauge, title: "Reduced downtime", desc: "Progressive rollouts and instant rollbacks keep you online." },
  { icon: TrendingUp, title: "Scalable architecture", desc: "Autoscale from zero to millions without re-architecting." },
  { icon: ShieldCheck, title: "Enterprise-grade security", desc: "SOC 2, encryption everywhere, and policy guardrails." },
  { icon: Headphones, title: "Expert support", desc: "Talk to real DevOps engineers, any time, day or night." },
  { icon: Workflow, title: "Automated workflows", desc: "Codify every process so nothing slips through the cracks." },
];

const STATS = [
  { end: 99.99, decimals: 2, suffix: "%", label: "Uptime SLA" },
  { end: 10000, decimals: 0, suffix: "+", label: "Deployments / day" },
  { end: 500, decimals: 0, suffix: "+", label: "Happy customers" },
  { end: 24, decimals: 0, suffix: "/7", label: "Expert support" },
];

function Stat({ end, decimals, suffix, label }: (typeof STATS)[number]) {
  const { ref, display } = useCountUp({ end, decimals });
  const formatted = decimals === 0 ? Number(display).toLocaleString() : display;
  return (
    <div className="text-center">
      <span ref={ref} className="block text-4xl font-bold text-gradient sm:text-5xl">
        {formatted}{suffix}
      </span>
      <span className="mt-2 block text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

export function WhyChoose() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora absolute left-1/2 top-1/2 h-96 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[130px]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why CloudDeploy"
          title="Built for teams that refuse to slow down"
          description="Thousands of engineers rely on CloudDeploy to deliver reliable software at speed."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="flex gap-4 rounded-2xl glass p-6"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-accent">
                <b.icon className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold">{b.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 rounded-3xl glass-strong p-10 shadow-soft lg:grid-cols-4">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
