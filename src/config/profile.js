export default {
  // Personal info
  name: 'Mr. Hoelee',
  title: 'Web3 Developer & Full Stack Engineer',
  githubUrl: 'https://github.com/hoelee/',

  // Animation speed (ms per character typed)
  // Lower = faster. Recommended range: 1 (instant) to 20 (dramatic slow)
  typingSpeed: 1,

  // Resume content in Markdown
  resumeMarkdown: `Mr. Hoelee
====
Hi, I'm Mr. Hoelee — a Web3 Developer & Experience Full Stack Engineer.
I design and build bridges between Web2 and Web3 — crafting scalable backend systems, gas-optimized smart contracts, and immersive decentralized frontends.
My passion lies at the intersection of blockchain innovation, AI automation, and full-stack engineering — shaping how the next internet will work.

About Me
----
I'm a passionate Web3 developer with hands-on experience creating secure, upgradeable, and gas-efficient ERC-20 / ERC-721 smart contracts using Solidity, Hardhat, and Foundry.
Beyond the blockchain, I bring an enterprise-level backend mindset — leveraging Java Spring Boot, CodeIgniter, and Dockerized infrastructure to scale decentralized apps with the reliability of traditional systems.
When I'm not building, I explore the evolving Web3 landscape — from Layer 2 protocols and DAO governance to DeFi innovation and on-chain analytics.
My mission: to merge creativity, code, and cryptography into meaningful digital experiences.

Web3 & Blockchain
----
  - Solidity smart contracts (ERC-20 / ERC-721 / upgradeable patterns)
  - Hardhat, Foundry testing, OpenZeppelin & Chainlink Oracles
  - Alchemy SDK, Polygon, IPFS integration

Frontend Development
----
  - Web3.js / Ethers.js integration
  - JavaScript, jQuery, HTML5, CSS3
  - UI/UX prototyping with Photoshop, Illustrator, Canva

Backend & DevOps
----
  - PHP CodeIgniter (Web2↔Web3 bridge)
  - Java Spring Boot + Hibernate for scalable data layers
  - Databases: MySQL, MongoDB, Memcached, Elasticsearch
  - Docker, Nginx, IIS, OpenLiteSpeed, Apache Tomcat, WordPress
  - Server management (Windows, Ubuntu, unRaid, DSM)

Work Ethic
----
  - Effective Communicator: Strong written & verbal clarity in remote teams
  - Problem-Solver: Adaptive mindset for complex, high-speed development
  - Continuous Learner: Always exploring blockchain advancements
  - AI-Driven: Using AI to accelerate workflows and creative tasks
  - Client-Focused: Prioritizing real solutions and transparent delivery

Education - Bachelor of Information System (Hons)
----
  - Universiti Tunku Abdul Rahman (UTAR), Kampar, Malaysia
  - March 2016 | CGPA: 3.06 / 4.00 - Degree In Merit
  - Download Certificate → [hoelee.com/cert](https://hoelee.com/cert)

Languages
----
English | Malay | Mandarin | Cantonese | Hokkien

Interests
----
  - DeFi Innovation
  - DAO Governance
  - AI-assisted Development
  - Cryptography
  - On-Chain Analytics


`,

  // Thank you section markdown
  thanksMarkdown: `
Thank you for reading!
----

I'm open to remote collaborations and Web3-driven projects.

Let's build something that connects the decentralized future with real-world impact.

* WhatsApp Mr Hoelee Now  → [+6012-7972969](https://wa.me/60127972969)
* Email Mr Hoelee Now  → [me@hoelee.com](mailto:me@hoelee.com)
* Passionate about bridging the gap between traditional systems and decentralized technologies
* Ready to contribute to innovative Web3 projects that solve real-world problems
* Available for remote collaboration with forward-thinking teams and startups
* Let's discuss how we can leverage blockchain technology to create meaningful digital experiences

Get in touch to explore opportunities in:
* DeFi protocol development
* Smart contract architecture and optimization
* Web3 frontend integration
* Scalable backend systems for dApps
* Cross-chain solutions and Layer 2 implementations

  `,

  // CSS animation stages — array of CSS strings typed in sequence
  desktopStyles: [
    `/*
 * GitHub: https://github.com/hoelee/
 * Hi, I'm Mr. Hoelee — Web3 Developer & Full Stack Engineer
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
}
#foot{
  height:29vh;
  margin:0;
}

/* Set border */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 50vw; height: 70vh;
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
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px);
          transform: rotateY(10deg) translateZ(-100px);
}

/* Prepare an editor */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 50vw; height: 70vh;
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
  padding: 0.5em;
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
    width:49vw;
    height:70vh;
    margin-left:1.2vw;
}
.resumeEditor{
   width:49vw;
   height:70vh;
   margin-right:1.2em;
}

.thankEditor{
  position: relative; left: 0; top: 0;
  background: #E9D9BB;
  color: #001C42;
  overflow: auto;
}

.thankEditor {
  width: 99vw; height: 45vh;
  border: 1px solid #ccc;
  font-size: .9em;
}
`,`
.thankEditor{
  padding: .5em;  margin: .5em; margin-top:1em;
}

.thankEditor ul,.thankEditor ol{
  list-style: none;
}
.thankEditor ul> li::before{
  content: '☞'; color: red;
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
  height: 45vh;
  margin: 0 auto;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateX(-10deg) translateZ(-200px);
          transform: rotateX(-10deg) translateZ(-200px);
}

`],

  mobileStyles: [
    `/*
 * GitHub: https://github.com/hoelee/
 * Hi, I'm Mr. HoeleeWeb3 Developer & Full Stack Engineer
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
  width: 96vw;
  margin: 2.3vh 2vw;
  height: 90vh;
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
  position: fixed; left: 0; top: 0;
  transform: rotateX(-10deg) translateZ(-50px) ;
}

/* Prepare an editor */
.resumeEditor{
  position: fixed;
  top: 48%; left: 0;
  padding: .5em;  margin: 1.5vh;
  width: 94vw; height: 48.5vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
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
`]
}
