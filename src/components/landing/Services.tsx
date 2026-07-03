import { motion } from "framer-motion";
import {
  MoveRight, CloudUpload, Workflow, GitPullRequestArrow,
  Ship, LineChart, Lock, Cog, LifeBuoy,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const SERVICES = [
  { icon: CloudUpload, title: "Cloud Migration", desc: "Lift-and-shift or re-architect with zero data loss and minimal downtime." },
  { icon: Workflow, title: "DevOps Consulting", desc: "Hands-on guidance to mature your delivery culture and tooling." },
  { icon: GitPullRequestArrow, title: "CI/CD Pipelines", desc: "Custom pipelines tuned for your stack, from monorepo to microservices." },
  { icon: Ship, title: "Kubernetes", desc: "Cluster design, GitOps, and day-2 operations handled end to end." },
  { icon: LineChart, title: "Monitoring", desc: "Full-stack observability with dashboards, SLOs, and on-call setup." },
  { icon: Lock, title: "Security", desc: "Threat modeling, hardening, and continuous compliance automation." },
  { icon: Cog, title: "Infrastructure Automation", desc: "Repeatable, versioned infrastructure delivered as code." },
  { icon: LifeBuoy, title: "Disaster Recovery", desc: "Tested backup and failover strategies that keep you online." },
];

export function Services() {
  return (
    <section id="solutions" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Solutions"
          title="Services that meet you where you are"
          description="Whether you're migrating your first workload or scaling to millions of requests, our specialists have you covered."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
              className="group flex flex-col rounded-2xl glass p-6 transition-all hover:-translate-y-1.5 hover:shadow-soft"
            >
              <span className="mb-4 grid size-11 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-accent">
                <s.icon className="size-5" />
              </span>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <MoveRight className="size-4" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
