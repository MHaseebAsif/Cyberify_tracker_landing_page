import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Clock, Monitor, Camera, BarChart3, Globe, AppWindow, MoonStar, Activity,
  Users, ShieldCheck, Download, Chrome, CheckCircle2, TrendingUp, Eye,
  Timer, Layers, Sparkles, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cyberify Activity Tracker — Smart Workforce Monitoring" },
      { name: "description", content: "Track productivity, monitor work activity, and gain actionable insights from your team's daily workflow — all from one powerful dashboard." },
      { property: "og:title", content: "Cyberify Activity Tracker" },
      { property: "og:description", content: "Smart Workforce Monitoring & Productivity Intelligence for remote, hybrid, and in-office teams." },
    ],
  }),
  component: Index,
});

const ORANGE = "text-[oklch(0.68_0.19_45)]";
const BG_ORANGE = "bg-[oklch(0.68_0.19_45)]";
const BG_ORANGE_SOFT = "bg-[oklch(0.97_0.04_55)]";

function Btn({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "outline" }) {
  if (variant === "outline") {
    return (
      <button className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-foreground/40 clickable">
        {children}
      </button>
    );
  }
  return (
    <button className={`inline-flex items-center gap-2 btn-primary-gradient text-sm font-semibold clickable cta-glow hover-raise`}>
      {children}
    </button>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
      <span className={`h-1.5 w-1.5 rounded-full ${BG_ORANGE}`} /> {children}
    </div>
  );
}

const features = [
  { icon: Clock, title: "Automatic Time Tracking", desc: "Track working hours automatically without manual timesheets.", items: ["Real-time clock-in / clock-out", "Active vs idle time detection", "Daily, weekly & monthly reports", "Attendance analytics"] },
  { icon: Monitor, title: "Activity Monitoring", desc: "Visibility into employee activity across apps and websites.", items: ["Active application tracking", "Website usage monitoring", "Productivity categorization", "Work pattern analysis"] },
  { icon: Camera, title: "Smart Screenshots", desc: "Capture work progress through configurable screenshots.", items: ["Random screenshot intervals", "Blur sensitive information", "Screenshot history", "Activity verification"] },
  { icon: BarChart3, title: "Productivity Analytics", desc: "Measure productivity with intelligent scoring & reporting.", items: ["Productivity score", "Focus score", "Utilization rate", "Team comparison"] },
  { icon: Globe, title: "Website & Browser Tracking", desc: "Understand how employees spend online work time.", items: ["URL tracking", "Domain categorization", "Productive vs unproductive sites", "Time per website"] },
  { icon: AppWindow, title: "Application Usage", desc: "Monitor software utilization across teams.", items: ["Application usage reports", "Time per application", "Most-used applications", "Software adoption insights"] },
  { icon: MoonStar, title: "Idle Time Detection", desc: "Identify periods of inactivity automatically.", items: ["Mouse inactivity detection", "Keyboard inactivity detection", "Auto idle classification", "Idle time reports"] },
  { icon: Activity, title: "Real-Time Dashboard", desc: "Monitor team activity as it happens.", items: ["Live active users", "Online status", "Current activity", "Active applications"] },
  { icon: Users, title: "Team Performance Insights", desc: "Make informed management decisions with data.", items: ["Top performers", "Team efficiency", "Workload distribution", "Department analytics"] },
  { icon: ShieldCheck, title: "Enterprise Security", desc: "Built with security and compliance in mind.", items: ["Encrypted data transmission", "Secure cloud storage", "Role-based access control", "Audit logs"] },
];

const whyChoose = [
  { icon: TrendingUp, title: "Improve Productivity", desc: "Identify distractions, optimize workflows, and increase team efficiency." },
  { icon: Eye, title: "Increase Accountability", desc: "Gain visibility into work activities and ensure transparency." },
  { icon: Timer, title: "Save Management Time", desc: "Automated reporting eliminates manual productivity tracking." },
  { icon: Layers, title: "Better Resource Planning", desc: "Understand team utilization and allocate resources effectively." },
  { icon: Sparkles, title: "Data-Driven Decisions", desc: "Make smarter management decisions using real-time analytics." },
];



const analytics = ["Employee Productivity Score", "Active vs Idle Time", "Attendance Reports", "Website Usage Reports", "Application Usage Reports", "Screenshot Timeline", "Team Activity Reports", "Daily Performance Summaries", "Weekly Productivity Trends", "Monthly Workforce Analytics"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 navbar-glass border-b border-foreground/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${BG_ORANGE}`}>
              <Activity className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">CYBERIFY</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#features" className="nav-link">Features</a>
            <a href="#why" className="nav-link">Why Us</a>
            <a href="#platforms" className="nav-link">Platforms</a>
            <a href="#analytics" className="nav-link">Analytics</a>
            <a href="#download" className="nav-link">Download</a>
          </nav>
          <div className="ml-4">
            <a href="/download/windows" className={`inline-flex items-center gap-2 rounded-full ${BG_ORANGE} px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_oklch(0.68_0.19_45/0.6)] transition hover:opacity-95 clickable`}>
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden fade-in-up">
        <div className={`absolute inset-x-0 top-0 -z-10 h-[600px] ${BG_ORANGE_SOFT} opacity-60`} />
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background px-4 py-1.5 text-xs font-medium fade-in">
            <span className={`h-1.5 w-1.5 rounded-full ${BG_ORANGE} animate-pulse`} />
            Internal Productivity Tool · Cyberify Engineering
          </div>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Track our work. <br />
            Measure our <span className={ORANGE}>focus.</span> <br />
            Ship <span className={ORANGE}>better software.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Cyberify Activity Tracker is the in-house productivity tool built for our software house developers. Track active coding time, monitor app & website usage, and get clear insight into how our team ships work each day — completely free for everyone on the team.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/download/windows" className={`inline-flex items-center gap-2 rounded-full ${BG_ORANGE} px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_oklch(0.68_0.19_45/0.6)] transition hover:opacity-95 clickable`}>
              <Download className="h-4 w-4" /> Download for your machine <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:border-foreground/40">
              See what it tracks
            </a>
          </div>

          <p className="mx-auto mt-6 max-w-md text-xs text-muted-foreground">
            100% free for Cyberify team members. No license keys, no trials, no billing — just install and sign in with your company account.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <SectionLabel>Key Features</SectionLabel>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Monitor Work. <span className={ORANGE}>Improve Productivity.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Everything our developers, designers, and project leads need to understand how the team's day actually flows.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-foreground/10 bg-card p-6 transition hover:border-[oklch(0.68_0.19_45/0.4)] hover:shadow-[0_20px_50px_-30px_oklch(0.68_0.19_45/0.5)] hover-raise soft-focus clickable cursor-pointer fade-in-up">
              <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${BG_ORANGE_SOFT} ${ORANGE}`}>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
              <ul className="mt-4 space-y-2">
                {f.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${ORANGE}`} />
                    <span className="text-foreground/80">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Dark banner */}
      <section className={`py-20 ${BG_ORANGE_SOFT} fade-in-up`}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">For Our Team Only</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Built by Cyberify, <span className={ORANGE}>for Cyberify</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            This is the internal tracker every engineer at our software house uses. It runs quietly in the background, respects your workflow, and gives the team honest insight into how we ship.
          </p>
          <div className="mt-8 flex justify-center">
            <Link to="/download/windows" className={`inline-flex items-center gap-2 rounded-full ${BG_ORANGE} px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_oklch(0.68_0.19_45/0.6)] transition hover:opacity-95 clickable`}>
              <Download className="h-4 w-4" /> Download it Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section id="why" className="mx-auto max-w-7xl px-6 py-20 fade-in-up">
        <div className="text-center">
          <SectionLabel>Why Cyberify</SectionLabel>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Smarter teams choose <span className={ORANGE}>Cyberify</span>
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w) => (
            <div key={w.title} className="rounded-2xl border border-foreground/10 bg-card p-6 fade-in-up clickable cursor-pointer soft-focus">
              <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${BG_ORANGE} text-white`}>
                <w.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section id="platforms" className={`py-20 ${BG_ORANGE_SOFT} fade-in-up`}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <SectionLabel>Platform Support</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Available <span className={ORANGE}>Everywhere</span> You Work</h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-foreground/10 bg-background p-8 fade-in-up">
              <div className="flex items-center gap-3">
                <Monitor className={`h-6 w-6 ${ORANGE}`} />
                <h3 className="text-xl font-semibold">Desktop Applications</h3>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {["Windows 10 & 11", "Ubuntu", "Debian", "Fedora", "Linux Mint"].map(p => (
                  <div key={p} className="flex items-center gap-2 rounded-lg border border-foreground/5 bg-secondary/50 px-3 py-2.5 text-sm clickable cursor-pointer soft-focus">
                    <CheckCircle2 className={`h-4 w-4 ${ORANGE}`} /> {p}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-foreground/10 bg-background p-8 fade-in-up">
              <div className="flex items-center gap-3">
                <Chrome className={`h-6 w-6 ${ORANGE}`} />
                <h3 className="text-xl font-semibold">Browser Extensions</h3>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-3">
                {["Google Chrome", "Microsoft Edge", "Mozilla Firefox"].map(p => (
                  <div key={p} className="flex items-center gap-2 rounded-lg border border-foreground/5 bg-secondary/50 px-3 py-2.5 text-sm">
                    <CheckCircle2 className={`h-4 w-4 ${ORANGE}`} /> {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section id="analytics" className="mx-auto max-w-7xl px-6 py-20 fade-in-up">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>Powerful Analytics</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              A dashboard that turns activity into <span className={ORANGE}>insight</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Detailed insights across every metric that matters — from productivity scores to workforce trends.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {analytics.map(a => (
                <div key={a} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className={`h-4 w-4 shrink-0 ${ORANGE}`} />
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-foreground/10 bg-card p-6 shadow-[0_30px_80px_-40px_oklch(0.68_0.19_45/0.4)] fade-in-up">
            <div className="flex items-center justify-between border-b border-foreground/5 pb-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Productivity Score</p>
                <p className="mt-1 text-4xl font-bold">87<span className="text-xl text-muted-foreground">/100</span></p>
              </div>
              <span className={`rounded-full ${BG_ORANGE_SOFT} ${ORANGE} px-3 py-1 text-xs font-semibold`}>+12% this week</span>
            </div>
            <div className="mt-6 space-y-4">
              {[
                { l: "Focus Time", v: 78 }, { l: "Active Apps", v: 64 },
                { l: "Utilization", v: 91 }, { l: "Attendance", v: 96 },
              ].map(r => (
                <div key={r.l}>
                  <div className="flex justify-between text-xs"><span className="text-muted-foreground">{r.l}</span><span className="font-semibold">{r.v}%</span></div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-secondary">
                    <div className={`h-full ${BG_ORANGE}`} style={{ width: `${r.v}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-foreground/5 pt-6">
              {[{l:"Active",v:"24"},{l:"Idle",v:"3"},{l:"Offline",v:"5"}].map(s => (
                <div key={s.l} className="rounded-xl bg-secondary/50 p-3 text-center">
                  <p className="text-2xl font-bold">{s.v}</p>
                  <p className="text-xs text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Download CTA */}
      <section id="download" className="mx-auto max-w-7xl px-6 py-20 fade-in-up">
        <div className={`overflow-hidden rounded-3xl ${BG_ORANGE} p-10 md:p-16`}>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="text-white">
              <p className="text-xs uppercase tracking-[0.3em] opacity-80">Start Tracking Today</p>
              <h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
                Transform the way your team works.
              </h2>
              <p className="mt-4 max-w-xl opacity-90">
                Download Cyberify Activity Tracker and unlock real-time visibility, productivity intelligence, and workforce analytics.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: "Download for Windows", to: "/download/windows" as const },
                { label: "Download for Linux", to: "/download/linux" as const },
              ].map(d => (
                <Link key={d.to} to={d.to} className="inline-flex items-center justify-between gap-6 rounded-full bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white/90 clickable">
                  <span className="flex items-center gap-2"><Download className="h-4 w-4" /> {d.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/5 bg-background fade-in-up">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            <div className="col-span-2">
              <div className="flex items-center gap-2">
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${BG_ORANGE}`}>
                  <Activity className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-bold tracking-tight">CYBERIFY</span>
              </div>
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                Trusted monitoring. Better results. Empowering organizations with productivity intelligence.
              </p>
            </div>
            {[
              { h: "Product", l: ["Features", "Analytics", "Security", "Pricing"] },
                { h: "Platforms", l: ["Windows", "Linux", "Extensions"] },
              { h: "Company", l: ["About", "Careers", "Contact", "Blog"] },
            ].map(c => (
              <div key={c.h}>
                <p className="text-sm font-semibold">{c.h}</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {c.l.map(i => <li key={i}><a href="#" className="hover:text-foreground">{i}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 border-t border-foreground/5 pt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cyberify. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
