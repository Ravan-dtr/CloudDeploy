import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck, Zap, Boxes } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroInfra from "@/assets/hero-infra.jpg";

const floatingStats = [
  { icon: Zap, label: "Deploy time", value: "38s", top: "top-6 -left-4 sm:-left-8" },
  { icon: ShieldCheck, label: "Uptime", value: "99.99%", top: "bottom-10 -right-3 sm:-right-8" },
  { icon: Boxes, label: "Containers", value: "12.4k", top: "bottom-28 -left-6 sm:-left-10" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Animated aurora background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
        <div className="aurora absolute top-20 right-0 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-background)_75%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="flex flex-col gap-7">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-accent"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            New: Multi-cloud autoscaling is live
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-balance text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            Automate Your Infrastructure.{" "}
            <span className="text-gradient">Deploy Faster.</span> Scale Smarter.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            CloudDeploy unifies your CI/CD pipelines, Kubernetes clusters, and cloud
            spend into one intelligent control plane — so your team ships production
            code in minutes, not days, with zero-downtime confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
           <Button
    variant="hero"
    size="xl"
    onClick={() =>
        document
            .getElementById("contact")
            ?.scrollIntoView({
                behavior: "smooth",
            })
    }
>
    Start Free
    <ArrowRight className="size-4" />
</Button>
            <Button variant="glass" size="xl">
              <PlayCircle className="size-5" /> Book Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-accent" /> SOC 2 Type II</span>
            <span className="flex items-center gap-2"><Zap className="size-4 text-accent" /> No credit card required</span>
            <span className="flex items-center gap-2"><Boxes className="size-4 text-accent" /> 14-day free trial</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="floaty overflow-hidden rounded-3xl border border-border glass-strong p-2 shadow-soft">
            <img
              src={heroInfra}
              alt="Abstract visualization of CloudDeploy's cloud infrastructure network"
              width={1280}
              height={1024}
              className="w-full rounded-2xl"
            />
          </div>

          {floatingStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
              className={`absolute ${stat.top} hidden items-center gap-3 rounded-2xl glass-strong px-4 py-3 shadow-soft sm:flex`}
            >
              <span className="grid size-9 place-items-center rounded-xl bg-primary/15 text-accent">
                <stat.icon className="size-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-lg font-bold">{stat.value}</span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
