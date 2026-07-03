import { useState } from "react";
import { CloudCog } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter, FaDiscord } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const COLUMNS = [
  { title: "Product", links: ["Features", "Solutions", "Pricing", "Dashboard", "Changelog"] },
  { title: "Resources", links: ["Docs", "API Reference", "Guides", "Status", "Blog"] },
  { title: "Company", links: ["About", "Careers", "Customers", "Partners", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "SLA", "Cookies"] },
];

const SOCIALS = [
  { icon: FaGithub, label: "GitHub", href: "#" },
  { icon: FaLinkedin, label: "LinkedIn", href: "#" },
  { icon: FaXTwitter, label: "X", href: "#" },
  { icon: FaDiscord, label: "Discord", href: "#" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("You're subscribed! Watch your inbox.");
    setEmail("");
  };

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2" aria-label="CloudDeploy home">
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent">
                <CloudCog className="size-5 text-primary-foreground" />
              </span>
              <span className="text-lg font-bold">CloudDeploy</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The modern DevOps platform to automate infrastructure, deploy faster, and scale smarter.
            </p>
            <form onSubmit={subscribe} className="mt-6 flex max-w-sm gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email for newsletter"
              />
              <Button type="submit" variant="hero">Subscribe</Button>
            </form>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CloudDeploy, Inc. All rights reserved.
          </p>
          <div className="flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid size-10 place-items-center rounded-xl bg-secondary/50 text-muted-foreground transition-colors hover:bg-primary/20 hover:text-accent"
              >
                <s.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
