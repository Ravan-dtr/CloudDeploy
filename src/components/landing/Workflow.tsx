import { motion } from "framer-motion";
import {
  Code2, GitCommitHorizontal, Hammer, FlaskConical,
  Container, Ship, Rocket, Activity,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const STEPS = [
  { icon: Code2, title: "Developer", desc: "Write code" },
  { icon: GitCommitHorizontal, title: "Git Push", desc: "Commit triggers pipeline" },
  { icon: Hammer, title: "Automated Build", desc: "Compile & cache" },
  { icon: FlaskConical, title: "Testing", desc: "Unit, integration, e2e" },
  { icon: Container, title: "Containerization", desc: "Build & scan image" },
  { icon: Ship, title: "Kubernetes", desc: "Rollout across clusters" },
  { icon: Rocket, title: "Production", desc: "Zero-downtime release" },
  { icon: Activity, title: "Monitoring", desc: "Observe & alert" },
];

export function Workflow() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Workflow"
          title="From commit to production, fully automated"
          description="Every push flows through a battle-tested pipeline — CloudDeploy handles each stage so releases stay predictable and safe."
        />
        <div className="relative mt-16">
          <div aria-hidden="true" className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-accent to-transparent lg:hidden" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex items-start gap-4 rounded-2xl glass p-5"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[var(--shadow-glow)]">
                  <step.icon className="size-5" />
                </span>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-1 font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
