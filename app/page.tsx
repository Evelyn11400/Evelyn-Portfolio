import Link from "next/link";

const capabilities = ["B2B SaaS", "Consumer Apps", "Workflow UX", "Design Systems"];

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
    <header className="site-nav shell"><Link className="wordmark" href="#top" aria-label="Evelyn Li home">EL<span>.</span></Link><nav aria-label="Main navigation"><Link href="#work">Work</Link><Link href="#about">About</Link><a href="mailto:hello@evelynli.work">Contact</a></nav></header>
    <section className="hero shell" id="top">
      <div className="availability"><span/> AVAILABLE FOR PRODUCT DESIGN ROLES</div>
      <h1>Product designer<br/>for <em>work <br className="mobile-break"/>and life.</em></h1>
      <div className="hero-bottom"><p>I’m Evelyn Li. I turn complex workflows into usable tools and everyday needs into thoughtful consumer experiences.</p><a className="circle-link" href="#work" aria-label="View selected work">↓</a></div>
    </section>
    <div className="ticker" aria-hidden="true"><div>{[...capabilities,...capabilities].map((item,i)=><span key={`${item}-${i}`}>{item}<b>✦</b></span>)}</div></div>
    <section className="work-section shell" id="work">
      <div className="section-heading"><span>01</span><h2>Selected work</h2><p>Research-led products shaped through systems thinking and visual craft.</p></div>
      <Link className="project-card" href="/work/tempo">
        <div className="project-meta"><span>01 / Mobile Product</span><span>2026</span></div><TempoPreview/>
        <div className="project-copy"><div><h3>Tempo</h3><p>Planning life around energy, not just time.</p></div><span className="project-arrow">↗</span></div>
        <div className="tags"><span>UX Research</span><span>Product Strategy</span><span>Mobile UI</span></div>
      </Link>
    </section>
    <section className="about shell" id="about">
      <div className="section-heading inverse"><span>02</span><h2>About</h2></div>
      <div className="about-grid"><p className="about-lead">I turn layered rules and real-world behavior into digital products that feel <em>considered and clear.</em></p><div className="about-body"><p>My background in visual communication and operations gives me a practical view of product design: understand the system, find the friction, then make the path forward unmistakable.</p><p>I’m interested in B2B SaaS and consumer products, especially experiences that help people make better decisions.</p><a href="mailto:hello@evelynli.work">Let’s work together <span>↗</span></a></div></div>
    </section>
    <footer className="footer shell"><p>© 2026 Evelyn Li</p><div><a href="mailto:hello@evelynli.work">Email</a><a href="#top">Back to top ↑</a></div></footer>
  </main>;
}
