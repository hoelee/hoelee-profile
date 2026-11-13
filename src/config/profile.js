export default {
  // Personal info
  name: 'Mr. Hoelee',
  title: 'Senior Full-Stack, DevOps & AI Systems Engineer',
  githubUrl: 'https://github.com/hoelee/hoelee-profile',
  giteaUrl: 'https://git.hoelee.com/hoelee',

  // Animation speed — per-tick delay (ms) and characters written per tick.
  // Effective speed = typingSpeed / charsPerTick. Lower delay = faster;
  // higher charsPerTick = fewer setTimeout hops = much faster and smoother.
  typingSpeed: 1,
  charsPerTick: 5,

  // Resume content in Markdown
  resumeMarkdown: `Mr. Hoelee (Lee Teong Hoe)
====
Senior Full-Stack, DevOps & AI Systems Engineer with 10+ years delivering enterprise software, distributed architectures, and autonomous AI systems.
End-to-end ownership from requirements, architecture, and database design through deployment, monitoring, and ongoing production support.
Independently designed and operates a 3-host production platform (185 Docker containers across 95 Compose stacks on Synology DSM, unRaid, and an Ubuntu VPS) running live services at >99% uptime.

About Me
----
I am a hands-on engineer who likes owning a system from the first requirement to production support.
Day to day that combines enterprise Java Spring Boot and PHP (CodeIgniter/modern) services, custom business architectures, and a self-managed 185-container Linux/Docker infrastructure covering Traefik reverse proxies, Authentik OIDC SSO, PostgreSQL/MySQL replication, and automated backup pipelines.
I operate autonomous AI systems in production: agent runtimes (Hermes Agent, Model Context Protocol - MCP), LLM integration with strict human-in-the-loop gates, local GPU inference (RTX 3060 12GB: LM Studio, llama.cpp, whisper.cpp, ComfyUI), and deterministic-first automation loops.
Creator of Keygate (offline Ed25519 cryptographic software licensing engine) and Digi Kedai (AI customer-service agent).
Writes about the systems publicly: 15+ technical posts on blog.hoelee.com covering real migrations, debugging sessions and AI infrastructure on this platform.

Core Skills
----
  - Languages: PHP, Java, Python, JavaScript, TypeScript, SQL, Bash, Solidity
  - Backend & APIs: Spring Boot, CodeIgniter 4, Node.js, REST API Architecture, Webhooks, Queue & Worker Patterns, Cron Loops, Transactional Email (Postfix/Dovecot/DKIM)
  - Databases & Storage: PostgreSQL (pgvector), MySQL / MariaDB, MySQL Master/Replica, SQLite (WAL mode), Redis, NocoDB
  - DevOps & Infrastructure: Docker, Docker Compose, Portainer, Traefik (custom bot filter, automated ACME TLS), Nginx, Cloudflare / Cloudflare Tunnel, Linux (Debian/Ubuntu), Synology DSM, unRaid, Gitea Actions CI/CD, restic automated backups, Prometheus / Grafana / cAdvisor monitoring, Tor hidden-service publishing
  - AI & Autonomous Agents: Hermes Agent, Model Context Protocol (MCP), OpenAI API, LLM Integration, OmniRoute gateway, n8n, fal.ai / FLUX.1 Kontext image compositing, OCR receipt verification, Local LLM Inference (LM Studio, llama.cpp GGUF, Qwen MoE), ComfyUI, whisper.cpp STT
  - Security & Identity: Authentik (OIDC / OAuth2 SSO), Passbolt, Ed25519 Cryptography, Fail2ban, Secret Management
  - Frontend: JavaScript, TypeScript, Vue 3 + Vite, Astro, React (component practice), HTML5/CSS3, Responsive UI
  - Tooling: Git (Self-Hosted Gitea, GitHub), VS Code, Playwright / Chrome DevTools Protocol automation, Postman

Selected Projects
----
  - Three-Host Production Infrastructure — Self-managed platform running 185 containers across 95 Compose stacks: Synology DSM (101 containers / 54 stacks) for the bulk of services, unRaid (44 / 27) for storage, CI and monitoring, and an Ubuntu 24.04 VPS (40 / 14) as the public edge. Traefik reverse-proxy fleet with automated ACME TLS, authentik OIDC SSO, Gitea Actions CI/CD, MySQL master/replica replication, Prometheus/Grafana monitoring and automated restic backups at >99% uptime.
  - AI Furniture Photo-Remix Plugin (chaijoywood.com) — Commercial WordPress plugin for a furniture manufacturer: a visitor uploads a photo of their own room and the client's furniture is composited into it with fal.ai FLUX.1 Kontext. Async job handling, gallery retention rules, spoof-resistant client-identity handling and an n8n lead relay to Telegram; shipped across 27 versioned releases.
  - Keygate Offline Software Licensing Engine — Standalone cryptographic licensing engine using Ed25519 signatures, machine hardware fingerprinting (CPU, BIOS, motherboard UUID), and anti-tamper counters with zero phone-home requirement.
  - Digi Kedai AI Customer-Service Agent — Telegram customer-service agent in TypeScript behind an OmniRoute model gateway, with persistent user memory (mem0), tool calling and automated payment-webhook verification, running in production on the platform above.
  - Property Platform with Loan Calculator (jomcarirumah.com) — Live property-agency site on WordPress with a custom repayment and instalment calculator that pre-qualifies buyers instead of funnelling them into a contact form.
  - www.hoelee.com & linkd — Modern Astro 5 SSG personal hub (0 KB client JavaScript, Lighthouse mobile score 99, 0ms TBT) backed by linkd, a lightweight Node.js SQLite WAL shortlink engine with Authentik SSO admin.
  - Self-Hosted Local AI Stack — GPU-passthrough Windows 11 VM on unRaid running LM Studio / llama.cpp (Qwen GGUF) for local inference, ComfyUI for image generation and whisper.cpp for speech-to-text, plus a mem0 + OmniRoute + pgvector memory and RAG stack in Docker.
  - Published Technical Blog (blog.hoelee.com) — 15+ posts in English and Chinese, each written out of something that actually happened: a CodeIgniter 4 migration from IIS to OpenLiteSpeed, page-by-page verification of a generated 19-page PDF, RDP brute-force hardening, a self-hosted speech-to-text server.
  - Client Enterprise Systems & Web Builds — Delivered 30+ production websites and business systems for SME, NGO, and e-commerce clients across full lifecycles (requirements, architecture, code, deployment, ongoing maintenance).
  - Real-Time GPS Delivery Tracking Platform — Enterprise Java Spring Boot backend and Android app for real-time delivery tracking, live mapping, and automated dispatch.

Experience
----
  Full Stack Software Engineer — Joywood, Perak, Malaysia (Jan 2020 – Present)
  - Delivered 30+ production websites and business systems for SME, NGO, and e-commerce clients, owning the full lifecycle from requirements through architecture, deployment, and support.
  - Built AI-enabled customer support and workflow automation integrating the OpenAI API and OCR receipt verification, automating routine inquiries and manual data entry.
  - Shipped a customer-facing AI product-visualisation feature on a client storefront (WordPress plugin, fal.ai FLUX.1 Kontext image compositing) through 27 versioned releases with a documented upgrade path.
  - Developed backend services and internal portals in PHP CodeIgniter and Java Spring Boot supporting billing, order processing, and customer operations.
  - Designed and operate the three-host production infrastructure (185 containers across 95 Compose stacks) covering Traefik reverse proxies, authentik SSO, Prometheus/Grafana monitoring, and automated backups.
  - Automated ops pipelines and full-stack delivery in Python, orchestrating agentic coding workflows (Hermes Agent, MCP) with strict CI/CD and regression test gates.

  Founder / Full Stack Developer — Hoelee Enterprise (SifuMail), Malaysia (Sep 2019 – Apr 2023)
  - Founded and operated an independent web development and hosting practice delivering websites, custom web applications, and email hosting to Malaysian SMEs.
  - Built and maintained client WordPress sites with Kadence, Elementor, JetEngine, and custom PHP plugins.
  - Developed full-stack applications in PHP CodeIgniter, Java Spring Boot, and Node.js with modern JavaScript front ends.
  - Administered multi-provider hosting across AWS EC2, Vultr, Exabytes, cPanel, and CyberPanel on Linux and Windows Server environments.

  Project Manager / Software Engineer — EduFly, Malaysia (Aug 2018 – Sep 2019)
  - Led development of an MLM-enabled e-commerce platform with multi-rail payment gateway integration.
  - Coordinated an external development team while owning the internal technical implementation and delivery timeline.
  - Built Java Spring automation tools for Shopee bulk listing, product sourcing, and order processing workflows.
  - Developed chatbot integrations for Telegram, WhatsApp, Facebook Messenger, and web chat, plus email marketing automation.

  Software Engineer — Superceed (M) Sdn. Bhd., Remote (Nov 2015 – Jul 2018)
  - Built enterprise Java Spring Boot web applications and Android apps supporting customer service and food-delivery operations.
  - Developed a real-time GPS delivery-tracking platform for food-delivery logistics, improving dispatch visibility and automated order assignment.
  - Implemented an IBM Watson Assistant chatbot automating routine customer-service conversations.
  - Integrated Speech-to-Text, Text-to-Speech, and facial-recognition verification into enterprise workflows.
  - Designed a Google Maps franchise territory management system, eliminating operational boundary disputes.

Education — Bachelor of Information Systems (Hons)
----
  - Universiti Tunku Abdul Rahman (UTAR), Kampar, Malaysia
  - March 2016 | CGPA: 3.06 / 4.00 — Degree with Merit
  - Verified Certificate: [hoelee.com/cert](https://hoelee.com/cert)

Languages
----
English | Malay | Mandarin | Cantonese | Hokkien

Currently Exploring
----
  - Solidity and smart-contract development (ERC-20 / ERC-721 with Foundry and Hardhat) — self-directed exploration.
  - Autonomous Agent runtimes, tool protocols (MCP), and local MoE model orchestration.
  - Tor hidden-service (onion) publishing, so the same public services stay reachable when the clearnet path does not.


`,

  // Thank you section markdown
  thanksMarkdown: `
Thank you for reading!
----

I'm open to Senior Full-Stack, Platform / DevOps, and AI Systems Engineering roles — building and operating reliable production systems end to end.

* WhatsApp / Call → [+60175885290](tel:+60175885290)
* Email → [me@hoelee.com](mailto:me@hoelee.com)
* Official Portfolio → [hoelee.com](https://www.hoelee.com/) · [hoelee.com/me](https://hoelee.com/me)
* Verified CV & PDF → [doc.hoelee.com/cv.html](https://doc.hoelee.com/cv.html)
* Deep-Dive Blog → [blog.hoelee.com](https://blog.hoelee.com/)
* Self-Hosted Gitea → [git.hoelee.com](https://git.hoelee.com/)
* GitHub Profile → [github.com/hoelee](https://github.com/hoelee/)
* LinkedIn → [linkedin.com/in/hoelee](https://www.linkedin.com/in/hoelee/)
* Location → Kuala Lumpur, Malaysia (Remote GMT+8 · Open to remote, hybrid, or on-site Malaysia)

Where I deliver immediate value:
* Full-stack application architecture (Java Spring Boot, PHP CodeIgniter, TypeScript, Vue 3, PostgreSQL, SQLite WAL)
* Autonomous AI Agents & agentic workflows (Hermes Agent, MCP, OmniRoute, n8n, fal.ai, OCR, local GPU inference)
* Self-hosted infrastructure & DevOps (Docker, Linux, Traefik, authentik SSO, CI/CD, Prometheus/Grafana, restic, Cloudflare Tunnel / Tor egress)
* Legacy system modernization, reliability hardening, and operational automation

  `,

  // CSS animation stages — array of CSS strings typed in sequence
  desktopStyles: [
    `/*
 * Gitea: https://git.hoelee.com/hoelee
 * GitHub: https://github.com/hoelee
 * Hi, I'm Mr. Hoelee — Senior Full-Stack, DevOps & AI Systems Engineer
 * Let me create an animated resume!
 */

/* Add transition effects to all elements */
* {
  transition: all .1s;
}
/* Set background color */
html {
  color: rgb(222,222,222); background: rgb(0,64,64);
}
#content{
  height:70vh;
  margin:0;
  overflow: hidden;
}
#foot{
  min-height:30vh;
  margin:0;
}

/* Set border */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: calc(50vw - 1em); height: 70vh;
  background: rgb(20,20,20);
}
/* Code highlighting */
.token.selector{ color: rgb(130,150,0); }
.token.property{ color: rgb(190,140,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(40,160,150); }

/* Add 3D effect */
html{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; left: .5em; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px);
          transform: rotateY(10deg) translateZ(-100px);
}

/* Prepare an editor */
.resumeEditor{
  position: fixed; right: .5em; top: 0;
  padding: .5em;  margin: .5em;
  width: calc(50vw - 1em); height: 70vh;
  border: 1px solid;
  background: rgb(200,200,200); color: #222;
  overflow: auto;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(-10deg) translateZ(-100px);
          transform: rotateY(-10deg) translateZ(-100px);
}
/* Start writing resume */
`, `
/* Convert Markdown to HTML
 * then add some styles to HTML
 */
.resumeEditor{
  padding: 1em;
}
.resumeEditor h1{
  font-size: 1.3em;
}
.resumeEditor h2{
  font-size: 1.2em;
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
`, `/* Write a thank you note.
 * Thanks for everyone's attention.
 */
.styleEditor{
    width: calc(50vw - 1em);
    height:70vh;
    margin-left:.5em;
}
.resumeEditor{
   width: calc(50vw - 1em);
   height:70vh;
   margin-right:.5em;
}

.thankEditor{
  position: relative; left: 0; top: 0;
  background: #E9D9BB;
  color: #001C42;
  overflow: auto;
  padding: 1.25em 1.75em;
  margin: .75em auto;
  box-sizing: border-box;
}

.thankEditor h2{
  margin-top: 0;
  padding-bottom: .35em;
  border-bottom: 2px solid rgba(0,28,66,.35);
}

/* readable link colour on the light background */
.thankEditor a{
  color: #0b4a6f;
  font-weight: 600;
  text-decoration-color: rgba(11,74,111,.5);
}
.thankEditor a:hover{
  color: #06304a;
  text-decoration-color: #06304a;
}

.thankEditor li::before{
  color: #0b4a6f !important;
}

.thankEditor {
  width: 99vw; min-height: calc(30vh - 1.5em);
  border: 1px solid #ccc;
  font-size: .9em;
  overflow: visible;
}
`,`
.thankEditor{
  padding: 1.25em 1.75em;  margin: .5em auto;
}

.thankEditor ul,.thankEditor ol{
  list-style: none;
}
.thankEditor ul> li::before{
  content: '☞'; color: #0b4a6f;
  margin-right: .5em;
}
.thankEditor ol {
  counter-reset: section;
}
.thankEditor ol li::before {
  counter-increment: section;
  content: counters(section, "☞") " ";
  margin-right: .5em;
}

.thankEditor{
  width: 95vw;
  min-height: calc(30vh - 1.5em);
  margin: .5em auto;
  padding: 1.25em 1.75em;
  box-sizing: border-box;
  overflow: visible;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateX(-10deg) translateZ(-200px);
          transform: rotateX(-10deg) translateZ(-200px);
}

/* keep horizontal scrolling off; allow vertical scroll when short */
body{
  overflow-x: hidden;
}

`],

  mobileStyles: [
    `/*
 * Gitea: https://git.hoelee.com/hoelee
 * GitHub: https://github.com/hoelee
 * Hi, I'm Mr. Hoelee — Senior Full-Stack, DevOps & AI Systems Engineer
 * Let me create an animated resume!
 */

/* Add transition effects to all elements */
* {
  transition: all .2s;
}
/* Set background color */
html {
  color: rgb(222,222,222);
  background: rgb(0,43,54);
}
/* Set border */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  overflow: auto;
  width: 94vw;
  margin: 2.3vh 2vw;
  height: 90vh;
  box-sizing: border-box;
}
/* Too short */
.styleEditor {
  height: 47vh;
}
/* Code highlighting */
.token.selector{
  color: rgb(133,153,0);
}
.token.property{
  color: rgb(187,137,0);
}
.token.punctuation{
  color: yellow;
}
.token.function{
  color: rgb(42,161,152);
}

/* Add 3D effect */
.styleEditor {
  position: relative; left: 0; top: 0;
  margin: 2.3vh 2vw;
}

/* Prepare an editor */
.resumeEditor{
  position: relative;
  left: 0;
  padding: .5em;
  margin: 2.3vh 2vw;
  width: 94vw; height: 48.5vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
  box-sizing: border-box;
}
/* Start writing resume */


`,
    `
/* Convert Markdown to HTML
 * then add some styles to HTML
 */
.resumeEditor{
  padding: 1em;
}
.resumeEditor h1{
  font-size: 1.3em;
}
.resumeEditor h2{
  font-size: 1.2em;
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
`, `
/* Add mobile-optimized styles */
.resumeEditor {
  font-size: 14px;
  line-height: 1.4;
}
.resumeEditor h1 {
  color: #0066cc;
  text-align: center;
  margin-bottom: 0.5em;
}
.resumeEditor a {
  color: #0066cc;
  text-decoration: none;
}
.resumeEditor a:hover {
  text-decoration: underline;
}

/* Thank-you panel below the resume, full width */
.thankEditor {
  position: relative;
  width: 94vw;
  margin: 2vh auto;
  padding: 1.25em 1.25em;
  box-sizing: border-box;
  background: #E9D9BB;
  color: #001C42;
  overflow: auto;
  border: 1px solid #ccc;
  font-size: .9em;
}
.thankEditor h2 {
  margin-top: 0;
  padding-bottom: .35em;
  border-bottom: 2px solid rgba(0,28,66,.35);
}
.thankEditor a {
  color: #0b4a6f;
  font-weight: 600;
}
.thankEditor ul, .thankEditor ol {
  list-style: none;
  padding-left: .25em;
}
.thankEditor ul > li::before {
  content: '☞';
  color: #0b4a6f;
  margin-right: .5em;
}

/* allow vertical scroll, never horizontal */
html, body {
  overflow-x: hidden;
  overflow-y: auto;
  max-width: 100%;
}
`]
}