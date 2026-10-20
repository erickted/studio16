function Newsletter() {
  const [sent, setSent] = useState(false);
  return (
    <section className="wrap news">
      <Reveal><h2 className="h2">Subscribe to<br />our newsletter</h2><p className="muted">Stay up to date on new products and events.</p></Reveal>
      <Reveal delay={0.1}>
        <form className="pill" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <input type="email" required placeholder={sent ? "Thank you — you're subscribed" : "Email*"} disabled={sent} />
          <button aria-label="Subscribe">›</button>
        </form>
        <label className="check"><input type="checkbox" required /> Agree to terms and conditions</label>
      </Reveal>
    </section>
  );
}


