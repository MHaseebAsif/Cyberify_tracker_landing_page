import { createFileRoute } from "@tanstack/react-router";
import { Terminal } from "lucide-react";
import { DownloadPage } from "@/components/DownloadPage";

export const Route = createFileRoute("/download/linux")({
  head: () => ({
    meta: [
      { title: "Download for Linux — Cyberify Activity Tracker" },
      { name: "description", content: "Download the Cyberify Activity Tracker for Linux — .deb, .rpm, AppImage and tarball builds." },
      { property: "og:title", content: "Download Cyberify for Linux" },
      { property: "og:description", content: "Get .deb, .rpm and AppImage builds for Ubuntu, Debian, Fedora and Linux Mint." },
    ],
  }),
  component: () => (
    <DownloadPage
      platform="Linux"
      icon={Terminal}
      tagline="Packages for every major distribution. AppImage for universal compatibility, .deb and .rpm for native installs."
      version="4.2.1"
      releaseDate="Jun 12, 2026"
      requirements={[
        "Ubuntu 20.04+, Debian 11+, Fedora 38+, Linux Mint 21+",
        "glibc 2.31 or later",
        "X11 or Wayland display server",
        "300 MB of free disk space",
      ]}
      variants={[
        { label: "AppImage (recommended)", filename: "Cyberify-4.2.1.AppImage", size: "96.3 MB", note: "Universal — runs anywhere" },
        { label: "Debian / Ubuntu Package", filename: "cyberify_4.2.1_amd64.deb", size: "82.7 MB", note: "Ubuntu, Debian, Mint" },
      ]}
      extensions={[]}
      steps={[
        "Click Download to save your preferred package.",
        "AppImage: chmod +x Cyberify-4.2.1.AppImage && ./Cyberify-4.2.1.AppImage",
        ".deb: sudo dpkg -i cyberify_4.2.1_amd64.deb",
        "Launch Cyberify and sign in to begin tracking.",
      ]}
    />
  ),
});
