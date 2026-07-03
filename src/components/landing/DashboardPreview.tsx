import {
  Area, AreaChart, Bar, BarChart, ResponsiveContainer,
  Line, LineChart, Tooltip, XAxis, CartesianGrid,
} from "recharts";
import { Activity, Boxes, Cpu, MemoryStick, Server, TriangleAlert, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const traffic = [
  { t: "00", v: 42 }, { t: "04", v: 55 }, { t: "08", v: 78 },
  { t: "12", v: 96 }, { t: "16", v: 84 }, { t: "20", v: 110 }, { t: "24", v: 92 },
];
const cpu = [
  { t: "M", v: 38 }, { t: "T", v: 52 }, { t: "W", v: 47 },
  { t: "T", v: 63 }, { t: "F", v: 58 }, { t: "S", v: 41 }, { t: "S", v: 35 },
];
const memory = [
  { t: "1", v: 60 }, { t: "2", v: 64 }, { t: "3", v: 71 },
  { t: "4", v: 68 }, { t: "5", v: 74 }, { t: "6", v: 70 }, { t: "7", v: 66 },
];

const stats = [
  { icon: Boxes, label: "Active Deployments", value: "128", trend: "+12%" },
  { icon: Server, label: "Running Containers", value: "3,412", trend: "+4%" },
  { icon: Cpu, label: "Avg CPU Usage", value: "47%", trend: "-6%" },
  { icon: MemoryStick, label: "Memory Usage", value: "68%", trend: "+2%" },
];

const deployHistory = [
  { name: "api-gateway", env: "prod", status: "Success", time: "2m ago" },
  { name: "billing-svc", env: "prod", status: "Success", time: "18m ago" },
  { name: "web-app", env: "staging", status: "Building", time: "just now" },
  { name: "auth-svc", env: "prod", status: "Success", time: "1h ago" },
];

const activity = [
  { who: "Maya R.", what: "approved rollout to production", time: "3m" },
  { who: "Dev bot", what: "scaled cluster us-east to 8 nodes", time: "11m" },
  { who: "Leo K.", what: "merged PR #482 into main", time: "25m" },
];

const tooltipStyle = {
  background: "oklch(0.2 0.035 262)",
  border: "1px solid oklch(0.7 0.06 250 / 0.16)",
  borderRadius: 12,
  color: "#fff",
  fontSize: 12,
};

export function DashboardPreview() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Dashboard"
          title="One pane of glass for your whole stack"
          description="Live metrics, deployment history, and team activity — everything your team needs to stay ahead of incidents."
        />

        <Reveal className="mt-16">
          <div className="overflow-hidden rounded-3xl border border-border glass-strong p-4 shadow-soft sm:p-6">
            {/* Stat cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-secondary/40 p-4">
                  <div className="flex items-center justify-between">
                    <span className="grid size-9 place-items-center rounded-lg bg-primary/15 text-accent">
                      <s.icon className="size-5" />
                    </span>
                    <span className="text-xs font-medium text-accent">{s.trend}</span>
                  </div>
                  <p className="mt-3 text-2xl font-bold">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl bg-secondary/40 p-4 lg:col-span-2">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
                  <Activity className="size-4 text-accent" /> Network Traffic (req/s)
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={traffic}>
                    <defs>
                      <linearGradient id="grad-traffic" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="oklch(0.65 0.19 245)" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="oklch(0.65 0.19 245)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.4 0.04 262 / 0.3)" vertical={false} />
                    <XAxis dataKey="t" stroke="oklch(0.72 0.03 255)" fontSize={11} tickLine={false} axisLine={false} />
                    <Tooltip contentStyle={tooltipStyle} cursor={{ stroke: "oklch(0.65 0.19 245)" }} />
                    <Area type="monotone" dataKey="v" stroke="oklch(0.8 0.15 200)" strokeWidth={2} fill="url(#grad-traffic)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="rounded-2xl bg-secondary/40 p-4">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
                  <Cpu className="size-4 text-accent" /> CPU Usage (%)
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={cpu}>
                    <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.4 0.04 262 / 0.3)" vertical={false} />
                    <XAxis dataKey="t" stroke="oklch(0.72 0.03 255)" fontSize={11} tickLine={false} axisLine={false} />
                    <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "oklch(0.65 0.19 245 / 0.1)" }} />
                    <Bar dataKey="v" fill="oklch(0.65 0.19 245)" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              {/* Memory line */}
              <div className="rounded-2xl bg-secondary/40 p-4">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
                  <MemoryStick className="size-4 text-accent" /> Memory Usage (%)
                </div>
                <ResponsiveContainer width="100%" height={160}>
                  <LineChart data={memory}>
                    <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.4 0.04 262 / 0.3)" vertical={false} />
                    <XAxis dataKey="t" stroke="oklch(0.72 0.03 255)" fontSize={11} tickLine={false} axisLine={false} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Line type="monotone" dataKey="v" stroke="oklch(0.8 0.15 200)" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Deployment history */}
              <div className="rounded-2xl bg-secondary/40 p-4">
                <div className="mb-3 text-sm font-semibold">Deployment History</div>
                <ul className="space-y-3">
                  {deployHistory.map((d) => (
                    <li key={d.name} className="flex items-center justify-between text-sm">
                      <div className="flex flex-col">
                        <span className="font-medium">{d.name}</span>
                        <span className="text-xs text-muted-foreground">{d.env} · {d.time}</span>
                      </div>
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${d.status === "Success" ? "bg-emerald-500/15 text-emerald-400" : "bg-amber-500/15 text-amber-400"}`}>
                        {d.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Alerts + activity */}
              <div className="rounded-2xl bg-secondary/40 p-4">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
                  <TriangleAlert className="size-4 text-amber-400" /> Alerts
                </div>
                <div className="rounded-xl bg-amber-500/10 p-3 text-xs text-amber-300">
                  High latency on <span className="font-semibold">checkout-svc</span> — p95 620ms
                </div>
                <div className="mt-4 mb-2 flex items-center gap-2 text-sm font-semibold">
                  <Users className="size-4 text-accent" /> Team Activity
                </div>
                <ul className="space-y-2">
                  {activity.map((a, i) => (
                    <li key={i} className="text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">{a.who}</span> {a.what} · {a.time}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
