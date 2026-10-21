// Edit brand + copy here. Drop photos into /public/images using the names below (jpg).
export const brand = "S/16";
export const nav = [
// ["Products", "/products"], 
// ["Pricing", "/pricing"], 
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
  { name: "Standard", price: "1,950", amt: "5-6 Rooms", rec: false, forWho: "",
    desc: "The classic HMO scale, suited to the most common shared-living properties across the UK.",
    features: ["One design consultation", "Mood board and colour palette", "Furniture and decor shortlist", "Layout plan for one space", "Shopping list with supplier links"] },
  { name: "Plus", price: "2,495", amt: "7-8 Rooms", rec: false, forWho: "",
    desc: "A larger HMO scale, typically found in extended or expanded properties with additional rooms.",
    features: ["Everything in Essential", "Full-home concept with 3D renders", "Furniture, lighting and material selection", "Sourcing and ordering support", "Two rounds of revisions", "Site visit and styling day"] },
  { name: "Pro", price: "3,095", amt: "9+ Rooms", rec: false, forWho: "",
    desc: "A large-scale HMO format, ideal for substantial properties, multi-unit flats and larger developments.",
    features: ["Everything in Signature", "Custom furniture and joinery", "Detailed drawings for contractors", "Project management to handover", "Dedicated lead designer", "Installation and final styling"] },
];

// Quote button settings
export const whatsapp = "971503186150"; // country code + number, no + or spaces
export const gform = ""; // paste your Google Form link here to use it instead of WhatsApp
export const quoteUrl = (plan) =>
  gform ||
  `https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hi Studio 16, I'd like a quote for the ${plan} package.`)}`;

  export const tiers4 = [
  { name: "Plan", price: "500+", amt: "", rec: false, forWho: "The foundation for your project.",
    desc: "Ideal for clients who already have a design concept but need accurate technical planning to bring it to life.",
    features: ["Floor Plans", "Furniture Layout", "M&E Plans"] },
  { name: "Visualize", price: "1,300+", amt: "", rec: false, forWho: "See your space before it’s built.",
    desc: "Perfect for clients who already have their plans and simply need realistic visuals to see how the finished interior will look.",
    features: ["3D Renders", "Key Room Visuals"] },
  { name: "Design", price: "1,650+", amt: "", rec: false, forWho: "From planning to a complete design vision.",
    desc: "Combining technical planning, mood boards and detailed visualisation to create a cohesive interior for your property.",
    features: ["Floor Plans", "Furniture Layouts","M&E Plans", "Mood Boards", "3D Interior Renders"] },
  { name: "Complete", price: "1,950+", amt: "", rec: false, forWho: "Everything You Need to Bring the Design to Life. From concept to specification, each package includes",
    desc: "Our most comprehensive service, covering the full design process—from initial planning and visualisation to furniture, finishes and sourcing.",
    features: ["Design Brief & Mood Boards", "Floor Plans & M&E Planning", "3D Renders","Furniture, Finishes & Styling Selections", "Ready-to-Shop Product Lists"] },
];