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
    title: "See staffing gaps and urgent issues in one view.",
    body: "The overview shows how many employees are scheduled, who is currently working, and which staffing issues require attention. Managers can check the shift without opening each employee record.",
    detail: "Late arrivals, uncovered roles, upcoming breaks, and overtime risks appear before general statistics so managers can decide what to address first.",
    image: "/tempo/01%20-%20Today%20operations%20overview.png",
    alt: "Shiftline Today operations overview interface",
  },
  {
    step: "02",
    eyebrow: "LIVE SHIFT",
    title: "Track who is working, late, on break, or arriving next.",
    body: "Live Shift combines attendance status with role and shift timing. Managers can see the current team, upcoming arrivals, late employees, and active breaks without comparing the schedule with a separate time clock.",
    detail: "Each employee row shows the information needed during service: role, scheduled hours, current status, and the next relevant change.",
    image: "/tempo/03%20%E2%80%94%20Live%20shift.png",
    alt: "Shiftline Live Shift interface",
  },
  {
    step: "03",
    eyebrow: "TIME & BREAKS",
    title: "Schedule breaks without leaving a station uncovered.",
    body: "Time & Breaks shows each employee’s break status beside role coverage. Before approving or moving a break, managers can see whether the change would leave the floor, kitchen, or a specific station short-staffed.",
    detail: "Coverage warnings explain the affected role and time period. The manager can adjust the break while keeping control of the final decision.",
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
      <h1 className="shiftline-enter shiftline-enter-2">Manage staffing before<br/><em>service is affected.</em></h1>
      <p className="shiftline-hero-summary shiftline-enter shiftline-enter-3">Shiftline gives restaurant managers one place to monitor attendance, check role coverage, and schedule employee breaks during a live shift.</p>
      <div className="case-meta shiftline-enter shiftline-enter-4"><div><span>ROLE</span><b>Product Designer</b></div><div><span>FOCUS</span><b>B2B SaaS · Workflow UX</b></div><div><span>PLATFORM</span><b>Desktop</b></div><div><span>YEAR</span><b>2026</b></div></div>
    </section>

    <section className="shiftline-ui-hero" aria-label="Shiftline product interface">
      <div className="shiftline-ui-orb shiftline-ui-orb-a"/><div className="shiftline-ui-orb shiftline-ui-orb-b"/>
      <img src={screens[0].image} alt={screens[0].alt}/>
    </section>

    <section className="case-block shell shiftline-reveal"><p className="eyebrow">THE CHALLENGE</p><div><h2>Managers piece together staffing decisions across schedules, messages, and time-clock records.</h2><p>While working in a restaurant, I saw managers coordinate employee schedules, attendance, breaks, shift changes, and coverage across front- and back-of-house roles.</p><p>A call-out, late arrival, or delayed break can leave a station uncovered during service. The manager often has to compare several tools to understand who is available, which role is affected, and what adjustment is possible.</p><p>Shiftline brings those signals into one operational view so the manager can recognize a coverage problem and respond before service is affected.</p><p><strong>How might we help restaurant managers identify staffing conflicts and make coverage decisions from one place?</strong></p><p className="shiftline-note">This independent product study is informed by my restaurant operations experience. It has not been launched or evaluated with formal user testing.</p></div></section>

    <section className="shiftline-audience shell shiftline-reveal">
      <p className="eyebrow">TARGET AUDIENCE</p>
      <div className="shiftline-audience-head"><h2>Restaurant managers coordinating staffing during service.</h2><p>Shiftline supports managers who monitor attendance, assign breaks, respond to call-outs, and maintain coverage across front- and back-of-house roles.</p></div>
      <div className="shiftline-audience-grid">
        <article><span>PRIMARY USER</span><h3>Restaurant General Manager</h3><p>Owns staffing decisions, attendance issues, break timing, and the operational health of the shift.</p></article>
        <article><span>CONTEXT</span><h3>Full-service restaurants</h3><p>Teams with multiple front- and back-of-house roles where one staffing change can affect several stations at once.</p></article>
        <article><span>CORE NEED</span><h3>Immediate staffing visibility</h3><p>Needs to know who is working, which roles are short-staffed, what changes next, and where action is required.</p></article>
      </div>
    </section>

    <section className="shiftline-competitive shiftline-reveal">
      <div className="shell">
        <p className="eyebrow">COMPETITOR ANALYSIS</p>
        <div className="shiftline-competitive-head"><h2>Scheduling tools track employees. Shiftline connects each change to restaurant coverage.</h2><p>I reviewed established workforce products to compare scheduling, attendance, break management, and live-shift features. Shiftline focuses on the manager’s immediate question: how does this staffing change affect service right now?</p></div>
        <div className="shiftline-competitor-table">
          <div className="shiftline-competitor-row header"><span>PRODUCT</span><span>STRONG AT</span><span>SHIFTLINE OPPORTUNITY</span></div>
          <div className="shiftline-competitor-row"><strong>7shifts</strong><span>Restaurant-specific scheduling, availability, time off, shift coverage, and labor compliance.</span><span>Make live operational risk—not only schedule creation—the center of the manager view.</span></div>
          <div className="shiftline-competitor-row"><strong>Homebase</strong><span>Scheduling, time clocks, break management, team communication, and payroll for hourly teams.</span><span>Reduce the distance between attendance data and the coverage decision a manager needs to make during service.</span></div>
          <div className="shiftline-competitor-row"><strong>Deputy</strong><span>Scheduling, real-time attendance, break planning, compliance, and workforce forecasting.</span><span>Present break timing, role coverage, and upcoming changes as one restaurant-specific operational picture.</span></div>
          <div className="shiftline-competitor-row shiftline-row-highlight"><strong>Shiftline</strong><span>Live shift awareness for restaurant managers.</span><span>Connect current staffing, near-term changes, and coverage conflicts in one decision-oriented workspace.</span></div>
        </div>
      </div>
    </section>

    <section className="shiftline-strategy shiftline-reveal"><div className="shell"><p className="eyebrow">PRODUCT STRATEGY</p><div className="shiftline-strategy-head"><h2>One workflow for planning, monitoring, and resolving each shift.</h2><p>Managers begin with the scheduled team, monitor attendance and breaks during service, resolve coverage conflicts, and review time records after the shift.</p></div><div className="shiftline-strategy-flow"><span><b>01</b>PLAN STAFFING</span><i>→</i><span><b>02</b>MONITOR SHIFT</span><i>→</i><span><b>03</b>FIX COVERAGE</span><i>→</i><span><b>04</b>REVIEW TIME</span></div></div></section>

    <section className="shiftline-permissions shell shiftline-reveal">
      <p className="eyebrow">ROLE & PERMISSION SYSTEM</p>
      <div className="shiftline-permissions-head"><h2>Give each role access to the schedules, records, and controls they need.</h2><p>Employees can manage personal shift information. Managers can update attendance and breaks. Owners retain access to business settings, labor data, and higher-impact controls.</p></div>
      <div className="shiftline-permission-story">
        <article><span>01 · ROLE HIERARCHY</span><h3>Define responsibility from owner to employee.</h3><p>The hierarchy separates business oversight, restaurant management, live-shift supervision, and personal employee tasks. Each level receives a clear scope of responsibility.</p><div className="shiftline-permission-image"><img src="/tempo/Role%20hierarchy.png" alt="Shiftline role hierarchy showing access levels across restaurant workforce roles"/></div></article>
        <article><span>02 · PRODUCT ACCESS</span><h3>Map each role to specific product actions.</h3><p>The access matrix shows who can view labor data, edit schedules, manage attendance, approve breaks, and update personal availability. This removes irrelevant controls from each user’s interface.</p><div className="shiftline-permission-image"><img src="/tempo/Product%20access.png" alt="Shiftline product access matrix showing permissions by role and product area"/></div></article>
      </div>
      <div className="shiftline-permission-takeaway"><small>DESIGN DECISION</small><p>Permissions are part of the product architecture—not an admin setting added later. The role model determines what each user can see, what they can change, and how much operational context they receive.</p></div>
    </section>

    <section className="shiftline-decisions shell">
      <div className="shiftline-decisions-intro shiftline-reveal"><p className="eyebrow">KEY PRODUCT DECISIONS</p><h2>Three screens for monitoring staffing and preventing coverage gaps.</h2></div>
      {screens.map((screen,index)=><article className={"shiftline-decision "+(index%2 ? "reverse image-first" : "")} key={screen.step}>
        <div className="shiftline-decision-copy"><span>{screen.step} · {screen.eyebrow}</span><h3>{screen.title}</h3><p>{screen.body}</p><p className="shiftline-decision-detail">{screen.detail}</p></div>
        <div className="shiftline-product-screen"><img src={screen.image} alt={screen.alt}/></div>
      </article>)}
    </section>

    <section className="case-ending shiftline-ending"><div className="shell"><p>NEXT STEP</p><h2>Test whether managers can recognize coverage risk and act on it quickly during active service.</h2><Link href="/#work">Back to selected work ↗</Link></div></section>
  </main>;
}
