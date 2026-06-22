import { createFileRoute } from "@tanstack/react-router";
import { Monitor } from "lucide-react";
import { DownloadPage } from "@/components/DownloadPage";

export const Route = createFileRoute("/download/windows")({
  head: () => ({
    meta: [
      { title: "Download for Windows — Cyberify Activity Tracker" },
      { name: "description", content: "Download the Cyberify Activity Tracker installer (.exe) for Windows 10 and 11." },
      { property: "og:title", content: "Download Cyberify for Windows" },
      { property: "og:description", content: "Get the .exe installer for Windows 10 & 11." },
    ],
  }),
  component: () => (
    <DownloadPage
      platform="Windows"
      icon={Monitor}
      tagline="A lightweight installer for Windows 10 and Windows 11. One click to install, automatic updates included."
      version="4.2.1"
      releaseDate="Jun 12, 2026"
      requirements={[
        "Windows 10 (64-bit) or Windows 11",
        "1 GB RAM minimum, 4 GB recommended",
        "200 MB of free disk space",
        "Internet connection for activation & sync",
      ]}
      variants={[
        { label: "Windows Installer (recommended)", filename: "Cyberify-Setup-4.2.1.exe", size: "82.4 MB", note: "Windows 10 & 11 (x64)" },
        { label: "Portable Build", filename: "Cyberify-Portable-4.2.1.zip", size: "76.1 MB", note: "No install required" },
      ]}
      extensions={[]}
      steps={[
        "Click Download to save the .exe installer.",
        "Double-click Cyberify-Setup-4.2.1.exe to launch.",
        "Follow the installer prompts and accept the license.",
        "Sign in with your Cyberify account to begin tracking.",
      ]}
    />
  ),
});
