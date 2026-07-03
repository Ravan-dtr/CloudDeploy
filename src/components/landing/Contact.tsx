import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter, FaDiscord } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

const EMPTY: FormState = { name: "", email: "", company: "", message: "" };

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "hello@clouddeploy.io" },
  { icon: Phone, label: "Phone", value: "+1 (555) 018-2049" },
  { icon: MapPin, label: "Office", value: "128 Terminal Ave, Remote-first" },
];

const SOCIALS = [
  { icon: FaGithub, label: "GitHub", href: "#" },
  { icon: FaLinkedin, label: "LinkedIn", href: "#" },
  { icon: FaXTwitter, label: "X", href: "#" },
  { icon: FaDiscord, label: "Discord", href: "#" },
];

export function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email";
    if (!form.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    toast.success("Thanks! Our team will be in touch shortly.");
    setForm(EMPTY);
    setErrors({});
  };

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something reliable"
          description="Questions about pricing, migration, or a custom setup? Send us a note and we'll respond within one business day."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <form onSubmit={handleSubmit} noValidate className="rounded-3xl glass-strong p-6 shadow-soft sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" value={form.name} onChange={update("name")} placeholder="Jane Doe" aria-invalid={!!errors.name} />
                  {errors.name && <span className="text-xs text-destructive">{errors.name}</span>}
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={form.email} onChange={update("email")} placeholder="jane@company.com" aria-invalid={!!errors.email} />
                  {errors.email && <span className="text-xs text-destructive">{errors.email}</span>}
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" value={form.company} onChange={update("company")} placeholder="Acme Inc. (optional)" />
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={5} value={form.message} onChange={update("message")} placeholder="Tell us about your infrastructure goals..." aria-invalid={!!errors.message} />
                {errors.message && <span className="text-xs text-destructive">{errors.message}</span>}
              </div>
              <Button type="submit" variant="hero" size="lg" className="mt-6 w-full sm:w-auto">
                Send message <Send className="size-4" />
              </Button>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {CONTACT_INFO.map((c) => (
                <div key={c.label} className="flex items-center gap-4 rounded-2xl glass p-5">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/15 text-accent">
                    <c.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                    <p className="font-medium">{c.value}</p>
                  </div>
                </div>
              ))}
              <div className="mt-auto rounded-2xl glass p-5">
                <p className="text-sm font-semibold">Follow us</p>
                <div className="mt-3 flex gap-3">
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
