<div align="center">
  <img src="./assets/header.svg" alt="Hi, I'm Monaf Horany — Computer Engineer, Full-Stack & Mobile Developer" width="100%">
</div>

<br>

## ⚡ About me

I build products end to end: the web app, the API behind it, and the mobile app in your pocket. My focus right now is **commerce at scale** (catalogs, checkout, CMS-driven storefronts) and **real-time** features, running on infrastructure I own.

```ts
const monaf = {
  title: "Computer Engineer",
  focus: ["full-stack web", "mobile", "real-time"],
  building: "storefront — one commerce platform: web, API, and app",
  stack: {
    web: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "next-intl"],
    api: ["Hono", "Better Auth", "Drizzle ORM", "PostgreSQL", "Redis", "BullMQ"],
    mobile: ["Expo", "React Native"],
    infra: ["Docker", "Dokploy", "Traefik", "Cloudflare", "Turborepo + pnpm"],
  },
  learning: "Go — for the hot paths",
  principles: [
    "stability over novelty",
    "official docs over memory",
    "minimal, typed, shipped",
  ],
} as const;
```

## 🚀 What I'm building

<table>
<tr>
<td width="50%" valign="top">

### 🛒 storefront

A multi-platform e-commerce system in one **Turborepo**: a Next.js storefront and admin dashboard, a Hono API, and an Expo app. All three share a typed Drizzle schema, Zod contracts, and i18n packages.

- 🌍 English · Turkish · Arabic, with **first-class RTL** on web and mobile
- 🧱 Block-based page builder on **Payload CMS**: sliders and grids configurable per breakpoint
- ⚙️ **Redis + BullMQ** for shared state and background jobs
- 🐳 Dockerized and deployed on **Dokploy + Traefik**, behind **Cloudflare**

</td>
<td width="50%" valign="top">

### 📹 1-on-1 video calling

Real-time video calls on a fully self-hosted stack, with no managed platform in the middle.

- 🔗 **WebRTC** peers with **Socket.IO** signaling
- 🛰️ Self-hosted **Coturn** TURN over TLS, with short-lived HMAC credentials
- 🖥️ Web client built as a `useVideoCall` hook with a picture-in-picture UI
- 📱 Mobile client alongside it

</td>
</tr>
</table>

## 🧠 Engineering highlights

- **Streaming bulk import.** Excel files stream as NDJSON into a live table with real-time stats, filters, abort, and an error-CSV export. Images download in parallel, and blank cells never overwrite existing data.
- **Rendering architecture.** Next.js Partial Prerendering serves static shells instantly and defers dynamic data behind Suspense boundaries.
- **Auth that holds up.** Google and Apple sign-in (native and web), email OTP, refresh-token rotation, and AES-256-GCM encryption for PII fields.
- **Filterable catalogs.** Attribute filters combine as AND across attributes and OR within one, with IntersectionObserver paging and race-safe request guards.

## 🛠️ Tech stack

<p align="center">
  <a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=ts,js,react,nextjs,tailwind,nodejs,nestjs,postgres,redis,prisma&perline=10" alt="TypeScript, JavaScript, React, Next.js, Tailwind CSS, Node.js, NestJS, PostgreSQL, Redis, Prisma"></a>
  <br>
  <a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=flutter,dart,go,docker,cloudflare,linux,githubactions,git,pnpm,vscode&perline=10" alt="Flutter, Dart, Go, Docker, Cloudflare, Linux, GitHub Actions, Git, pnpm, VS Code"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Hono-E36002?style=for-the-badge&logo=hono&logoColor=white" alt="Hono">
  <img src="https://img.shields.io/badge/Drizzle-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black" alt="Drizzle">
  <img src="https://img.shields.io/badge/Better_Auth-000000?style=for-the-badge&logo=betterauth&logoColor=white" alt="Better Auth">
  <img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white" alt="Zod">
  <img src="https://img.shields.io/badge/BullMQ-DC382D?style=for-the-badge" alt="BullMQ">
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native">
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo">
  <img src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui">
  <img src="https://img.shields.io/badge/TanStack-FF4154?style=for-the-badge&logo=tanstack&logoColor=white" alt="TanStack">
  <img src="https://img.shields.io/badge/Payload_CMS-000000?style=for-the-badge&logo=payloadcms&logoColor=white" alt="Payload CMS">
  <img src="https://img.shields.io/badge/Turborepo-EF4444?style=for-the-badge&logo=turborepo&logoColor=white" alt="Turborepo">
  <img src="https://img.shields.io/badge/Traefik-24A1C1?style=for-the-badge&logo=traefikproxy&logoColor=white" alt="Traefik">
  <img src="https://img.shields.io/badge/WebRTC-333333?style=for-the-badge&logo=webrtc&logoColor=white" alt="WebRTC">
  <img src="https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socketdotio&logoColor=white" alt="Socket.IO">
</p>

## 📊 GitHub at a glance

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./profile/stats-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="./profile/stats-light.svg">
    <img src="./profile/stats-light.svg" alt="GitHub stats" height="180">
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./profile/langs-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="./profile/langs-light.svg">
    <img src="./profile/langs-light.svg" alt="Most used languages" height="180">
  </picture>
</p>

## 🔭 Right now

- 🏗️ Shipping **storefront** across web, API, and mobile
- 🌱 Learning **Go** for high-throughput pieces: image processing, WebSockets, and event pipelines
- 💬 Ask me about Next.js rendering, monorepos, or self-hosting real-time infrastructure

<br>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./profile/snake-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="./profile/snake-light.svg">
    <img src="./profile/snake-light.svg" alt="Contribution graph being eaten by a snake" width="100%">
  </picture>
</p>

## 🤝 Let's connect

<p align="center">
  <a href="https://monafhorany.com/"><img src="https://img.shields.io/badge/Website-monafhorany.com-7C3AED?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Website"></a>
  <a href="https://www.linkedin.com/in/monaf-horany-40a8471aa/"><img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge" alt="LinkedIn"></a>
  <a href="https://www.instagram.com/monaf_horany/"><img src="https://img.shields.io/badge/Instagram-Follow-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"></a>
  <a href="https://www.facebook.com/abo.almagd.716/"><img src="https://img.shields.io/badge/Facebook-Follow-0866FF?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook"></a>
</p>

<p align="center"><sub>Thanks for stopping by ✨ · cards refresh daily via GitHub Actions</sub></p>
