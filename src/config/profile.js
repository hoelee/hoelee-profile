export default {
  // Personal info
  name: 'Mr. Hoelee',
  title: 'Full Stack Engineer · AI & Automation · DevOps',
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
Full Stack Engineer with ~10 years building production web systems — PHP/CodeIgniter and Java/Spring backends, relational data layers, and the Docker infrastructure that runs them.
I work end to end: gather the requirements, design the schema and APIs, build the app, deploy it, and keep it running in production.
Recent focus is AI and automation — LLM-backed assistants, OCR document verification, and workflow automation that removes manual work from real business processes.

About Me
----
I'm a hands-on engineer who likes owning a system from the first requirement to production support.
Day to day that means CodeIgniter and Spring Boot services, WordPress builds for clients, and a self-hosted Docker stack of 30+ services (reverse proxy, SSO, databases, monitoring, backups, automation) that I run and maintain myself.
I'm comfortable being the only technical person on a project: talking to the client, making the architecture call, writing the code, and handling the production incident.
I use AI as a working tool — coding assistants, local LLMs, and automation pipelines — to move faster without lowering the quality bar.

Core Skills
----
  - Languages: PHP, Java, JavaScript, SQL, Python (scripting), Bash
  - Backend & Frameworks: CodeIgniter 4, Spring Boot, Spring Data JPA / Hibernate, REST API design, WordPress plugin development
  - Databases: MySQL, PostgreSQL, SQL Server, SQLite, Redis, Elasticsearch, Memcached
  - Frontend: HTML5, CSS3, JavaScript, Vue 3, jQuery, Bootstrap, responsive UI
  - DevOps & Infrastructure: Docker, Docker Compose, Portainer, Traefik, Nginx, IIS, Cloudflare, Linux (Ubuntu/Debian), Windows Server, Synology DSM, unRAID
  - AI & Automation: OpenAI API, LLM integration, prompt engineering, OCR pipelines, IBM Watson Assistant, n8n, local LLM inference (LM Studio, llama.cpp)
  - Tooling: Git (Gitea/GitHub/GitLab), VS Code, NetBeans, Postman, Chrome extension development

Selected Projects
----
  - DigiKedai AI customer-support bot — multi-channel (Telegram + WhatsApp) support bot in TypeScript, LiteLLM + PostgreSQL, containerised on NAS behind a Cloudflare tunnel webhook.
  - OCR invoice verification + AI customer service — replaces manual data entry by extracting and validating receipt fields, with an LLM layer drafting replies.
  - Real-time GPS delivery tracking platform — live order and driver tracking with automated dispatch and scheduling; included the rider-side Android app.
  - Self-hosted production infrastructure — 30+ Docker services across NAS and VPS: Traefik reverse proxy with custom bot-filter middleware, authentik SSO, PostgreSQL/MySQL, backups, monitoring and automation.
  - Digital product catalogue + delivery system — NocoDB catalogue, n8n-backed single-use access links, and per-download logging for digital goods sales.
  - Numerology report engine (CodeIgniter 4) — print-ready A4 report generation staged for token-gated PDF delivery.
  - Client web builds — 30+ delivered SME, NGO and e-commerce sites on WordPress (Kadence, Elementor, JetEngine) plus custom PHP applications.

Experience
----
  Full Stack Software Engineer — Joywood, Perak, Malaysia (2020 – Present)
  - Delivered 30+ production websites and business systems for SME, NGO and e-commerce clients, owning each from requirements through deployment and support.
  - Built AI features into client products: OpenAI-backed assistants, OCR data capture, chatbots and workflow automation.
  - Developed and maintained PHP (CodeIgniter) applications, WordPress plugins and Java Spring Boot services.
  - Designed and operated the self-hosted Docker infrastructure (30+ services) covering auth, monitoring, backup, databases, automation and reverse proxying.

  Project Manager / Software Engineer — Edufly (2019 – 2020)
  - Led development of an MLM e-commerce platform and integrated its payment gateway.
  - Coordinated an external development team and managed delivery scope and timelines.
  - Built Java Spring automation tools for Shopee bulk listing, product scraping and internal workflows.
  - Integrated Telegram, WhatsApp, Facebook Messenger and web chat bots, plus email marketing automation.

  Software Engineer — Superceed (M) Sdn. Bhd., Remote (2016 – 2019)
  - Enterprise Java Spring Boot web applications and Android apps.
  - Real-time GPS delivery tracking platform with live map and automated customer assignment.
  - IBM Watson Assistant chatbot, speech synthesis/recognition and face-recognition customer verification.

Education — Bachelor of Information System (Hons)
----
  - Universiti Tunku Abdul Rahman (UTAR), Kampar, Malaysia
  - March 2016 | CGPA: 3.06 / 4.00 — Degree with Merit
  - Certificate: [hoelee.com/cert](https://hoelee.com/cert)

Languages
----
English | Malay | Mandarin | Cantonese | Hokkien

Currently Learning
----
  - Solidity and smart-contract fundamentals (ERC-20 / ERC-721 with Foundry and Hardhat) — a side interest, not my day job.
  - Local LLM inference and self-hosted AI tooling.


`,

  // Thank you section markdown
  thanksMarkdown: `
Thank you for reading!
----

I'm open to full-time, contract and remote engineering roles — building and running web systems end to end.

The best fit is a team that needs one person who can own the whole stack: backend, frontend, deployment and production support.

* WhatsApp  → [+6012-7972969](https://wa.me/60127972969)
* Email  → [me@hoelee.com](mailto:me@hoelee.com)
* Gitea  → [git.hoelee.com/hoelee](https://git.hoelee.com/hoelee)
* GitHub  → [github.com/hoelee](https://github.com/hoelee/)
* Based in Perak, Malaysia — remote-friendly, open to hybrid in Malaysia

Where I can contribute:
* Full stack application development (PHP/CodeIgniter, Java/Spring Boot, JavaScript)
* AI and automation features — LLM assistants, OCR pipelines, workflow automation
* DevOps and self-hosted infrastructure — Docker, reverse proxy, CI/CD, monitoring, backups
* Taking existing systems in hand: maintenance, upgrades, performance and reliability

  `,

  // CSS animation stages — array of CSS strings typed in sequence
  desktopStyles: [
    `/*
 * Gitea: https://git.hoelee.com/hoelee
 * GitHub: https://github.com/hoelee
 * Hi, I'm Mr. Hoelee — Full Stack Engineer, AI & Automation, DevOps
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
 * Hi, I'm Mr. Hoelee — Full Stack Engineer, AI & Automation, DevOps
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
html{
  perspective: 1000px;
}
.styleEditor {
  position: absolute; left: 0; top: 0;
  transform: rotateX(-10deg) translateZ(-50px) ;
}

/* Prepare an editor */
.resumeEditor{
  position: relative;
  top: 47vh; left: 0;
  padding: .5em;  margin: 1.5vh;
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