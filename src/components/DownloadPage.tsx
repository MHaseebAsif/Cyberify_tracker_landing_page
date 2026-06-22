import { Link } from "@tanstack/react-router";
import { Activity, ArrowLeft, Download, CheckCircle2, ShieldCheck, Chrome } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ORANGE = "text-[oklch(0.68_0.19_45)]";
const BG_ORANGE = "bg-[oklch(0.68_0.19_45)]";
const BG_ORANGE_SOFT = "bg-[oklch(0.97_0.04_55)]";

export type DownloadVariant = {
  label: string;
  filename: string;
  size: string;
  note?: string;
};

export type DownloadPageProps = {
  platform: string;
  tagline: string;
  icon: LucideIcon;
  version: string;
  releaseDate: string;
  requirements: string[];
  variants: DownloadVariant[];
  extensions: { name: string; desc: string }[];
  steps: string[];
};

function triggerDownload(filename: string, platform: string) {
  const content = `Cyberify Activity Tracker — Installer Placeholder\nPlatform: ${platform}\nFile: ${filename}\n\nThis is a demo build. Replace with the real installer binary in production.`;
  const blob = new Blob([content], { type: "application/octet-stream" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function DownloadPage(props: DownloadPageProps) {
  const Icon = props.icon;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-foreground/5 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${BG_ORANGE}`}>
              <Activity className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">CYBERIFY</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden fade-in-up">
        <div className={`absolute inset-x-0 top-0 -z-10 h-[400px] ${BG_ORANGE_SOFT} opacity-60`} />
        <div className="mx-auto max-w-5xl px-6 pt-16 pb-10 text-center">
          <div className={`mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${BG_ORANGE} text-white shadow-[0_20px_50px_-15px_oklch(0.68_0.19_45/0.6)]`}>
            <Icon className="h-8 w-8" />
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Download for {props.platform}</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Cyberify Activity Tracker <span className={ORANGE}>for {props.platform}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{props.tagline}</p>
          <p className="mt-3 text-xs text-muted-foreground">
            Version {props.version} · Released {props.releaseDate}
          </p>
        </div>
      </section>

      {/* Installer card */}
      <section className="mx-auto max-w-5xl px-6 pb-16 fade-in-up">
        <div className="rounded-3xl border border-foreground/10 bg-card p-8 shadow-[0_30px_80px_-40px_oklch(0.68_0.19_45/0.4)] md:p-10 soft-focus">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Installer</p>
              <h2 className="mt-1 text-2xl font-bold">Get the {props.platform} installer</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Click below to download. Run the file to begin installation.
              </p>
            </div>
            <div className={`hidden h-14 w-14 items-center justify-center rounded-xl ${BG_ORANGE_SOFT} ${ORANGE} md:inline-flex`}>
              <Download className="h-6 w-6" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3">
            {props.variants.map((v, i) => (
              <div key={v.filename} className="flex flex-col gap-3 rounded-2xl border border-foreground/10 bg-background p-4 sm:flex-row sm:items-center sm:justify-between fade-in-up">
                <div className="flex items-center gap-4">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${BG_ORANGE_SOFT} ${ORANGE} font-mono text-xs font-bold`}>
                    {v.filename.split(".").pop()?.toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{v.label}</p>
                    <p className="text-xs text-muted-foreground">{v.filename} · {v.size}{v.note ? ` · ${v.note}` : ""}</p>
                  </div>
                </div>
                <button
                  onClick={() => triggerDownload(v.filename, props.platform)}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                    i === 0 ? `${BG_ORANGE} text-white shadow-[0_10px_30px_-10px_oklch(0.68_0.19_45/0.6)] hover:opacity-95 clickable` : "border border-foreground/15 bg-background text-foreground hover:border-foreground/40 clickable"
                  }`}
                >
                  <Download className="h-4 w-4" /> Download
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-foreground/5 bg-secondary/40 p-4 text-xs text-muted-foreground">
            <ShieldCheck className={`h-4 w-4 shrink-0 ${ORANGE}`} />
            <span>Signed installer · SHA-256 verified · Free for all Cyberify team members — sign in with your company account</span>
          </div>
        </div>

        {/* Requirements + Steps */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-foreground/10 bg-card p-6">
            <h3 className="text-lg font-semibold">System Requirements</h3>
            <ul className="mt-4 space-y-2">
              {props.requirements.map(r => (
                <li key={r} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${ORANGE}`} />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-foreground/10 bg-card p-6">
            <h3 className="text-lg font-semibold">Installation Steps</h3>
            <ol className="mt-4 space-y-3">
              {props.steps.map((s, i) => (
                <li key={s} className="flex items-start gap-3 text-sm">
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${BG_ORANGE_SOFT} ${ORANGE} text-xs font-bold`}>{i + 1}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Extensions */}
        <div className="mt-8 rounded-2xl border border-foreground/10 bg-card p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Chrome className={`h-6 w-6 ${ORANGE}`} />
            <h3 className="text-xl font-semibold">Recommended Browser Extensions</h3>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Pair the desktop app with a browser extension for full website tracking visibility.
          </p>
          <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
            {props.extensions.map(e => (
              <div key={e.name} className="rounded-xl border border-foreground/10 bg-background p-4 soft-focus fade-in-up clickable">
                <p className="text-sm font-semibold">{e.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{e.desc}</p>
                <button
                  onClick={() => triggerDownload(`cyberify-${e.name.toLowerCase().replace(/\s+/g, "-")}.zip`, props.platform)}
                  className={`mt-3 inline-flex items-center gap-2 text-xs font-semibold ${ORANGE} hover:opacity-80`}
                >
                  <Download className="h-3.5 w-3.5" /> Get extension
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Other platforms */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm text-muted-foreground">Need a different OS?</span>
            {[
            { to: "/download/windows", label: "Windows" },
            { to: "/download/linux", label: "Linux" },
          ].filter(o => o.label !== props.platform).map(o => (
            <Link key={o.to} to={o.to} className="rounded-full border border-foreground/15 bg-background px-4 py-2 text-sm font-medium hover:border-foreground/40 clickable">
              {o.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
