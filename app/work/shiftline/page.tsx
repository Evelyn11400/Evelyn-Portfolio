import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shiftline — Evelyn Li",
  description: "A B2B SaaS product design case study for restaurant workforce operations.",
};

const screens = [
  {
    step: "01",
    eyebrow: "TODAY · OPERATIONS OVERVIEW",
    title: "Make today’s operation scannable.",
    body: "Managers need to understand the state of the restaurant in seconds. The overview prioritizes live staffing, coverage risk, and the issues that need attention now, so managers can move from scanning to action without checking every employee individually.",
    detail: "The hierarchy puts operational exceptions ahead of general statistics. The goal is to answer three questions quickly: What is happening now? What needs attention? What is likely to happen next?",
    image: "/tempo/01%20-%20Today%20operations%20overview.png",
    alt: "Shiftline Today operations overview interface",
  },
  {
    step: "02",
    eyebrow: "LIVE SHIFT",
    title: "Turn attendance into an operational view.",
    body: "A time clock can show who clocked in. During service, managers also need to understand what each status means for the shift. Live Shift brings working, break, late, and upcoming changes into one place.",
    detail: "Current status and near-term changes are presented together so the interface supports active service, not just record keeping. Managers can see the shift as it changes instead of reconstructing it from separate systems.",
    image: "/tempo/03%20%E2%80%94%20Live%20shift.png",
    alt: "Shiftline Live Shift interface",
  },
  {
    step: "03",
    eyebrow: "TIME & BREAKS",
    title: "Manage breaks together with coverage.",
    body: "Break decisions affect more than one employee. Shiftline connects break timing with role and station coverage, helping managers see when a routine break could create an operational gap.",
    detail: "The product surfaces the conflict in context and keeps the manager in control of the decision. This creates a foundation for decision support without automating away operational judgment.",
    image: "/tempo/05%20%E2%80%94%20Time%20and%20breaks.png",
    alt: "Shiftline Time and Breaks interface",
  },
];

export default function ShiftlineCaseStudy() {
  return <main className="shiftline-case shiftline-product-case">
    <header className="site-nav shell"><Link className="wordmark" href="/" aria-label="Evelyn Li home">EL<span>.</span></Link><nav aria-label="Main navigation"><Link href="/#work">Work</Link><Link href="/about">About</Link><a href="mailto:hello@evelynli.work">Contact</a></nav></header>

    <section className="case-hero shell shiftline-hero">
      <Link className="back-link" href="/#work">← Back to work</Link>
      <p className="case-kicker shiftline-enter shiftline-enter-1">SHIFTLINE · B2B SAAS PRODUCT DESIGN</p>
      <h1 className="shiftline-enter shiftline-enter-2">Restaurant workforce<br/><em>operations, connected.</em></h1>
      <p className="shiftline-hero-summary shiftline-enter shiftline-enter-3">A workforce operations platform that helps restaurant managers understand staffing, monitor live shifts, and manage breaks before coverage issues affect service.</p>
      <div className="case-meta shiftline-enter shiftline-enter-4"><div><span>ROLE</span><b>Product Designer</b></div><div><span>FOCUS</span><b>B2B SaaS · Workflow UX</b></div><div><span>PLATFORM</span><b>Desktop</b></div><div><span>YEAR</span><b>2026</b></div></div>
    </section>

    <section className="shiftline-ui-hero" aria-label="Shiftline product interface">
      <div className="shiftline-ui-orb shiftline-ui-orb-a"/><div className="shiftline-ui-orb shiftline-ui-orb-b"/>
      <img src={screens[0].image} alt={screens[0].alt}/>
    </section>

    <section className="case-block shell shiftline-reveal"><p className="eyebrow">THE CHALLENGE</p><div><h2>I saw the problem from inside restaurant operations.</h2><p>While working in a restaurant, I worked closely with the day-to-day systems managers rely on to keep service running: schedules, attendance, employee availability, breaks, shift changes, and coverage across front- and back-of-house roles.</p><p>I saw how much of a manager’s attention goes into connecting information that lives in different places. A call-out, late arrival, or break change can quickly become a coverage problem, yet the manager often has to piece together the impact across schedules, messages, time-clock records, and spreadsheets while service is already moving.</p><p>That experience became the starting point for Shiftline: bringing the operational state of a shift into one clearer system.</p><p><strong>How might we give restaurant managers one operational view of the shift, so they can recognize staffing conflicts before they affect service?</strong></p><p className="shiftline-note">This independent product study is informed by my restaurant operations experience. It has not been launched or evaluated with formal user testing.</p></div></section>

    <section className="shiftline-audience shell shiftline-reveal">
      <p className="eyebrow">TARGET AUDIENCE</p>
      <div className="shiftline-audience-head"><h2>Managers responsible for keeping a live shift moving.</h2><p>Shiftline is designed around restaurant managers who coordinate people, timing, and coverage throughout the day—not only when the weekly schedule is created.</p></div>
      <div className="shiftline-audience-grid">
        <article><span>PRIMARY USER</span><h3>Restaurant General Manager</h3><p>Owns staffing decisions, attendance issues, break timing, and the operational health of the shift.</p></article>
        <article><span>CONTEXT</span><h3>Full-service restaurants</h3><p>Teams with multiple front- and back-of-house roles where one staffing change can affect several stations at once.</p></article>
        <article><span>CORE NEED</span><h3>Operational awareness</h3><p>Needs to understand who is working, where coverage is thin, what is changing next, and where intervention is required.</p></article>
      </div>
    </section>

    <section className="shiftline-competitive shiftline-reveal">
      <div className="shell">
        <p className="eyebrow">COMPETITOR ANALYSIS</p>
        <div className="shiftline-competitive-head"><h2>Existing tools cover the workforce lifecycle. I focused Shiftline on the live shift.</h2><p>I reviewed established workforce products to understand where Shiftline should fit. The opportunity was not to remove scheduling, time tracking, or break management, but to connect those signals around the manager’s immediate operational decisions.</p></div>
        <div className="shiftline-competitor-table">
          <div className="shiftline-competitor-row header"><span>PRODUCT</span><span>STRONG AT</span><span>SHIFTLINE OPPORTUNITY</span></div>
          <div className="shiftline-competitor-row"><strong>7shifts</strong><span>Restaurant-specific scheduling, availability, time off, shift coverage, and labor compliance.</span><span>Make live operational risk—not only schedule creation—the center of the manager view.</span></div>
          <div className="shiftline-competitor-row"><strong>Homebase</strong><span>Scheduling, time clocks, break management, team communication, and payroll for hourly teams.</span><span>Reduce the distance between attendance data and the coverage decision a manager needs to make during service.</span></div>
          <div className="shiftline-competitor-row"><strong>Deputy</strong><span>Scheduling, real-time attendance, break planning, compliance, and workforce forecasting.</span><span>Present break timing, role coverage, and upcoming changes as one restaurant-specific operational picture.</span></div>
          <div className="shiftline-competitor-row shiftline-row-highlight"><strong>Shiftline</strong><span>Live shift awareness for restaurant managers.</span><span>Connect current staffing, near-term changes, and coverage conflicts in one decision-oriented workspace.</span></div>
        </div>
      </div>
    </section>

    <section className="shiftline-strategy shiftline-reveal"><div className="shell"><p className="eyebrow">PRODUCT STRATEGY</p><div className="shiftline-strategy-head"><h2>Design around the manager’s operational workflow.</h2><p>Shiftline treats staffing as a connected system. The product moves from understanding the current shift, to identifying operational risk, to supporting the manager’s next decision.</p></div><div className="shiftline-strategy-flow"><span><b>01</b>PLAN</span><i>→</i><span><b>02</b>RUN</span><i>→</i><span><b>03</b>RESOLVE</span><i>→</i><span><b>04</b>REVIEW</span></div></div></section>

    <section className="shiftline-permissions shell shiftline-reveal">
      <p className="eyebrow">ROLE & PERMISSION SYSTEM</p>
      <div className="shiftline-permissions-head"><h2>Different roles need different levels of control.</h2><p>Restaurant workforce software contains sensitive employee and operational data. I designed the access model around a simple principle: give each role the information and actions needed for their level of responsibility, while keeping higher-impact controls limited to managers and owners.</p></div>
      <div className="shiftline-permission-story">
        <article><span>01 · ROLE HIERARCHY</span><h3>Start with responsibility.</h3><p>The hierarchy establishes who is responsible for business oversight, restaurant operations, live-shift decisions, and personal workforce tasks. This creates the foundation for consistent permissions across the product.</p><div className="shiftline-permission-image"><img src="/tempo/Role%20hierarchy.png" alt="Shiftline role hierarchy showing access levels across restaurant workforce roles"/></div></article>
        <article><span>02 · PRODUCT ACCESS</span><h3>Translate roles into product access.</h3><p>I then mapped those responsibilities to product areas. Managers can act on operational issues, while employee access stays focused on personal schedules, time, availability, and shift-related tasks. This keeps the interface relevant to each user and reduces unnecessary controls.</p><div className="shiftline-permission-image"><img src="/tempo/Product%20access.png" alt="Shiftline product access matrix showing permissions by role and product area"/></div></article>
      </div>
      <div className="shiftline-permission-takeaway"><small>DESIGN DECISION</small><p>Permissions are part of the product architecture—not an admin setting added later. The role model determines what each user can see, what they can change, and how much operational context they receive.</p></div>
    </section>

    <section className="shiftline-decisions shell">
      <div className="shiftline-decisions-intro shiftline-reveal"><p className="eyebrow">KEY PRODUCT DECISIONS</p><h2>Three views for the moments that matter during a shift.</h2></div>
      {screens.map((screen,index)=><article className={"shiftline-decision "+(index%2 ? "reverse image-first" : "")} key={screen.step}>
        <div className="shiftline-decision-copy"><span>{screen.step} · {screen.eyebrow}</span><h3>{screen.title}</h3><p>{screen.body}</p><p className="shiftline-decision-detail">{screen.detail}</p></div>
        <div className="shiftline-product-screen"><img src={screen.image} alt={screen.alt}/></div>
      </article>)}
    </section>

    <section className="case-ending shiftline-ending"><div className="shell"><p>NEXT STEP</p><h2>Test whether managers can recognize coverage risk and act on it quickly during active service.</h2><Link href="/#work">Back to selected work ↗</Link></div></section>
  </main>;
}
