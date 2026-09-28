import Link from "next/link";
import type { Metadata } from "next";
import "./trace.css";

export const metadata: Metadata = {
  title: "Trace — Evelyn Li",
  description: "Trace is a B2B SaaS platform for AI companies to compare model releases, review failures, and make shared launch decisions.",
};

function TraceMock({ view }: { view: "compare" | "review" | "decision" }) {
  return <div className="trace-mock" aria-label={view === "compare" ? "Version comparison interface" : view === "review" ? "Flagged response review interface" : "Release decision interface"}>
    <div className="trace-mock-top"><b>◈ &nbsp; trace</b><span>ORBIT AI / KNOWLEDGE ASSISTANT</span><small>DEMO DATA</small></div>
    <div className="trace-mock-body">
      <aside><span>▦ &nbsp; Overview</span><span className={view === "compare" ? "active" : ""}>◇ &nbsp; Compare</span><span className={view === "review" ? "active" : ""}>◉ &nbsp; Review queue</span><span className={view === "decision" ? "active" : ""}>✓ &nbsp; Decisions</span><span>▤ &nbsp; History</span></aside>
      <div className="trace-mock-content">
        {view === "compare" && <><div className="trace-mock-heading"><div><small>RELEASE / V2.5</small><h4>Compare versions</h4></div><em>Review open</em></div><div className="trace-mock-versions"><span>Baseline <b>v2.4</b></span><strong>→</strong><span>Candidate <b>v2.5</b></span></div><div className="trace-mock-metrics"><div><small>ANSWER QUALITY</small><b>Improved <i>↗</i></b></div><div><small>RESPONSE TIME</small><b>Stable <i>→</i></b></div><div><small>COST / ANSWER</small><b>Higher <i>↗</i></b></div></div><div className="trace-mock-list"><b>Changes that need a closer look</b><p><span className="trace-dot warning"/> Policy exceptions <strong>Review 4 cases</strong></p><p><span className="trace-dot"/> Document citations <strong>Improved</strong></p><p><span className="trace-dot warning"/> Long questions <strong>Review 2 cases</strong></p></div></>}
        {view === "review" && <><div className="trace-mock-heading"><div><small>REVIEW QUEUE / CASE 04</small><h4>Policy exception missed</h4></div><em>Needs judgment</em></div><div className="trace-mock-question"><small>TEST QUESTION</small><p>Can a customer change the plan after the renewal date?</p></div><div className="trace-mock-answers"><div><small>BASELINE · V2.4</small><p>Changes are available before the next billing cycle. Contact support for exceptions.</p><span>✓ Mentions exception</span></div><div className="candidate"><small>CANDIDATE · V2.5</small><p>Plan changes take effect at the next renewal date.</p><span>⚑ Exception omitted</span></div></div><div className="trace-mock-review"><b>Reviewer note</b><p>Check the billing policy source before this response is approved.</p><span>Assign to product reviewer →</span></div></>}
        {view === "decision" && <><div className="trace-mock-heading"><div><small>RELEASE / V2.5</small><h4>Launch decision</h4></div><em>On hold</em></div><div className="trace-mock-decision"><div><small>QUALITY REVIEW</small><b>Complete <i>✓</i></b></div><div><small>COST REVIEW</small><b>Pending <i>○</i></b></div><div><small>POLICY CASE</small><b>Needs fix <i>!</i></b></div></div><div className="trace-mock-note"><small>DECISION RECORD</small><h5>Hold v2.5 for revision</h5><p>Resolve the policy exception and review the cost change before a new evaluation run.</p><span>Owner: Product lead &nbsp; · &nbsp; Next review: after rerun</span></div><div className="trace-mock-history">Version, evidence, reviewer, and reason stay attached to this decision.</div></>}
      </div>
    </div>
  </div>;
}

export default function TraceCaseStudy() {
  return <main className="trace-case">
    <header className="site-nav shell"><Link className="wordmark" href="/" aria-label="Evelyn Li home">EL<span>.</span></Link><nav aria-label="Main navigation"><Link href="/#work">Work</Link><Link href="/about">About</Link><a href="mailto:hello@evelynli.work">Contact</a></nav></header>
    <section className="case-hero shell"><Link className="back-link" href="/#work">← Back to work</Link><p className="case-kicker">TRACE · AI RELEASE REVIEW PLATFORM</p><h1>Ship AI with<br/><em>eyes open.</em></h1><div className="case-meta"><div><span>ROLE</span><b>UI/UX Designer</b></div><div><span>PRODUCT</span><b>B2B SaaS</b></div><div><span>USERS</span><b>AI Product Teams</b></div><div><span>YEAR</span><b>2026</b></div></div></section>
    <section className="trace-case-banner" aria-label="Trace release review interface"><div className="trace-window"><div className="trace-window-top"><span className="trace-logo">◈ &nbsp; trace</span><span>ORBIT AI / RELEASES</span><span>● &nbsp; REVIEW OPEN</span></div><div className="trace-window-body"><div className="trace-window-main"><small>DEMO DATA · RELEASE REVIEW</small><h2>Assistant v2.4 <span>→</span> v2.5</h2><p>A single place to review what improved and what needs attention before launch.</p><div className="trace-metrics"><div><small>ANSWER QUALITY</small><strong>Improved ↗</strong></div><div><small>LATENCY</small><strong>Stable →</strong></div><div><small>COST PER RESPONSE</small><strong>Higher ↗</strong></div></div><div className="trace-example"><span>FLAGGED EXAMPLE</span><strong>Answer missed a policy exception</strong><p>Review the source, compare both answers, and assign a decision owner.</p></div></div><aside><small>RELEASE CHECKLIST</small><p>✓ Evaluation run complete</p><p>✓ Product review complete</p><p>○ Cost review pending</p><p>○ Final approval pending</p><b>Hold for review</b></aside></div></div></section>
    <section className="case-block shell"><p className="eyebrow">THE OPPORTUNITY</p><div><h2>A better answer in one test can hide a worse experience elsewhere.</h2><p>AI companies compare models across answer quality, speed, and cost. Results often live in separate reports, while examples that need human judgment get passed around in threads. Trace brings the release decision into a shared workspace where evidence and ownership stay together.</p><p className="trace-disclosure">Independent product study. The interface uses illustrative demo data; no customer research or production results are claimed.</p></div></section>
    <section className="trace-audience shell"><p className="eyebrow">TARGET AUDIENCE</p><div><h2>AI teams shipping products to business customers.</h2><p>The example company, Orbit AI, builds a knowledge assistant for enterprise teams. Before releasing v2.5, its product lead needs to understand whether the assistant handles customer questions better without introducing costly or risky regressions.</p><div className="trace-audience-grid"><article><span>PRIMARY USER</span><h3>AI Product Lead</h3><p>Balances user quality with launch timing and owns the final recommendation.</p></article><article><span>PARTNER</span><h3>AI Engineer</h3><p>Investigates failed responses and reruns the candidate after changes.</p></article><article><span>REVIEWER</span><h3>Domain Specialist</h3><p>Judges policy-sensitive examples that require human context.</p></article></div></div></section>
    <section className="trace-landscape"><div className="shell"><p className="eyebrow">PRODUCT LANDSCAPE</p><div className="trace-landscape-head"><h2>Evaluation tools show performance. Trace centers the release decision.</h2><p>I looked at established AI evaluation platforms to frame the product direction. They support experiments, comparisons, and human review. Trace explores how the evidence can be organized around a shared go or hold decision for a cross-functional team.</p></div><div className="trace-landscape-table"><div><strong><a href="https://www.langchain.com/langsmith/evaluation" target="_blank" rel="noopener noreferrer">LangSmith ↗</a></strong><span>Experiment comparison and annotation workflows</span></div><div><strong><a href="https://www.braintrust.dev/product/evaluate" target="_blank" rel="noopener noreferrer">Braintrust ↗</a></strong><span>Evaluation datasets, side-by-side diffs, and review</span></div><div className="trace-landscape-focus"><strong>Trace</strong><span>One release record connecting tradeoffs, flagged cases, owners, and a decision</span></div></div></div></section>
    <section className="case-block shell"><p className="eyebrow">THE WORKFLOW</p><div><h2>From evaluation run to release decision.</h2><p>Teams select a baseline and candidate version, inspect changes by category, review flagged responses, then record a decision with the people responsible for launch.</p><div className="insight-row"><span><b>01</b>Compare versions</span><span><b>02</b>Review failures</span><span><b>03</b>Approve or hold</span></div></div></section>
    <section className="trace-decisions shell"><div className="trace-decisions-intro"><p className="eyebrow">KEY DESIGN DECISIONS</p><h2>Three views move the team from a score to a decision.</h2></div>
      <article className="trace-decision"><div className="trace-decision-copy"><span>01 · VERSION COMPARISON</span><h3>Make tradeoffs visible at a glance.</h3><p>Quality can improve while cost rises. The comparison view keeps both in the same frame, then points reviewers to the categories where a summary score might hide regressions.</p><p className="trace-decision-detail">Design choice: show directional changes first, with the underlying examples one step away.</p></div><TraceMock view="compare"/></article>
      <article className="trace-decision reverse"><div className="trace-decision-copy"><span>02 · FAILURE REVIEW</span><h3>Keep the evidence beside the judgment.</h3><p>Reviewers see the same question answered by both versions. They can inspect the missed policy exception and assign the next action without losing the comparison context.</p><p className="trace-decision-detail">Design choice: separate automated flags from the human decision and its reason.</p></div><TraceMock view="review"/></article>
      <article className="trace-decision"><div className="trace-decision-copy"><span>03 · RELEASE RECORD</span><h3>Turn a review into an accountable next step.</h3><p>The final view names unresolved blockers, the responsible owner, and the condition for another review. The decision stays linked to the exact candidate version.</p><p className="trace-decision-detail">Design choice: a hold is a clear state with a path forward, not a dead end.</p></div><TraceMock view="decision"/></article>
    </section>
    <section className="trace-roles"><div className="shell"><p className="eyebrow">DESIGNED FOR TEAMS</p><h2>Different roles. One release record.</h2><div className="trace-roles-grid"><article><span>PRODUCT</span><h3>What changed?</h3><p>See the tradeoffs that affect users and the launch recommendation.</p></article><article><span>ENGINEERING</span><h3>Where did it fail?</h3><p>Open examples with evaluation context and track follow-up work.</p></article><article><span>REVIEWER</span><h3>Who approved it?</h3><p>Give a decision with a reason, time, and visible ownership.</p></article></div></div></section>
    <section className="trace-pricing shell" aria-labelledby="trace-pricing-title">
      <div className="trace-pricing-intro">
        <p className="eyebrow">BUSINESS MODEL</p>
        <div>
          <h2 id="trace-pricing-title">Plans that grow with the AI product.</h2>
          <p>Trace uses a subscription model based on the number of AI products a team manages.</p>
        </div>
      </div>
      <div className="trace-plan-grid" aria-label="Trace plan comparison">
        <article className="trace-plan">
          <span>STARTER</span>
          <h3>For one AI product</h3>
          <ul>
            <li><b>1</b> AI product</li>
            <li>Basic response testing</li>
            <li>Compare AI versions</li>
          </ul>
        </article>
        <article className="trace-plan trace-plan-featured">
          <span>GROWTH</span>
          <h3>For growing AI teams</h3>
          <ul>
            <li><b>Up to 5</b> AI products</li>
            <li>Advanced response testing</li>
            <li>Compare AI versions</li>
            <li>Team review</li>
            <li>API access</li>
          </ul>
        </article>
        <article className="trace-plan">
          <span>ENTERPRISE</span>
          <h3>For large companies</h3>
          <ul>
            <li><b>Unlimited</b> AI products</li>
            <li>Custom response testing</li>
            <li>Compare AI versions</li>
            <li>Team review</li>
            <li>API access</li>
            <li>Advanced security</li>
          </ul>
        </article>
      </div>
      <p className="trace-pricing-note">Pricing and plan limits are proposed for this case study.</p>
    </section>
    <section className="case-ending"><div className="shell"><p>IN DEVELOPMENT</p><h2>Next: prototype the flagged-example review and test whether teams can make a release decision from the same evidence.</h2><Link href="/#work">Back to selected work ↗</Link></div></section>
  </main>;
}
