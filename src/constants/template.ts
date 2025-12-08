

export const templates = [
    {
        id: "blank",
        label: "Blank Document",
        imageUrl: "/blank-document.svg",
        initialContent: ``
    },

    {
        id: "software-proposal",
        label: "Software development proposal",
        imageUrl: "/software-proposal.svg",
        initialContent: `
        <!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Software Proposal — [Project Name]</title>
  <style>
    :root{
      --accent:#1f6feb;
      --muted:#6b7280;
      --maxw:900px;
      --paper:#fff;
      --bg:#f4f6fb;
      --heading:#0f172a;
      font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      color: #0b1220;
    }
    html,body{height:100%;}
    body{
      background:var(--bg);
      margin:0;
      padding:28px 12px;
      display:flex;
      justify-content:center;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
    }
    .sheet{
      max-width:var(--maxw);
      width:100%;
      background:var(--paper);
      padding:36px 40px;
      box-shadow:0 8px 30px rgba(15,23,42,0.06);
      border-radius:10px;
    }

    header{
      display:flex;
      justify-content:space-between;
      gap:16px;
      align-items:flex-start;
      margin-bottom:20px;
    }
    .brand{
      display:flex;
      gap:12px;
      align-items:center;
    }
    .logo{
      width:56px;height:56px;border-radius:8px;background:linear-gradient(135deg,var(--accent),#7c3aed);
      display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:18px;
    }
    h1{margin:0;font-size:22px;color:var(--heading)}
    .meta{font-size:13px;color:var(--muted);line-height:1.35}
    .toc{
      margin:20px 0;
      padding:16px;
      border-radius:8px;
      background: #fbfdff;
      border:1px solid rgba(15,23,42,0.04);
    }
    nav ol{margin:0;padding-left:18px}
    section{margin-top:22px}
    h2{font-size:18px;margin:8px 0 12px;color:var(--heading)}
    h3{font-size:15px;margin:10px 0;color:var(--heading)}
    p, li{color:#111827;line-height:1.6}
    .muted{color:var(--muted);font-size:13px}
    table{width:100%;border-collapse:collapse;margin-top:8px}
    th,td{padding:10px;border:1px solid rgba(15,23,42,0.06);text-align:left;font-size:14px}
    .grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
    .full{grid-column:1/-1}
    .kpi{display:flex;gap:12px;align-items:center}
    .chip{background:#eef2ff;padding:6px 10px;border-radius:999px;color:var(--accent);font-weight:600;font-size:13px}
    .code{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", monospace;background:#0b1220;color:#e6eef8;padding:8px 10px;border-radius:6px;font-size:13px;display:block}
    footer{margin-top:28px;border-top:1px dashed rgba(15,23,42,0.06);padding-top:12px;color:var(--muted);font-size:13px}
    /* Print */
    @media print{
      body{background:white;padding:0}
      .sheet{box-shadow:none;border-radius:0;padding:18mm}
    }
  </style>
</head>
<body>
  <article class="sheet">
    <header>
      <div class="brand">
        <div class="logo">SP</div>
        <div>
          <h1>Software Proposal — <span class="muted">[Project Name]</span></h1>
          <div class="meta">Prepared for <strong>[Client / Stakeholder]</strong> • Prepared by <strong>[Your Company]</strong> • <time datetime="2025-12-07">Dec 7, 2025</time></div>
        </div>
      </div>
      <div class="meta" style="text-align:right">
        Version: <strong>1.0</strong><br/>
        Confidential
      </div>
    </header>

    <!-- Executive Summary -->
    <section id="executive-summary">
      <h2>1. Executive Summary</h2>
      <p>
        <strong>Problem:</strong> Briefly describe the current pain points or opportunity this software addresses.<br/>
        <strong>Solution:</strong> One-sentence summary of the proposed system.<br/>
        <strong>Outcome:</strong> High-level benefits (reduced cost, faster service, increased revenue, compliance).
      </p>
      <p class="muted">Tip: Keep this section short — executives read this first.</p>
    </section>

    <section class="toc">
      <h3 style="margin-top:0">Table of Contents</h3>
      <nav>
        <ol>
          <li><a href="#executive-summary">Executive Summary</a></li>
          <li><a href="#background">Background & Context</a></li>
          <li><a href="#goals">Goals & Objectives</a></li>
          <li><a href="#scope">Scope</a></li>
          <li><a href="#requirements">Requirements</a></li>
          <li><a href="#architecture">Proposed Architecture</a></li>
          <li><a href="#timeline">Development Timeline</a></li>
          <li><a href="#costs">Costs & Budget</a></li>
          <li><a href="#risks">Risks & Mitigations</a></li>
          <li><a href="#assumptions">Assumptions</a></li>
          <li><a href="#appendix">Appendix</a></li>
        </ol>
      </nav>
    </section>

    <section id="background">
      <h2>2. Background & Context</h2>
      <p>Describe the background: current system, users, metrics, competitors, regulatory constraints, and why the change is needed.</p>
      <ul>
        <li><strong>Current state:</strong> [Short description]</li>
        <li><strong>Pain points:</strong> [List]</li>
        <li><strong>Opportunity:</strong> [List]</li>
      </ul>
    </section>

    <section id="goals">
      <h2>3. Goals & Objectives</h2>
      <p>Define measurable goals and success criteria.</p>
      <ul>
        <li>Objective 1 — <span class="muted">(KPI)</span></li>
        <li>Objective 2 — <span class="muted">(KPI)</span></li>
      </ul>
    </section>

    <section id="scope">
      <h2>4. Scope</h2>
      <div class="grid">
        <div>
          <h3>In Scope</h3>
          <ul>
            <li>Feature A</li>
            <li>Feature B</li>
          </ul>
        </div>
        <div>
          <h3>Out of Scope</h3>
          <ul>
            <li>Feature X</li>
            <li>Feature Y</li>
          </ul>
        </div>
        <div class="full">
          <h3>Stakeholders</h3>
          <p>List project sponsor, product owner, dev lead, QA lead, SME.</p>
        </div>
      </div>
    </section>

    <section id="requirements">
      <h2>5. Requirements</h2>

      <h3>5.1 Functional Requirements</h3>
      <ol>
        <li><strong>User authentication & authorization</strong> — Users can sign in and have role-based access.</li>
        <li><strong>CRUD for core entities</strong> — Create, read, update, delete operations with validation.</li>
        <li><strong>Search & filter</strong> — Fast search across records with pagination.</li>
      </ol>

      <h3>5.2 Non-Functional Requirements</h3>
      <ul>
        <li>Availability: 99.9% SLA target</li>
        <li>Performance: page load &lt; 2s for common flows</li>
        <li>Security: OWASP top 10 considered, TLS for all traffic</li>
        <li>Compliance: GDPR / local data regulations (if applicable)</li>
      </ul>

      <h3>5.3 Data & Integrations</h3>
      <p>Describe data sources, 3rd-party APIs, data retention, import/export requirements.</p>
    </section>

    <section id="architecture">
      <h2>6. Proposed Architecture</h2>
      <p>High-level architecture diagram and component descriptions.</p>

      <h3>6.1 Overview</h3>
      <p>Client (web / mobile) → API Gateway → Application Services → Database → Third-party integrations</p>

      <h3>6.2 Technology Stack</h3>
      <table>
        <thead>
          <tr><th>Layer</th><th>Recommended Tech</th><th>Rationale</th></tr>
        </thead>
        <tbody>
          <tr><td>Frontend</td><td>React / Next.js</td><td>SSR/SEO & fast dev</td></tr>
          <tr><td>Backend</td><td>Node.js / Express or Next.js API Routes</td><td>Single-language stack</td></tr>
          <tr><td>Database</td><td>Postgres / MongoDB</td><td>Relational or document store</td></tr>
          <tr><td>Auth</td><td>Clerk / Auth0</td><td>Managed auth, MFA support</td></tr>
        </tbody>
      </table>

      <h3>6.3 Security Considerations</h3>
      <ul>
        <li>Encryption at rest & in transit</li>
        <li>RBAC & least privilege</li>
        <li>Audit logging</li>
      </ul>
    </section>

    <section id="timeline">
      <h2>7. Development Timeline</h2>
      <p>High-level milestones and estimated dates.</p>
      <table>
        <thead><tr><th>Milestone</th><th>Duration</th><th>Deliverables</th></tr></thead>
        <tbody>
          <tr><td>Discovery</td><td>2 weeks</td><td>Requirements doc, wireframes</td></tr>
          <tr><td>Design</td><td>2 weeks</td><td>UI mockups, API design</td></tr>
          <tr><td>Implementation</td><td>8–12 weeks</td><td>Alpha, Beta releases</td></tr>
          <tr><td>Testing & Launch</td><td>2–4 weeks</td><td>UAT, Production launch</td></tr>
        </tbody>
      </table>
    </section>

    <section id="costs">
      <h2>8. Costs & Budget</h2>
      <p>Estimate (one-time and recurring):</p>
      <table>
        <thead><tr><th>Item</th><th>Estimated Cost</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td>Development (x FTE)</td><td>$xx,xxx</td><td>Assumed team size and weeks</td></tr>
          <tr><td>Hosting</td><td>$xxx / month</td><td>Cloud provider estimate</td></tr>
          <tr><td>Licenses / 3rd party</td><td>$xxx</td><td>Auth, analytics, etc.</td></tr>
        </tbody>
      </table>
    </section>

    <section id="risks">
      <h2>9. Risks & Mitigations</h2>
      <ol>
        <li><strong>Data migration complexity</strong> — mitigate with proof-of-concept and phased migration.</li>
        <li><strong>Third-party API rate limits</strong> — implement caching and backoff.</li>
        <li><strong>Scope creep</strong> — freeze scope for MVP and use change requests.</li>
      </ol>
    </section>

    <section id="assumptions">
      <h2>10. Assumptions</h2>
      <ul>
        <li>Stakeholders provide timely decisions and access to existing data.</li>
        <li>Third-party services are available for integration.</li>
        <li>Compliance requirements clarified during discovery.</li>
      </ul>
    </section>

    <section id="appendix">
      <h2>11. Appendix</h2>
      <h3>Contacts</h3>
      <p>Project sponsor: [name, email, phone]</p>
      <h3>Definitions</h3>
      <p>Glossary of terms used in the proposal.</p>
      <h3>Change Log</h3>
      <p>v1.0 — initial draft</p>
    </section>

    <footer>
      <div>Prepared by <strong>[Your Company]</strong> — Confidential</div>
    </footer>
  </article>
</body>
</html>

        `
    },

    {
        id: "project-proposal",
        label: "Project proposal",
        imageUrl: "/project-proposal.svg",
        initialContent: `
        <!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Project Proposal — [Project Name]</title>
  <style>
    :root{
      --accent:#1f6feb;
      --muted:#6b7280;
      --paper:#fff;
      --bg:#f6f8fb;
      --maxw:900px;
      font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial;
      color:#0b1220;
    }
    body{background:var(--bg);margin:24px;padding:24px;display:flex;justify-content:center}
    .sheet{max-width:var(--maxw);width:100%;background:var(--paper);padding:28px;border-radius:10px;box-shadow:0 8px 30px rgba(2,6,23,0.06)}
    header{display:flex;justify-content:space-between;align-items:start;gap:12px;margin-bottom:18px}
    .brand{display:flex;gap:12px;align-items:center}
    .logo{width:56px;height:56px;border-radius:8px;background:linear-gradient(135deg,var(--accent),#7c3aed);display:flex;align-items:center;justify-content:center;color:white;font-weight:700}
    h1{margin:0;font-size:20px}
    .meta{font-size:13px;color:var(--muted)}
    .toc{margin:14px 0;padding:12px;border-radius:8px;background:#fbfdff;border:1px solid rgba(2,6,23,0.04)}
    section{margin-top:18px}
    h2{font-size:16px;margin:8px 0 10px}
    p, li{line-height:1.6;color:#111827}
    table{width:100%;border-collapse:collapse;margin-top:8px}
    th,td{padding:8px;border:1px solid rgba(2,6,23,0.06);text-align:left;font-size:14px}
    .grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
    .muted{color:var(--muted);font-size:13px}
    footer{margin-top:18px;border-top:1px dashed rgba(2,6,23,0.06);padding-top:10px;color:var(--muted);font-size:13px}
    @media print{body{background:white;padding:0} .sheet{box-shadow:none;border-radius:0;padding:18mm}}
  </style>
</head>
<body>
  <article class="sheet">
    <header>
      <div class="brand">
        <div class="logo">PP</div>
        <div>
          <h1>Project Proposal — <strong>[Project Name]</strong></h1>
          <div class="meta">Prepared for <strong>[Client]</strong> • Prepared by <strong>[Your Company]</strong> • <time datetime="2025-12-07">Dec 7, 2025</time></div>
        </div>
      </div>
      <div class="meta" style="text-align:right;">
        Version 1.0<br/>
        Confidential
      </div>
    </header>

    <section id="exec">
      <h2>1. Executive Summary</h2>
      <p><strong>Problem / Opportunity:</strong> One- or two-sentence statement of the issue or opportunity this project addresses.</p>
      <p><strong>Proposed Solution:</strong> One-sentence summary of the proposed product/service and primary benefit.</p>
      <p class="muted">Short and actionable — decision-makers read this first.</p>
    </section>

    <section class="toc">
      <strong>Contents</strong>
      <ol style="margin:8px 0 0 18px;">
        <li>Background</li>
        <li>Goals & Success Criteria</li>
        <li>Scope & Deliverables</li>
        <li>Approach & Methodology</li>
        <li>Timeline & Milestones</li>
        <li>Cost & Budget</li>
        <li>Team & Roles</li>
        <li>Risks & Mitigations</li>
        <li>Acceptance & Next Steps</li>
        <li>Appendix</li>
      </ol>
    </section>

    <section id="background">
      <h2>2. Background</h2>
      <p>Context: current state, target users, relevant history, and why this project matters now.</p>
      <ul>
        <li><strong>Current state:</strong> [brief]</li>
        <li><strong>Key pain points:</strong> [list]</li>
        <li><strong>Opportunity:</strong> [list]</li>
      </ul>
    </section>

    <section id="goals">
      <h2>3. Goals & Success Criteria</h2>
      <p>Define measurable outcomes.</p>
      <ul>
        <li>Goal 1 — <span class="muted">Metric / target</span></li>
        <li>Goal 2 — <span class="muted">Metric / target</span></li>
      </ul>
    </section>

    <section id="scope">
      <h2>4. Scope & Deliverables</h2>
      <div class="grid">
        <div>
          <h3>In scope</h3>
          <ul>
            <li>Deliverable A (e.g., MVP product)</li>
            <li>Deliverable B (e.g., API, admin panel)</li>
          </ul>
        </div>
        <div>
          <h3>Out of scope</h3>
          <ul>
            <li>Feature X</li>
            <li>Third-party migration</li>
          </ul>
        </div>
      </div>
      <h3 style="margin-top:12px">Deliverables (detailed)</h3>
      <ol>
        <li><strong>Deliverable 1:</strong> Short description and acceptance criteria.</li>
        <li><strong>Deliverable 2:</strong> Short description and acceptance criteria.</li>
      </ol>
    </section>

    <section id="approach">
      <h2>5. Approach & Methodology</h2>
      <p>How we'll build it: phases, tools, and processes.</p>
      <ul>
        <li><strong>Phase 1 — Discovery:</strong> Requirements, user interviews, wireframes.</li>
        <li><strong>Phase 2 — Design:</strong> UI/UX, architecture design.</li>
        <li><strong>Phase 3 — Implementation:</strong> Development, QA, UAT.</li>
        <li><strong>Phase 4 — Launch & Handover:</strong> Deploy, training, documentation.</li>
      </ul>
    </section>

    <section id="timeline">
      <h2>6. Timeline & Milestones</h2>
      <p>High-level schedule. Adjust dates as needed.</p>
      <table>
        <thead><tr><th>Milestone</th><th>Duration</th><th>Deliverables</th></tr></thead>
        <tbody>
          <tr><td>Discovery</td><td>2 weeks</td><td>Requirements doc, wireframes</td></tr>
          <tr><td>Design</td><td>2 weeks</td><td>Design mockups, API spec</td></tr>
          <tr><td>Implementation (Sprint)</td><td>8–12 weeks</td><td>Working MVP</td></tr>
          <tr><td>Testing & Launch</td><td>2–4 weeks</td><td>UAT, production release</td></tr>
        </tbody>
      </table>
    </section>

    <section id="budget">
      <h2>7. Cost & Budget</h2>
      <p>Estimated costs (one-time and recurring). Numbers are indicative—final quote on acceptance.</p>
      <table>
        <thead><tr><th>Item</th><th>Estimated Cost</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td>Development</td><td>$xx,xxx</td><td>Based on x FTE for y weeks</td></tr>
          <tr><td>Design</td><td>$x,xxx</td><td>UI/UX effort</td></tr>
          <tr><td>Hosting & Services</td><td>$xxx / month</td><td>Cloud, DB, monitoring</td></tr>
          <tr><td>Contingency (10%)</td><td>$x,xxx</td><td>Buffer for unforeseen</td></tr>
        </tbody>
      </table>
    </section>

    <section id="team">
      <h2>8. Team & Roles</h2>
      <p>Who will work on this project.</p>
      <ul>
        <li><strong>Project Sponsor:</strong> [Name]</li>
        <li><strong>Project Manager:</strong> [Name]</li>
        <li><strong>Tech Lead / Developers:</strong> [Names / FTE]</li>
        <li><strong>QA:</strong> [Name]</li>
        <li><strong>UX / Designer:</strong> [Name]</li>
      </ul>
    </section>

    <section id="risks">
      <h2>9. Risks & Mitigations</h2>
      <ol>
        <li><strong>Risk:</strong> Description — <strong>Mitigation:</strong> Action</li>
        <li><strong>Risk:</strong> Description — <strong>Mitigation:</strong> Action</li>
      </ol>
    </section>

    <section id="acceptance">
      <h2>10. Acceptance & Next Steps</h2>
      <p><strong>Acceptance criteria:</strong> Describe how deliverables will be accepted (UAT, sign-off, acceptance tests).</p>
      <p><strong>Next steps:</strong></p>
      <ol>
        <li>Review proposal and provide feedback (by [date]).</li>
        <li>Approve budget and sign agreement.</li>
        <li>Kickoff meeting and schedule discovery.</li>
      </ol>
    </section>

    <section id="appendix">
      <h2>11. Appendix</h2>
      <p>Optional: technical diagrams, detailed estimates, assumptions, references, contracts.</p>
    </section>

    <footer>
      <div class="muted">Prepared by <strong>[Your Company]</strong> — Contact: [email / phone]</div>
    </footer>
  </article>
</body>
</html>

`
    },

    {
        id: "business-letter",
        label: "Business letter",
        imageUrl: "/business-letter.svg",
        initialContent: `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Business Letter</title>
<style>
  body {
    font-family: Inter, Arial, sans-serif;
    margin: 40px auto;
    max-width: 750px;
    line-height: 1.6;
    color: #111;
  }
  .meta { font-size: 14px; color: #555; margin-bottom: 30px; }
  h1 { font-size: 20px; margin-bottom: 25px; }
  .sig { margin-top: 30px; }
</style>
</head>
<body>

<!-- Sender Info -->
<div class="meta">
  <strong>[Your Name]</strong><br>
  [Your Position]<br>
  [Company Name]<br>
  [Address Line 1]<br>
  [Email] • [Phone]<br><br>
  <time>[Date]</time>
</div>

<!-- Recipient Info -->
<div class="meta">
  <strong>[Recipient Name]</strong><br>
  [Recipient Position]<br>
  [Company / Organization]<br>
  [Address Line 1]
</div>

<h1>Business Letter</h1>

<p>Dear [Recipient Name],</p>

<p>
I am writing to discuss <strong>[purpose of the letter]</strong>. We would like to address the following matter:  
<strong>[key point, request, or issue]</strong>.
</p>

<p>
We believe this is an important step toward <strong>[expected outcome or benefit]</strong>.  
Please review the details and let us know if you require clarification.
</p>

<p>
Thank you for your time and cooperation. We look forward to your response.
</p>

<div class="sig">
  Sincerely,<br><br>
  <strong>[Your Name]</strong><br>
  [Your Position]<br>
  [Company Name]
</div>

</body>
</html>

`
    },

    {
        id: "resume",
        label: "Resume",
        imageUrl: "/resume.svg",
        initialContent: `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Resume</title>
<style>
  body {
    font-family: Inter, Arial, sans-serif;
    margin: 40px auto;
    max-width: 800px;
    line-height: 1.5;
    color: #111;
  }
  h1 { margin-bottom: 5px; }
  h2 { margin-top: 30px; font-size: 18px; }
  .section { margin-bottom: 20px; }
  .small { color: #666; font-size: 14px; }
  ul { margin: 5px 0 0 20px; }
</style>
</head>
<body>

<!-- Header -->
<h1>[Your Name]</h1>
<div class="small">
  [Email] • [Phone] • [Website/LinkedIn] • [Location]
</div>

<!-- Summary -->
<h2>Professional Summary</h2>
<p>
A concise summary of your experience, strengths, and career goals.
Example: “Detail-oriented software developer with experience in full-stack development, focusing on React, Node.js, and cloud services.”
</p>

<!-- Skills -->
<h2>Skills</h2>
<ul>
  <li>Skill 1</li>
  <li>Skill 2</li>
  <li>Skill 3</li>
  <li>Skill 4</li>
</ul>

<!-- Experience -->
<h2>Experience</h2>

<div class="section">
  <strong>[Job Title]</strong> — [Company Name]  
  <div class="small">[Start Date] – [End Date / Present]</div>
  <ul>
    <li>Responsibility or achievement 1</li>
    <li>Responsibility or achievement 2</li>
    <li>Responsibility or achievement 3</li>
  </ul>
</div>

<div class="section">
  <strong>[Job Title]</strong> — [Company Name]  
  <div class="small">[Start Date] – [End Date]</div>
  <ul>
    <li>Responsibility or achievement 1</li>
    <li>Responsibility or achievement 2</li>
  </ul>
</div>

<!-- Education -->
<h2>Education</h2>
<div class="section">
  <strong>[Degree / Major]</strong> — [School Name]  
  <div class="small">[Year]</div>
</div>

<!-- Certifications (optional) -->
<h2>Certifications</h2>
<ul>
  <li>[Certification name] — [Year]</li>
</ul>

<!-- Projects (optional) -->
<h2>Projects</h2>
<div class="section">
  <strong>[Project Name]</strong>  
  <ul>
    <li>Brief description of the project, tech stack, and results.</li>
  </ul>
</div>

</body>
</html>

`
    },

    {
        id: "cover-letter",
        label: "Cover-letter",
        imageUrl: "/cover-letter.svg",
        initialContent: `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Cover Letter</title>
<style>
  body{
    font-family: Inter, Arial, sans-serif;
    margin:40px auto;
    max-width:700px;
    line-height:1.6;
    color:#111;
  }
  h1{font-size:20px;margin:0 0 20px;}
  .meta{margin-bottom:30px;font-size:14px;color:#555;}
  .sig{margin-top:30px;}
</style>
</head>
<body>

<div class="meta">
  <strong>[Your Name]</strong><br>
  [Phone Number] • [Email] • [Website/LinkedIn]<br>
  [City, Country]<br><br>
  <strong>[Company Name]</strong><br>
  [Hiring Manager Name]<br>
  [Company Address]<br>
  <time>[Date]</time>
</div>

<h1>Cover Letter — [Job Title]</h1>

<p>
Dear [Hiring Manager Name],
</p>

<p>
I am writing to express my interest in the <strong>[Job Title]</strong> position at <strong>[Company Name]</strong>. With experience in <strong>[your key skill]</strong> and a strong background in <strong>[relevant field]</strong>, I am confident I can contribute effectively to your team.
</p>

<p>
In my recent role at <strong>[Previous Company]</strong>, I achieved <strong>[1–2 measurable achievements]</strong>, demonstrating my ability to deliver results and adapt quickly. I am particularly drawn to <strong>[Company Name]</strong> because of your commitment to <strong>[specific reason related to company/product/team]</strong>.
</p>

<p>
I would welcome the opportunity to contribute my skills in <strong>[your strengths]</strong> to support your team and help advance the goals of <strong>[Company Name]</strong>. I believe my experience and enthusiasm make me a strong match for this role.
</p>

<p>
Thank you for your time and consideration. I look forward to the possibility of discussing how I can add value to your team.
</p>

<div class="sig">
  Sincerely,<br>
  <strong>[Your Name]</strong>
</div>

</body>
</html>

`
    },

    {
        id: "letter",
        label: "Letter",
        imageUrl: "/letter.svg",
        initialContent: `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Letter</title>
<style>
  body{
    font-family: Inter, Arial, sans-serif;
    margin:40px auto;
    max-width:700px;
    line-height:1.6;
    color:#111;
  }
  h1{font-size:20px;margin:0 0 20px;}
  .meta{margin-bottom:30px;font-size:14px;color:#555;}
  .sig{margin-top:30px;}
</style>
</head>
<body>

<div class="meta">
  <strong>[Your Name]</strong><br>
  [Phone] • [Email]<br>
  [Address]<br><br>
  <time>[Date]</time>
</div>

<h1>Letter</h1>

<p>
Dear [Recipient Name],
</p>

<p>
I hope this message finds you well. I am writing regarding <strong>[purpose of the letter]</strong>. I would like to bring to your attention that <strong>[key point or request]</strong>.
</p>

<p>
Please let me know if you need any additional information, and I would be happy to assist.  
Thank you for taking the time to read this letter.
</p>

<div class="sig">
  Sincerely,<br>
  <strong>[Your Name]</strong>
</div>

</body>
</html>

`
    },






]