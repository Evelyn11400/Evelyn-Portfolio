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
      <div className="case-meta shiftline-enter shiftline-enter-4"><div><span>ROLE</span><b>Product Designer</b></div><div><span>FOCUS</span><b>B2B SaaS · Workflow UX</b></div><div><span>PLATFORM</span><b>Desktop</b></div><div><span>STATUS</span><b>Concept · 2026</b></div></div>
    </section>

    <section className="shiftline-ui-hero" aria-label="Shiftline product interface">
      <div className="shiftline-ui-orb shiftline-ui-orb-a"/><div className="shiftline-ui-orb shiftline-ui-orb-b"/>
      <img src={screens[0].image} alt={screens[0].alt}/>
    </section>

    <section className="case-block shell shiftline-reveal"><p className="eyebrow">THE CHALLENGE</p><div><h2>Restaurant operations are managed across too many disconnected tools.</h2><p>Restaurant managers often coordinate schedules, employee availability, breaks, attendance, and shift changes across spreadsheets, group chats, time clocks, and POS systems.</p><p>Each tool solves one part of the workflow, leaving managers to connect the information manually. A small change can affect station coverage, labor hours, and breaks while service is already moving.</p><p><strong>How might we give managers one operational view of the shift, so they can catch conflicts before they become service problems?</strong></p><p className="shiftline-note">This is an independent concept study informed by restaurant operations experience. It has not been launched or evaluated with formal user testing.</p></div></section>

    <section className="shiftline-strategy shiftline-reveal"><div className="shell"><p className="eyebrow">PRODUCT STRATEGY</p><div className="shiftline-strategy-head"><h2>Design around the manager’s operational workflow.</h2><p>Shiftline treats staffing as a connected system. The product moves from understanding the current shift, to identifying operational risk, to supporting the manager’s next decision.</p></div><div className="shiftline-strategy-flow"><span><b>01</b>PLAN</span><i>→</i><span><b>02</b>RUN</span><i>→</i><span><b>03</b>RESOLVE</span><i>→</i><span><b>04</b>REVIEW</span></div></div></section>

    <section className="shiftline-decisions shell">
      <div className="shiftline-decisions-intro shiftline-reveal"><p className="eyebrow">KEY PRODUCT DECISIONS</p><h2>Three views for the moments that matter during a shift.</h2></div>
      {screens.map((screen,index)=><article className={"shiftline-decision "+(index%2 ? "reverse" : "")} key={screen.step}>
        <div className="shiftline-decision-copy"><span>{screen.step} · {screen.eyebrow}</span><h3>{screen.title}</h3><p>{screen.body}</p><p className="shiftline-decision-detail">{screen.detail}</p></div>
        <div className="shiftline-product-screen"><img src={screen.image} alt={screen.alt}/></div>
      </article>)}
    </section>

    <section className="case-ending shiftline-ending"><div className="shell"><p>NEXT STEP</p><h2>Test whether managers can recognize coverage risk and act on it quickly during active service.</h2><Link href="/#work">Back to selected work ↗</Link></div></section>
  </main>;
}
