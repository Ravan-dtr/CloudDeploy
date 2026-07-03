import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const FAQS = [
  { q: "How does CloudDeploy handle deployments?", a: "Every git push triggers an automated pipeline that builds, tests, containerizes, and rolls out your app with progressive delivery. Failed deploys roll back instantly with zero downtime." },
  { q: "What does pricing include?", a: "All plans include CI/CD, monitoring, and unlimited team collaboration on paid tiers. You only pay for the plan — no surprise per-seat or per-build fees. Annual billing saves 20%." },
  { q: "Which cloud providers are supported?", a: "CloudDeploy works across AWS, Google Cloud, Azure, and DigitalOcean, plus hybrid and on-prem Kubernetes clusters. You can run workloads across multiple providers from one control plane." },
  { q: "Does it integrate with our existing tools?", a: "Yes. We integrate natively with GitHub, GitLab, Bitbucket, Slack, PagerDuty, Datadog, and more via our API and webhooks, so CloudDeploy fits into your current workflow." },
  { q: "What kind of support do you offer?", a: "Community support on Starter, priority support on Growth, and a dedicated support engineer with custom SLAs on Enterprise. Our team is made up of real DevOps engineers available 24/7." },
  { q: "Is my data secure?", a: "Absolutely. We're SOC 2 Type II compliant, encrypt data in transit and at rest, and provide policy guardrails, continuous scanning, and audit-ready compliance reports." },
];

export function FAQ() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know before getting started."
        />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl glass border-none px-5"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
