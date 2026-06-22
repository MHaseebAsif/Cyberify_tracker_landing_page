# Cyberify_tracker_landing_page

This repository contains the Cyberify landing page (Vite + React + TanStack starter).

Quick setup

```bash
# from project root
npm install
npm run dev
```

Git / Push instructions (run from the project root folder where package.json exists):

```bash
# initialize repository (if not already)
git init
# add all files
git add .
git commit -m "Initial commit: landing page"
# set remote (replace with your repo URL)
git remote add origin https://github.com/MHaseebAsif/Cyberify_tracker_landing_page.git
# push to main (you may be prompted for username/password or PAT)
git branch -M main
git push -u origin main
```

If you use a Personal Access Token (PAT) for HTTPS push, use the token as the password when prompted, or configure SSH and use the SSH remote instead:

```bash
# SSH remote example (after adding your SSH key to GitHub)
git remote set-url origin git@github.com:MHaseebAsif/Cyberify_tracker_landing_page.git
git push -u origin main
```

Vercel deploy

- See `vercel.json` recommendation in project root (optional) to enable SPA rewrites.

If you want, I can create `vercel.json` and push it to the repo for you.