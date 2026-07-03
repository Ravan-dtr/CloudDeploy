import { motion } from "framer-motion";
import {
  GitBranch, FileCode2, Ship, Container, BellRing,
  PiggyBank, DatabaseBackup, ShieldCheck, Users,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const FEATURES = [
  { icon: GitBranch, title: "CI/CD Automation", desc: "Trigger builds, tests, and deploys on every push with pipelines that configure themselves." },
  { icon: FileCode2, title: "Infrastructure as Code", desc: "Version, review, and roll back your entire cloud footprint with declarative templates." },
  { icon: Ship, title: "Kubernetes Management", desc: "Provision, autoscale, and heal clusters across regions from a single control plane." },
  { icon: Container, title: "Docker Deployments", desc: "Build slim, cached images and ship containers with instant rollbacks baked in." },
  { icon: BellRing, title: "Monitoring & Alerts", desc: "Real-time metrics, tracing, and smart alerts that page the right person, fast." },
  { icon: PiggyBank, title: "Cloud Cost Optimization", desc: "Spot idle resources and right-size workloads to cut your bill automatically." },
  { icon: DatabaseBackup, title: "Backup Automation", desc: "Scheduled, encrypted snapshots with one-click point-in-time recovery." },
  { icon: ShieldCheck, title: "Security & Compliance", desc: "Continuous scanning, policy guardrails, and audit-ready compliance reports." },
  { icon: Users, title: "Team Collaboration", desc: "Granular roles, review flows, and shared environments keep everyone in sync." },
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Platform"
          title="Everything you need to ship with confidence"
          description="A complete DevOps toolchain, thoughtfully integrated so your team spends time building — not stitching tools together."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-shadow hover:shadow-soft"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="mb-5 grid size-12 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-accent transition-transform group-hover:scale-110">
                <feature.icon className="size-6" />
              </span>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
