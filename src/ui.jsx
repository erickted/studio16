import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const tones = [
  "linear-gradient(135deg,#2a2622,#7a6650)", "linear-gradient(135deg,#15181a,#46595a)",
  "linear-gradient(135deg,#3a1f1c,#9a5642)", "linear-gradient(135deg,#1b1b1b,#5d5d5d)",
  "linear-gradient(135deg,#252c21,#74835f)",
];
const ease = [0.22, 1, 0.36, 1];

// Image with clip-path reveal. Falls back to a tonal block if /images/<name>.jpg is missing.
export function Img({ name, tone = 0, ratio = "4/3", alt = "" }) {
  const [failed, setFailed] = useState(!name);
  return (
    <motion.div className="img" style={{ aspectRatio: ratio }}
      initial={{ clipPath: "inset(0 0 100% 0)" }} whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-8%" }} transition={{ duration: 1.1, ease }}>
      {failed ? (
        <div className="ph" style={{ background: tones[tone % tones.length] }} />
      ) : (
        <img
          src={`/images/${name.includes(".") ? name : name + ".jpg"}`}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </motion.div>
  );
}

export function Reveal({ children, delay = 0, as = "div", className }) {
  const M = motion[as];
  return (
    <M className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.8, delay, ease }}>{children}</M>
  );
}

export function Logo({ large, to = "/" }) {
  return <Link to={to} className={"logo" + (large ? " logo-lg" : "")} aria-label="S/16, Studio 16">S<b>/</b>16</Link>;
}

export function More({ to, children = "Discover" }) {
  return <Link to={to} className="more"><i />{children}</Link>;
}
