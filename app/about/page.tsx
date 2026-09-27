import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Evelyn Li",
  description: "Learn about Evelyn Li's UI/UX design background and experience at Tencent, iDen Group, and Meituan.",
};

export default function AboutPage() {
  return <main className="about-page" id="top">
    <header className="site-nav shell"><Link className="wordmark" href="/" aria-label="Evelyn Li home">EL<span>.</span></Link><nav aria-label="Main navigation"><Link href="/#work">Work</Link><Link href="/about" aria-current="page">About</Link><a href="mailto:hello@evelynli.work">Contact</a></nav></header>
    <section className="about shell">
      <div className="section-heading inverse"><span>02</span><h1>About</h1></div>
      <div className="about-grid"><p className="about-lead">I design for the space where <em>people, products, and business goals</em> meet.</p><div className="about-body"><p>I’m Evelyn Li, a UI/UX designer with a background in Integrated Design &amp; Media at NYU. At Tencent, I worked on search suggestions, results, and feedback interfaces. At iDen, I used audience insights to shape content and campaigns. My experience at Meituan gave me a closer view of growth strategy and the real-world constraints behind a product.</p><p>I’m drawn to B2B SaaS and consumer products that make complex decisions feel easier.</p><div className="about-experience"><h2>Experience</h2><div><span>Tencent</span><small>Search Experience Design · 2024</small></div><div><span>iDen Group</span><small>Social Media Content · 2025</small></div><div><span>Meituan</span><small>Government Affairs · 2023</small></div><div><span>New York University</span><small>Integrated Design &amp; Media</small></div></div><a href="mailto:hello@evelynli.work">Let’s work together <span>↗</span></a></div></div>
    </section>
    <footer className="footer shell"><p>© 2026 Evelyn Li</p><div><a href="mailto:hello@evelynli.work">Email</a><Link href="/">Back to work ↗</Link></div></footer>
  </main>;
}
