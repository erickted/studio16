import { useState } from "react";
import { Link } from "react-router-dom";
import { Img, Reveal, More } from "./ui.jsx";
import { products, projects, tiers, currency, quoteUrl, whatsapp } from "./data.js";


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
        <Reveal as="h1" className="h1">Pricing</Reveal>
        <Reveal as="p" delay={0.1}>Three ways to work with Studio 16. Choose the level of support that fits your space.</Reveal>
      </div>
      <div className="tiers">
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1} className={"tier" + (t.rec ? " rec" : "")}>
            {t.rec && <span className="flag">Recommended</span>}
            <h3>{t.name}</h3>
            <div className="amt">{currency} {t.price}+<small>starting price</small></div>
            <p className="desc">{t.desc}</p>
            {/* <Link to="/contact" className="go">Get a quote</Link> */}
            <a href={quoteUrl(t.name)} target="_blank" rel="noopener noreferrer" className="go">Get a quote</a>
            <p className="for">{t.forWho}</p>
            <hr />
            <ul>{t.features.map((f) => <li key={f}>{f}</li>)}</ul>
          </Reveal>
        ))}
      </div>
      <p className="fine">Final pricing depends on the size and scope of your project.</p>
    </section>
  );
}
