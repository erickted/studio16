import { useState, useRef, useEffect } from "react";import { Link } from "react-router-dom";
import { Img, Reveal, More } from "./ui.jsx";
import { products, projects, tiers, currency, quoteUrl, whatsapp, tiers4 } from "./data.js";


function Cta() {
  const link = `https://wa.me/${whatsapp}?text=${encodeURIComponent("Hi Studio 16, I'd like to talk about my project.")}`;
  return (
    <section className="wrap news">
      <Reveal>
        <h2 className="h2">Ready to start<br />your project?</h2>
        <p className="muted">Message us on WhatsApp and we'll help you plan your space.</p>
      </Reveal>
      <Reveal delay={0.1}>
        <a href={link} target="_blank" rel="noopener noreferrer" className="cta-btn">
          Chat on WhatsApp <span>›</span>
        </a>
      </Reveal>
    </section>
  );
}

const IMG = {
  intro: "bedroom1A.png",       // top, tall
  banner: "bedroom6A.png",      // wide banner
  catalogue: "bedroom2B.png",
  collection: "communalA.png",
  project: "communalC.png",
  life: "communalB.png",        // dark section
};

export function Home() {
  return (
    <>
      <section className="wrap sec sec-grid s-intro">
        <Img name={IMG.intro} tone={0} ratio="4/5" />
        <Reveal className="s-block">
          <h1 className="h2">Studio 16</h1>
          <p>Our studio and showroom bring together luxury furniture and refined aesthetics across four curated living environments.</p>
          <p>The showroom unfolds through four curated living environments, with bespoke furniture, sculptural lighting and handmade kitchens that redefine contemporary living.</p>
          {/* <More to="/about" /> */}
        </Reveal>
      </section>

      <section className="wrap sec">
        <Img name={IMG.banner} tone={1} ratio="21/9" />
        <small className="cap">New collection</small>
      </section>

      <section className="wrap sec sec-grid s-cat">
        <Reveal className="s-block">
          <small className="muted">Catalogue</small>
          <h2 className="h2">S34/5</h2>
          <p>A design universe in constant expansion, from the master bedroom to the dining area, from lighting to lounge spaces.</p>
        </Reveal>
        <div className="s-side">
          <Img name={IMG.catalogue} tone={2} ratio="1/1" />
          {/* <More to="/products">Download S34/5</More> */}
        </div>
      </section>

      <section className="wrap sec sec-grid s-coll">
        <Img name={IMG.collection} tone={3} ratio="3/2" />
        <Reveal className="s-block">
          <h2 className="h2">Home Collection</h2>
          <p>A curated selection of objects for refined living, from wine glass sets and decanters to whisky sets, tableware, cutlery and an exclusive home fragrance.</p>
          {/* <More to="/products" /> */}
        </Reveal>
      </section>

      <section className="wrap sec">
        <Reveal><small className="muted">Projects</small><h2 className="h2">H Istra</h2></Reveal>
        <div style={{ height: 20 }} />
        <Img name={IMG.project} tone={4} ratio="21/9" />
        {/* <More to="/projects" /> */}
      </section>

      <section className="dark">
        <div className="wrap sec">
          <Reveal><h3 className="serif" style={{ marginBottom: 28 }}>H-Life</h3></Reveal>
          <div className="sec-grid s-life">
            <Img name={IMG.life} tone={2} ratio="4/5" />
            <Reveal className="s-block">
              <h2 className="h2">Design Week 2026</h2>
              <p>This year we returned to a landmark venue, deepening our exploration of design as an immersive, sensory experience within a historic industrial hall.</p>
              <p>Rather than presenting individual pieces, we built a coherent setting where the experience is guided by the quality of materials, light and atmosphere.</p>
              {/* <More to="/projects">Read more</More> */}
            </Reveal>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}

function Grid({ items, title, base }) {
  return (
    <section className="wrap page">
      <Reveal as="h1" className="h1">{title}</Reveal>
      <div className="grid">
        {items.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 0.08}>
            <Link to={base} className="card"><Img name={p.img} tone={p.tone} ratio="4/5" /><h3>{p.name}</h3><p className="muted">{p.text}</p></Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
export const Products = () => <Grid items={products} title="Products" base="/contact" />;
export const Projects = () => <Grid items={projects} title="Projects" base="/contact" />;

export function About() {
  return (
    <section className="wrap page">
      <Reveal as="h1" className="h1">About</Reveal>
      <div className="split">
        <Img name="about" tone={1} ratio="4/5" />
        <Reveal className="col"><h2 className="h2">Made slowly, in dialogue with materials</h2>
          <p>We design furniture, lighting and complete interiors for people who value craft. Every piece begins as a conversation between a designer and an artisan.</p>
          <p>Replace this text with your story. Photos live in <code>public/images</code>.</p></Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="wrap page">
      <Reveal as="h1" className="h1">Contact</Reveal>
      <form className="contact" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
        <input required placeholder="Name*" /><input type="email" required placeholder="Email*" />
        <textarea rows="5" placeholder="Message" />
        <button className="btn" disabled={sent}>{sent ? "Message sent" : "Send message"}</button>
      </form>
    </section>
  );
}

export function Pricing() {
  return (
    <section className="wrap page">
      <div className="price-head">
        <Reveal as="h1" className="h1">Define Your Scale</Reveal>
        <Reveal as="p" delay={0.1}>Three ways to work with Studio 16. Choose the level of support that fits your space.</Reveal>
      </div>
      <div className="tiers">
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1} className={"tier" + (t.rec ? " rec" : "")}>
            {t.rec && <span className="flag">Recommended</span>}
            <h3>{t.name}</h3>
            <div className="amt">{currency} {t.price}<small>starting price</small></div>
            {t.amt && <div className="rooms">{t.amt}</div>}
            <p className="desc">{t.desc}</p>
            {/* <Link to="/contact" className="go">Get a quote</Link> */}
            <a href={quoteUrl(t.name)} target="_blank" rel="noopener noreferrer" className="go">Enquire now</a>
            <p className="for">{t.forWho}</p>
            <hr />
            {showFeatures && <ul>{t.features.map((f) => <li key={f}>{f}</li>)}</ul>}
          </Reveal>
        ))}
      </div>
      {/* <p className="fine">Final pricing depends on the size and scope of your project.</p> */}
    </section>
  );
}

const GALLERY = [
  ["bedroom1A.png", "4/5"],
  ["communalA.png", "3/2"],
  ["bedroom6A.png", "1/1"],
  ["communalB.png", "3/4"],
  ["bedroom2B.png", "4/5"],
  ["communalC.png", "3/2"],
  ["carousel1.jpeg", "4/5"],
  ["carousel2.jpeg", "4/5"],
  ["carousel3.jpeg", "4/5"],
  ["carousel4.jpeg", "4/5"],
  ["carousel5.jpeg", "4/5"],
  ["carousel6.jpeg", "4/5"],
  ["carousel7.jpeg", "4/5"],
  ["carousel8.jpeg", "4/5"],
  ["carousel9.jpeg", "4/5"],
  ["carousel10.jpeg", "4/5"],
  ["carousel11.jpeg", "4/5"],
  ["carousel12.jpeg", "4/5"],
];

function Tiers({ items = tiers, className = "", showFeatures = false }) {
  return (
    <div className={"tiers " + className}>
      {items.map((t, i) => (
        <Reveal key={t.name} delay={i * 0.1} className={"tier" + (t.rec ? " rec" : "")}>
          {t.rec && <span className="flag">Recommended</span>}
          <h3>{t.name}</h3>
          <div className="amt">{currency} {t.price}<small></small></div>
          {t.amt && <div className="rooms">{t.amt}</div>}
          <p className="desc">{t.desc}</p>
          <a href={quoteUrl(t.name)} target="_blank" rel="noopener noreferrer" className="go">Enquire now</a>
          <p className="for">{t.forWho}</p>
          {showFeatures && <hr />}
          {showFeatures && <ul>{t.features.map((f) => <li key={f}>{f}</li>)}</ul>}
        </Reveal>
      ))}
    </div>
  );
}


const ABOUT_IMG = "overlayabt.jpg";

function AboutHero() {
  return (
    <section className="about-hero" style={{ backgroundImage: `url(/images/${ABOUT_IMG})` }}>
      <div className="wrap about-inner">
        <Reveal as="h1" className="h1">Studio/16</Reveal>
        <Reveal as="p" delay={0.1} className="about-lead">
          Designing spaces with purpose. Visualising properties with potential.
        </Reveal>
        <Reveal delay={0.2} className="about-body">
          <p>Studio16 is an interior design studio specialising in residential and investment properties. With over 5 years of experience across the UK and Singapore, we work with developers, property investors and homeowners to transform ideas and properties into considered, market-ready interiors.</p>
          <p>From space planning and technical layouts to photorealistic visualisations and complete interior schemes, we help our clients see the potential of a property before it is built, renovated or brought to market. Our approach combines thoughtful design with practical solutions—whether the goal is to create a home, maximise an investment, support a property development, or present a compelling vision for marketing and sales.</p>
          <p>With 50+ clients and more than 150 projects completed, Studio16 brings proven experience, efficiency and a strong understanding of residential design to every project.</p>
        </Reveal>
      </div>
    </section>
  );
}

function Carousel({ items }) {
  const track = useRef(null);
  const drag = useRef(null);
  const moved = useRef(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = items.length;

  const go = (i) => {
    const el = track.current;
    if (!el) return;
    const slide = el.children[(i + n) % n];
    el.scrollTo({ left: slide.offsetLeft - (el.clientWidth - slide.clientWidth) / 2, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = track.current;
    const mid = el.scrollLeft + el.clientWidth / 2;
    let best = 0, dist = Infinity;
    [...el.children].forEach((s, i) => {
      const d = Math.abs(s.offsetLeft + s.clientWidth / 2 - mid);
      if (d < dist) { dist = d; best = i; }
    });
    setActive(best);
  };

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => go(active + 1), 3800);
    return () => clearTimeout(t);
  }, [active, paused]);

  const down = (e) => {
    if (e.pointerType !== "mouse") return;
    moved.current = false;
    drag.current = { x: e.clientX, left: track.current.scrollLeft };
    track.current.classList.add("drag");
  };
  const move = (e) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 4) moved.current = true;
    track.current.scrollLeft = d.left - dx;
  };
  const up = () => {
    if (!drag.current) return;
    drag.current = null;
    track.current.classList.remove("drag");
    go(active);
  };
  const key = (e) => {
    if (e.key === "ArrowRight") go(active + 1);
    if (e.key === "ArrowLeft") go(active - 1);
  };

  const pad = (v) => String(v).padStart(2, "0");

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)} onTouchEnd={() => setPaused(false)}>
      <div className="wrap car-head">
        {/* <Reveal><small className="muted">Portfolio</small><h2 className="h2">Selected Work</h2></Reveal> */}
        <div className="car-ctrl">
          <span className="car-count"><b>{pad(active + 1)}</b> / {pad(n)}</span>
          <button className="car-btn" aria-label="Previous" onClick={() => go(active - 1)}>‹</button>
          <button className="car-btn" aria-label="Next" onClick={() => go(active + 1)}>›</button>
        </div>
      </div>

      <div className="car-track" ref={track} tabIndex={0} aria-label="Gallery" onScroll={onScroll} onKeyDown={key}
        onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerLeave={up}>
        {items.map(([name], i) => (
          <div key={name} className={"car-slide" + (i === active ? " on" : "")}
            onClick={() => { if (!moved.current) go(i); }}>
            <Img name={name} tone={i} ratio="4/5" />
          </div>
        ))}
      </div>

      <div className="wrap car-prog">
        <div className="car-bar"><i style={{ transform: `scaleX(${(active + 1) / n})` }} /></div>
      </div>
    </div>
  );
}

export function Landing() {
  return (
    <>
      <AboutHero />
      <section className="wrap page">
        <Reveal as="h1" className="h1">Clear Packages. Clear Deliverables. No Surprises.</Reveal>
        <Reveal as="p" delay={0.1} className="lp-sub">
          Good design should be straightforward.
        </Reveal>
        <Reveal as="p" delay={0.1} className="lp-sub">
          Studio16 provides professional interior design for property investors, developers and homeowners through clearly defined packages, transparent pricing and practical deliverables — giving you everything you need to plan, visualise, market and deliver your property.
        </Reveal>
        {/* <div className="gallery">
          {GALLERY.map(([name, ratio], i) => <Img key={name} name={name} tone={i} ratio={ratio} />)}
        </div> */}
        <section className="car-sec">
          <Carousel items={GALLERY} />
        </section>
      </section>

      <section className="wrap lp-prices">
        <div className="price-head">
          <Reveal as="h2" className="h2">Define Your Scale</Reveal>
          <Reveal as="p" delay={0.1}>Every project is different. Choose the scale that best reflects your property, based on the number of rooms and overall project size.</Reveal>
        </div>
        <Tiers />
        {/* <p className="fine">Final pricing depends on the size and scope of your project.</p> */}
      </section>

      <section className="wrap lp-prices">
        <div className="price-head">
          <Reveal as="h2" className="h2">Build Your Package</Reveal>
          <Reveal as="p" delay={0.1}>Only pay for what you need. Select the design services that suit your project, from essential planning to a complete design package.</Reveal>
        </div>
        <Tiers items={tiers4} className="four" showFeatures/>
          <p className="fine">Final pricing depends on the size and scope of your project.</p>
      </section>

      <section className="wrap lp-prices">
        <Reveal className="tier beyond">
          <h3>Beyond the Standard</h3>
          <p className="desc">
            Not every project fits into a package. For unique spaces, complex requirements or something entirely different, talk to us about a bespoke design solution.
          </p>
          <a
            href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Hi Studio 16, I'd like to talk about a bespoke design solution.")}`}
            target="_blank" rel="noopener noreferrer" className="go"
          >
            Talk to us
          </a>
        </Reveal>
      </section>

      <Cta />
    </>
  );
}