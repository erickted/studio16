import { useEffect, useLayoutEffect, useState } from "react";
import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { brand, nav } from "./data.js";
import { Logo } from "./ui.jsx";
import { Home, Pricing, Products, Projects, About, Contact } from "./pages.jsx";

function Loader({ done }) {
  useEffect(() => { const t = setTimeout(done, 1700); return () => clearTimeout(t); }, [done]);
  return (
    <motion.div className="loader" exit={{ y: "-100%" }} transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}>
      <div className="loader-word">
        {brand.split("").map((c, i) => (
          <motion.span key={i} initial={{ y: "110%" }} animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}>{c}</motion.span>
        ))}
      </div>
      <motion.div className="loader-bar" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.4, ease: "easeInOut" }} />
    </motion.div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  return (
    <>
      <header className="bar">
        <Logo />
        <div className="bar-right">
          <nav className="bar-nav">
            {nav.map(([label, to]) => (
              <NavLink key={to} to={to} className="bar-link">{label}</NavLink>
              
            ))}
          </nav>
          <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span className={open ? "x" : ""} />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.nav className="menu" initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}>
            {[["Home", "/"], ...nav].map(([l, to], i) => (
              <motion.div key={to} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.07 }}>
                <Link to={to}>{l}</Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <Logo />
      {/* <div className="foot-links"><Link to="/about">Credits</Link><Link to="/contact">Privacy</Link><Link to="/contact">Cookies</Link></div> */}
      <small>© {new Date().getFullYear()} Studio 16</small>
      {/* <div className="social">{["Ig", "Fb", "Yt", "Pi", "In"].map((s) => <a key={s} href="#" aria-label={s}>{s}</a>)}</div> */}
    </footer>
  );
}

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(() => !sessionStorage.getItem("seen"));
  const finish = () => { sessionStorage.setItem("seen", "1"); setLoading(false); };
  useLayoutEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "instant" }); }, [location.pathname]);
  return (
    <>
      <AnimatePresence>{loading && <Loader done={finish} />}</AnimatePresence>
      <Header />
      <motion.main key={location.pathname} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </motion.main>
    </>
  );
}