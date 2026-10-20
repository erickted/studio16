// Edit brand + copy here. Drop photos into /public/images using the names below (jpg).
export const brand = "S/16";
export const nav = [
// ["Products", "/products"], 
["Pricing", "/pricing"], 
// ["Projects", "/projects"], 
// ["About", "/about"], 
// ["Contact", "/contact"]
];
export const products = [
  { name: "Lounge Seating", img: "lounge", tone: 0, text: "Low, deep seating in leather and bouclé." },
  { name: "Tables", img: "tables", tone: 1, text: "Stone and timber tables made to order." },
  { name: "Lighting", img: "lighting", tone: 3, text: "Sculptural fixtures in brass and glass." },
  { name: "Kitchens", img: "kitchens", tone: 4, text: "Monumental kitchens built around materials." },
  { name: "Beds", img: "beds", tone: 2, text: "Quiet bedrooms with soft, tactile layers." },
  { name: "Home Collection", img: "home", tone: 0, text: "Tableware, glass and fragrance for the table." },
];
export const projects = [
  { name: "Alpine Residence", img: "project1", tone: 4, text: "A timber and glass house set within a forest." },
  { name: "Harbour Penthouse", img: "project2", tone: 1, text: "A top-floor apartment tuned to the skyline." },
  { name: "Desert Villa", img: "project3", tone: 2, text: "Warm stone and shade for a hot climate." },
  { name: "City Showroom", img: "project4", tone: 3, text: "Four floors of furniture in domestic settings." },
];

// Pricing: change currency, prices, copy and features here.
export const currency = "£";
export const tiers = [
  { name: "Essential", price: "1,999", rec: false, forWho: "Best for a single room",
    desc: "A focused design plan for one room, so you can furnish with confidence.",
    features: ["One design consultation", "Mood board and colour palette", "Furniture and decor shortlist", "Layout plan for one space", "Shopping list with supplier links"] },
  { name: "Signature", price: "2,099", rec: true, forWho: "Best for a whole home",
    desc: "A complete design for your home, from first concept to sourcing.",
    features: ["Everything in Essential", "Full-home concept with 3D renders", "Furniture, lighting and material selection", "Sourcing and ordering support", "Two rounds of revisions", "Site visit and styling day"] },
  { name: "Bespoke", price: "2,499", rec: false, forWho: "Best for a fully custom project",
    desc: "An end-to-end service with made-to-order pieces and hands-on project management.",
    features: ["Everything in Signature", "Custom furniture and joinery", "Detailed drawings for contractors", "Project management to handover", "Dedicated lead designer", "Installation and final styling"] },
];

// Quote button settings
export const whatsapp = "971503186150"; // country code + number, no + or spaces
export const gform = ""; // paste your Google Form link here to use it instead of WhatsApp
export const quoteUrl = (plan) =>
  gform ||
  `https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hi Studio 16, I'd like a quote for the ${plan} package.`)}`;