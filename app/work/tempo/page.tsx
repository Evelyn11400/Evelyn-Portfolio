import Link from "next/link";

export default function TempoCaseStudy(){return <main className="case-study">
  <header className="site-nav shell"><Link className="wordmark" href="/">EL<span>.</span></Link><nav><Link href="/#work">Work</Link><Link href="/about">About</Link><a href="mailto:hello@evelynli.work">Contact</a></nav></header>
  <section className="case-hero shell"><Link className="back-link" href="/">← Back to work</Link><p className="case-kicker">TEMPO · PERSONAL ENERGY PLANNER</p><h1>Planning around energy,<br/><em>not just time.</em></h1><div className="case-meta"><div><span>ROLE</span><b>UI/UX Designer</b></div><div><span>FOCUS</span><b>Research, UX, Visual Design</b></div><div><span>PLATFORM</span><b>iOS</b></div><div><span>YEAR</span><b>2025</b></div></div></section>
  <section className="case-banner tempo-insight-hero"><div className="tempo-pulse tempo-pulse-green"/><div className="tempo-pulse tempo-pulse-yellow"/><div className="tempo-hero-screen"><img src="/tempo/16%20%C2%B7%20Insights.png" alt="Tempo Insights screen showing weekly energy patterns" /></div></section>
  <section className="case-block shell two-col"><p className="eyebrow">THE CHALLENGE</p><div><h2>Busy schedules hide the energy cost of each commitment.</h2><p>A packed schedule can feel overwhelming even when there is technically enough time for everything. Work meetings, social plans, focused tasks, and personal commitments each affect people differently—and recovery looks different for everyone.</p><p>Some people recharge through social connection, while others regain energy through solitude and personal time. Most scheduling tools treat these activities equally, leaving users to figure out for themselves when they are taking on too much or when they need time to recover.</p><p><strong>How might a calendar show when someone has enough time for an event but not enough energy?</strong></p></div></section>
  <section className="tempo-research">
    <div className="shell">
      <div className="tempo-research-head"><p className="eyebrow">USER RESEARCH</p><div><h2>How people decide whether they have energy for another commitment.</h2><p>I focused on busy students and working professionals aged 18–35 whose weeks combine work, study, social commitments, personal responsibilities, and downtime. The audience was defined by a shared behavior: regularly managing competing demands on their time.</p></div></div>
      <div className="tempo-audience"><span>18–35 <small>YEARS OLD</small></span><div><small>TARGET AUDIENCE</small><strong>Busy students &amp;<br/>working professionals</strong></div></div>
      <div className="tempo-research-goals">
        <article><span>01</span><h3>Planning</h3><p>How do people decide whether they have capacity for another commitment?</p></article>
        <article><span>02</span><h3>Energy</h3><p>Which activities tend to consume or restore their energy?</p></article>
        <article><span>03</span><h3>Recovery</h3><p>How do different people recover after demanding work or social activities?</p></article>
        <article><span>04</span><h3>Awareness</h3><p>When do people realize they have overcommitted themselves?</p></article>
      </div>
      <div className="tempo-method"><p className="eyebrow">RESEARCH METHOD</p><div><h3>Semi-structured interviews</h3><p>I used open-ended questions about recent weeks, scheduling decisions, moments of exhaustion, canceled plans, and recovery habits. I avoided introducing the idea of an “energy planner” early so the conversations could reveal existing behaviors before suggesting a solution.</p><div className="tempo-question-list"><p>How do you usually plan your week?</p><p>When does a day start to feel too busy?</p><p>Does free time on your calendar always feel truly available?</p><p>Which activities drain you, and which help you recharge?</p><p>When do you realize you have scheduled too much?</p></div></div></div>
      <div className="tempo-research-question"><small>CORE RESEARCH QUESTION</small><h2>How might we help people understand the relationship between commitments, energy consumption, and recovery <em>before</em> their schedule becomes overwhelming?</h2></div>
    </div>
  </section>
  <section className="case-block shell two-col"><p className="eyebrow">THE SOLUTION</p><div><h2>Add energy cost, daily pressure, and recovery time to the calendar.</h2><p>Tempo helps people understand how each plan affects their energy, identify demanding days early, and reserve time to recover.</p><div className="insight-row"><span><b>01</b>Estimate event cost</span><span><b>02</b>Forecast daily pressure</span><span><b>03</b>Reserve recovery time</span></div></div></section>
  <section className="tempo-flow">
    <div className="shell">
      <p className="eyebrow">USER FLOW · FROM EVENT TO ENERGY FORECAST</p>
      <div className="tempo-flow-intro"><h2>Use the calendar people already manage.</h2><p>Tempo begins by connecting an existing calendar, then adds energy estimates to the events already there. Users can review daily pressure, identify demanding days, and reserve recovery time without maintaining a second schedule.</p></div>
      <div className="tempo-flow-steps"><span>01 CONNECT CALENDAR</span><i>→</i><span>02 SET BASELINE</span><i>→</i><span>03 REVIEW DAY</span><i>→</i><span>04 CHECK WEEK</span><i>→</i><span>05 LEARN PATTERNS</span></div>

      <article className="tempo-feature">
        <div className="tempo-feature-copy"><span>01 · CONNECT CALENDAR</span><h3>Import the existing schedule in one step.</h3><p>Users can bring in Google Calendar, Apple Calendar, or Outlook. Tempo reads the time and event structure they already use, reducing the setup burden for people who are already managing busy schedules.</p><p className="tempo-detail"><b>Design detail</b> Calendar connection happens at the beginning of onboarding, while a privacy message makes the data relationship visible before users continue.</p></div>
        <div className="tempo-screen"><img src="/tempo/06%20%C2%B7%20Connect%20Calendar.png" alt="Tempo onboarding screen for connecting Google, Apple, and Outlook calendars" /></div>
      </article>

      <article className="tempo-feature reverse">
        <div className="tempo-feature-copy"><span>02 · SET BASELINE</span><h3>Set a personal starting energy level.</h3><p>Before Tempo interprets the calendar, users establish a simple energy baseline. This gives the system a personal starting point instead of assuming that everyone has the same capacity.</p><p className="tempo-detail"><b>Design detail</b> Low, Medium, and High are framed in everyday language. The baseline can change as routines shift, keeping the model flexible rather than treating the first answer as permanent.</p></div>
        <div className="tempo-screen"><img src="/tempo/07%20%C2%B7%20Energy%20Baseline.png" alt="Tempo energy baseline onboarding screen" /></div>
      </article>

      <article className="tempo-feature">
        <div className="tempo-feature-copy"><span>03 · REVIEW DAY</span><h3>See which events create daily pressure.</h3><p>A one-hour presentation may demand more energy than a longer lunch break. Tempo translates existing events into Moderate, High, or Recovery moments and summarizes the combined demand as Daily Pressure.</p><p className="tempo-detail"><b>Design detail</b> The 72% pressure score gives users one immediate signal, while event-level labels explain where that pressure comes from. Recovery appears in the same hierarchy as meetings and social plans.</p></div>
        <div className="tempo-screen"><img src="/tempo/09%20%C2%B7%20Today.png" alt="Tempo Today screen showing daily pressure and event energy levels" /></div>
      </article>

      <article className="tempo-feature reverse">
        <div className="tempo-feature-copy"><span>04 · CHECK WEEK</span><h3>Identify high-demand days before they arrive.</h3><p>The weekly view expands the same energy language across several days. Small color signals make high-demand days visible without requiring users to inspect every event individually.</p><p className="tempo-detail"><b>Design detail</b> Thursday is surfaced as the highest-demand day while the underlying events remain visible. Users can move between the weekly signal and the commitments creating it.</p></div>
        <div className="tempo-screen"><img src="/tempo/10%20%C2%B7%20Calendar.png" alt="Tempo weekly calendar showing energy demand across the week" /></div>
      </article>

      <article className="tempo-feature">
        <div className="tempo-feature-copy"><span>05 · LEARN PATTERNS</span><h3>See which activities require more recovery.</h3><p>Tempo identifies recurring pressure, demanding activity types, and useful recovery habits so users can understand why certain weeks feel harder than others.</p><p className="tempo-detail"><b>Design detail</b> Insights are written as plain-language observations: the busiest day, the most demanding activity, and a helpful recovery habit. This keeps the output actionable instead of presenting another analytics dashboard to decode.</p></div>
        <div className="tempo-screen"><img src="/tempo/16%20%C2%B7%20Insights.png" alt="Tempo Insights screen showing weekly energy patterns" /></div>
      </article>

      <div className="tempo-flow-outcome"><small>DESIGN OUTCOME</small><h2>Tempo shows where energy is spent and helps users reserve recovery time before demanding events.</h2></div>
    </div>
  </section>
  
  <section className="case-ending tempo-next"><div className="shell"><p>FUTURE RESEARCH</p><h2>What needs to be tested next.</h2><div className="tempo-next-grid"><article><span>01</span><h3>How accurate should an energy model feel?</h3><p>Explore how much personalization users need before pressure estimates feel useful and trustworthy without creating excessive setup or tracking.</p></article><article><span>02</span><h3>How does recovery differ from person to person?</h3><p>Study how social connection, solitude, movement, and unstructured time restore energy for different users and contexts.</p></article><article><span>03</span><h3>When should Tempo intervene?</h3><p>Test when warnings and recovery suggestions are helpful, and when they begin to feel intrusive or add another layer of pressure.</p></article><article><span>04</span><h3>Can long-term patterns improve planning?</h3><p>Investigate whether recurring energy patterns can help users make better decisions before accepting new commitments.</p></article></div><Link href="/">Return home ↗</Link></div></section>
</main>}
