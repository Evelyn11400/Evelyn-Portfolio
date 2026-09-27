import Link from "next/link";

const capabilities = [
  "UI/UX Design", "B2B SaaS", "Product Strategy", "Growth Design",
  "Business Models", "User Research", "Workflow UX", "Design Systems",
  "Consumer Apps", "Mobile Experiences", "User Onboarding", "Conversion UX",
  "Information Architecture", "Interaction Design", "Prototyping", "Usability Testing",
];

function ShiftlinePreview() {
  return <div className="shiftline-stage" aria-label="Shiftline restaurant operations dashboard concept">
    <div className="shiftline-window">
      <div className="shiftline-top"><span className="shiftline-brand"><i/> shiftline</span><span>WEEK OF SEP 28 — OCT 4 <b>↗</b></span></div>
      <div className="shiftline-dashboard">
        <aside className="shiftline-sidebar"><strong>Workspace</strong><span className="selected"><i className="nav-icon nav-icon-calendar" aria-hidden="true"/>Schedule</span><span><i className="nav-icon nav-icon-clock" aria-hidden="true"/>Breaks</span><span><i className="nav-icon nav-icon-diamond" aria-hidden="true"/>Tips</span><span><i className="nav-icon nav-icon-team" aria-hidden="true"/>Team</span></aside>
        <div className="shiftline-content"><div className="shiftline-heading"><div><small>MANAGER DASHBOARD</small><h4>Sunday, Sep 27</h4></div><span className="shiftline-action">Publish schedule ↗</span></div>
          <div className="shiftline-stats"><div><small>ON SHIFT</small><strong>24 <em>people</em></strong></div><div><small>BREAK COVERAGE</small><strong>Needs review</strong></div><div><small>TIP POOL</small><strong>Ready to preview</strong></div></div>
          <div className="shiftline-columns"><div className="shiftline-panel"><b>Today's coverage</b><div><span>11:00</span><i/><i/><i/></div><div><span>14:30</span><i/><i className="warning"/><i/></div><div><span>17:00</span><i/><i/><i/></div><p><i className="inline-flag" aria-hidden="true"/>One break overlaps peak coverage</p></div><div className="shiftline-panel side"><b>Shift checklist</b><p><i className="check-icon done" aria-hidden="true"/>Schedule drafted</p><p><i className="check-icon done" aria-hidden="true"/>Team assigned</p><p><i className="check-icon" aria-hidden="true"/>Review break coverage</p><p><i className="check-icon" aria-hidden="true"/>Preview tip split</p></div></div>
        </div>
      </div>
    </div>
    <span className="shiftline-sticker">ONE CLEAR SHIFT<br/>AT A TIME ↗</span>
  </div>;
}

function TracePreview() {
  return <div className="trace-stage" aria-label="Trace AI release review dashboard concept">
    <div className="trace-preview-window">
      <div className="trace-preview-top"><span><i className="trace-mark" aria-hidden="true"/>trace</span><span>ORBIT AI / RELEASES</span><span className="trace-preview-status">REVIEW OPEN</span></div>
      <div className="trace-preview-body"><div className="trace-preview-label">DEMO DATA · MODEL COMPARISON</div><h4>Ready to ship v2.5?</h4><p>Compare the candidate against the live version.</p>
        <div className="trace-preview-grid"><div><small>ANSWER QUALITY</small><b className="positive">Improved ↗</b></div><div><small>LATENCY</small><b>Stable →</b></div><div><small>COST</small><b className="caution">Needs review ↗</b></div></div>
        <div className="trace-preview-row"><span>FLAGGED RESPONSE</span><strong>Policy exception missed</strong><em>Review →</em></div>
      </div>
    </div>
    <span className="trace-stage-label">HUMAN DECISIONS<br/>FOR AI RELEASES</span>
  </div>;
}

function TempoPreview() {
  return (
    <div className="tempo-stage" aria-label="Tempo mobile product preview">
      <div className="orb orb-one" /><div className="orb orb-two" />
      <div className="phone phone-back" aria-hidden="true">
        <div className="phone-bar" /><p className="phone-kicker">YOUR WEEK</p>
        <div className="week-dots">{["M","T","W","T","F"].map((day,index)=><span key={`${day}-${index}`} className={index===3?"active":""}>{day}</span>)}</div>
        <div className="mini-event wide"/><div className="mini-event"/><div className="mini-event warm"/>
      </div>
      <div className="phone phone-front">
        <div className="phone-bar" /><p className="phone-kicker">GOOD MORNING, MAYA</p><h3>Today</h3>
        <div className="energy-card"><div className="energy-ring"><span>72%</span></div><div><b>Balanced</b><small>Your afternoon may feel busy.</small></div></div>
        <p className="phone-label">UP NEXT</p>
        <div className="event-row"><i className="dot violet"/><div><b>Client presentation</b><small>11:00 AM · High energy</small></div></div>
        <div className="event-row"><i className="dot blue"/><div><b>Lunch break</b><small>1:00 PM · Recovery</small></div></div>
      </div>
    </div>
  );
}

export default function Home() {
  return <main>
    <header className="site-nav shell"><Link className="wordmark" href="#top" aria-label="Evelyn Li home">EL<span>.</span></Link><nav aria-label="Main navigation"><Link href="#work">Work</Link><Link href="/about">About</Link><a href="mailto:hello@evelynli.work">Contact</a></nav></header>
    <section className="hero shell home-hero-motion" id="top">
      <div className="availability home-reveal home-reveal-1"><span/> AVAILABLE FOR UI/UX DESIGN ROLES</div>
      <h1 className="home-hero-title"><span className="hero-line home-reveal home-reveal-2">UI/UX designer</span><span className="hero-line home-reveal home-reveal-3">for <em>work <br className="mobile-break"/>and life.</em></span></h1>
      <div className="hero-bottom home-reveal home-reveal-4"><p>I’m Evelyn Li. I connect <strong>SaaS product design</strong>, <strong>business models</strong>, and user needs to create new paths to <strong>growth</strong>.</p><a className="circle-link" href="#work" aria-label="View selected work"><span className="hero-arrow-fixed" aria-hidden="true"><span className="hero-arrow-shaft"/><span className="hero-arrow-head"/></span></a></div>
    </section>
    <div className="ticker home-reveal home-reveal-5" aria-hidden="true"><div>{[...capabilities,...capabilities].map((item,i)=><span key={`${item}-${i}`}>{item}<b>✦</b></span>)}</div></div>
    <section className="work-section shell" id="work">
      <div className="section-heading"><span>01</span><h2>Selected work</h2><p>Research-led products shaped through systems thinking and visual craft.</p></div>
      <Link className="project-card motion-project-card" href="/work/tempo">
        <div className="project-meta"><span>01 Case Study</span><span>2025</span></div><TempoPreview/>
        <div className="project-copy"><div><h3>Tempo</h3><p>Planning life around energy, not just time.</p></div><span className="project-arrow"><i className="arrow-icon arrow-up-right" aria-hidden="true"/></span></div>
        <div className="tags"><span>UX Research</span><span>Product Strategy</span><span>Mobile UI</span></div>
      </Link>
      <Link className="project-card project-card-second motion-project-card" href="/work/shiftline">
        <div className="project-meta"><span>02 Case Study</span><span>Concept · 2026</span></div><ShiftlinePreview/>
        <div className="project-copy"><div><h3>Shiftline</h3><p>A clearer way to run the people side of a restaurant shift.</p></div><span className="project-arrow"><i className="arrow-icon arrow-up-right" aria-hidden="true"/></span></div>
        <div className="tags"><span>B2B SaaS</span><span>Workflow UX</span><span>Product Strategy</span></div>
      </Link>
      <Link className="project-card project-card-third motion-project-card" href="/work/trace">
        <div className="project-meta"><span>03 Case Study</span><span>Concept · 2026</span></div><TracePreview/>
        <div className="project-copy"><div><h3>Trace</h3><p>A release review workspace for teams building AI products.</p></div><span className="project-arrow"><i className="arrow-icon arrow-up-right" aria-hidden="true"/></span></div>
        <div className="tags"><span>B2B SaaS</span><span>AI Product Design</span><span>Enterprise UX</span></div>
      </Link>
    </section>
    <footer className="footer shell"><p>© 2026 Evelyn Li</p><div><a href="mailto:hello@evelynli.work">Email</a><a href="#top">Back to top ↑</a></div></footer>
  </main>;
}
