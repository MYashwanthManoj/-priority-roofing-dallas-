// Central content for the Priority Roofing Dallas experience.
// All business information sourced from priorityroofs.com (Dallas page,
// home, residential / commercial / designer pages, about, contact, FAQ).
// Do not invent facts — edit here to update content.

export const business = {
  name: 'Priority Roofing — Dallas',
  phone: '469-615-8193',
  phoneHref: 'tel:+14696158193',
  email: 'office@priorityroofs.com',
  emailHref: 'mailto:office@priorityroofs.com',
  address: '1420 W. Mockingbird Ln. Suite 540, Dallas, TX 75247',
  hours: 'Monday–Friday: 9:00 AM – 5:00 PM · Saturday & Sunday: Closed',
  rating: 5.0,
  reviewCount: 746,
};

export const stats = [
  { value: 9, suffix: '+', label: 'Years Experience', note: '' },
  { value: 22500, suffix: '+', label: 'Happy Clients', note: 'company-wide' },
  { value: 25000, suffix: '+', label: 'Roofs Completed', note: 'company-wide' },
  { value: 30, suffix: '+', label: 'Offices Nationwide', note: '' },
];

export const tickerItems = [
  'GAF Master Elite',
  'Owens Corning Preferred Contractor',
  'NRCA Member',
  'UASRC Certified',
  'OSHA Safety Trained',
  'The Good Contractors List',
  '5–20 Year Labor Warranty',
];

export const certifications = {
  gaf: 'GAF Master Elite',
  owensCorning: 'Owens Corning Preferred Contractor',
  nrca: 'NRCA',
  uasrc: 'UASRC',
  osha: 'OSHA',
  goodContractors: 'The Good Contractors List',
};

export const services = {
  residential: {
    num: '01',
    title: 'Residential Roofing',
    image: '/assets/img/proj-roof56.jpg',
    alt: 'Residential shingle roof in Dallas, Texas',
    intro:
      'Expert residential roof inspections, repairs, and replacements — with a focus on durable shingle roofing systems. Whether you need a new shingle roof or an upgrade, we provide a free inspection to evaluate your current roof\u2019s condition.',
    items: [
      'Roof inspections & detailed reports',
      'Roof repairs & leak solutions',
      'Roof replacement & installation',
      'Shingle roofing systems',
      'Storm damage repair',
      'Insurance-related assistance',
    ],
  },
  commercial: {
    num: '02',
    title: 'Commercial Roofing',
    image: '/assets/img/proj-commercial.webp',
    alt: 'Commercial low-slope roofing system',
    intro:
      'Comprehensive commercial roof inspections, repairs, replacements and maintenance — backed by premier products along with labor and product warranties. We collaborate with you to find the most durable, cost-effective solution for your building and business goals.',
    items: [
      'Commercial roof inspections',
      'Storm, hail & wind damage evaluations',
      'Commercial roof repairs',
      'Roof replacement & installation',
      'Preventative maintenance',
      'Systems: asphalt, single-ply, metal, tile, slate & more',
    ],
  },
  designer: {
    num: '03',
    title: 'Designer Roofing',
    image: '/assets/img/proj-design.webp',
    alt: 'Designer slate and tile roofing project',
    intro:
      'Whether you have a 100+ year-old slate or clay tile roof in need of restoration, you\u2019re building a new home with a lightweight system like Brava, or you want custom copper work to make a statement — Priority Designer has the knowledge to guide you through your project.',
    items: [
      'Designer roof inspection & restoration',
      'Repair & replacement',
      'Slate, clay tile, synthetic & shake',
      'Standing seam & stone-coated steel',
      'Free annual inspections via drone',
      'Backed by labor warranties',
    ],
  },
};

export const materials = [
  {
    id: 'asphalt',
    label: 'Asphalt Shingles',
    image: '/assets/img/mat-asphalt.webp',
    alt: 'Asphalt shingle roofing',
    title: 'Asphalt Shingles',
    body:
      'Our residential roofing focus is durable shingle roofing systems. Whether you need a new shingle roof or an upgrade, we provide a free inspection to evaluate your current roof\u2019s condition — then install a system built for Texas heat and storms.',
    items: [
      'Free inspection to evaluate your roof',
      '10-year labor warranty / no-leak guarantee',
      'Starter strip with lifetime & 110 mph wind warranty',
      'Ideal for homes & light commercial',
    ],
  },
  {
    id: 'metal',
    label: 'Metal',
    image: '/assets/img/mat-metal.webp',
    alt: 'Standing seam metal roofing',
    title: 'Metal Roofing',
    body:
      'Metal roofing in Dallas is the ideal choice for those seeking both durability and style. Metal roofs are low-maintenance and energy-efficient, making them a wise investment for your home or business.',
    items: [
      'Long-lasting materials',
      'Fire resistance',
      'Excellent protection against Texas heat and hail',
      'Low-maintenance & energy-efficient',
    ],
  },
  {
    id: 'tile',
    label: 'Tile',
    image: '/assets/img/mat-clay.webp',
    alt: 'Clay tile roofing',
    title: 'Tile Roofing',
    body:
      'Clay tiles are a top choice for durability, style, and sustainability. Made from natural materials and fired at high temperatures, they stand strong against harsh weather conditions like UV rays, moisture, and extreme temperatures.',
    items: [
      'Lifespan exceeding 50 years',
      'Minimal maintenance needs',
      'Timeless appeal for Texas architecture',
      'Eco-friendly, natural materials',
    ],
  },
  {
    id: 'slate',
    label: 'Slate',
    image: '/assets/img/mat-slate.webp',
    alt: 'Natural slate roofing',
    title: 'Slate Roofing',
    body:
      'Slate stands out as an exceptional roofing material due to its unique combination of durability, aesthetics, and environmental sustainability. Composed of natural stone, slate roofing boasts an impressive lifespan, often exceeding a century with proper maintenance.',
    items: [
      'Lifespan often exceeding 100 years',
      'Innate resistance to fire & extreme temperatures',
      'Nationally recognized slate & tile work',
      'Restoration for 100+ year-old roofs',
    ],
  },
  {
    id: 'designer',
    label: 'Designer Systems',
    image: '/assets/img/mat-scs.webp',
    alt: 'Stone-coated steel designer roofing',
    title: 'Designer Systems',
    body:
      'Beyond asphalt shingles, Priority Designer offers premium systems for architecturally significant homes — from lightweight synthetics to custom copper work.',
    items: [
      'Synthetic — engineered polymers replicating slate, wood & clay',
      'Shake — cedar\u2019s natural resistance to decay, insects & fungi',
      'Standing seam — 40–70 year watertight, energy-efficient systems',
      'Stone-coated steel — steel strength with tile, slate & shingle looks',
      'Free annual drone inspections with engineer\u2019s report',
    ],
  },
  {
    id: 'commercial',
    label: 'Commercial Systems',
    image: '/assets/img/proj-commercial2.webp',
    alt: 'Commercial roofing system installation',
    title: 'Commercial Systems',
    body:
      'Commercial roofing solutions — inspections, repairs, replacements, maintenance, and options like metal and roof coatings. We collaborate with you to find the most durable, cost-effective solution for your building and business goals.',
    items: [
      'Asphalt, single-ply & metal systems',
      'Tile, slate, SPF foam & modified bitumen',
      'Labor & product warranties on every system',
      'Free drone roof inspections',
    ],
  },
];

export const stormStages = [
  {
    icon: 'storm',
    title: 'Storm',
    text: 'Hail, wind and storm damage across North Texas — from scorching summers to hailstorms and tornadoes.',
  },
  {
    icon: 'inspection',
    title: 'Inspection',
    text: 'Free, fast inspections within 24–48 hours after storms, hail or leaks.',
  },
  {
    icon: 'documentation',
    title: 'Documentation',
    text: 'Before/after photos and full claim documentation prepared for your insurer.',
  },
  {
    icon: 'insurance',
    title: 'Insurance',
    text: 'We work directly with your insurance provider and coordinate with the adjuster.',
  },
  {
    icon: 'restoration',
    title: 'Restoration',
    text: 'Emergency tarping, damage protection and expert restoration of your roof.',
  },
];

export const insuranceItems = [
  'Insurance provider coordination',
  'Adjuster coordination — we meet them on site',
  'Full claim documentation & paperwork',
  'Before/after photographs for your claim',
  'Photo documentation of any damage on your property',
];

export const processSteps = [
  { title: 'Tear Off', text: 'The first thing we do is tear off all existing layers of shingles.' },
  { title: 'Decking', text: 'We replace up to 3 sheets of decking for no additional cost. Bad or rotted decking is replaced and invoiced to your insurance company for the difference.' },
  { title: 'Underlayment', text: 'The synthetic underlayment we lay down provides a 100% waterproof barrier prior to the shingles being installed — significantly better than industry-standard #15 felt paper, which is NOT waterproof.' },
  { title: 'Starter Strip', text: 'Starter strip shingles around the perimeter of every roof, with a lifetime warranty and a 110 mph wind warranty.' },
  { title: 'Valley Protection', text: 'Ice & Water Shield by GAF — a rubber membrane that won\u2019t tear or rip. Peel-and-stick, self-sealing around nails.' },
  { title: 'DuraFlo Flashings', text: 'DuraFlo pipe flashings around all plumbing pipes — a 35-year warranty on the flashings. If it leaks, they replace it.' },
  { title: 'Ventilation', text: 'All necessary equations are performed to ensure the proper NFVA so your roof and home can breathe and avoid malfunctions.' },
  { title: 'Yard Cleanup', text: 'Once finished, we go over the entire yard with a magnetic toolbar.' },
];

export const promises = [
  { icon: '$', title: 'No Money Upfront', text: 'We will not ask for a dime until the work is done and the project is completed. Your full satisfaction is important to us.' },
  { icon: '◈', title: 'Honest in Everything', text: 'If we tell you we will do something, we will do it. We have a reputation of trust and honor with our clients, and we want that to continue.' },
  { icon: '✓', title: 'We Will Do the Job Right', text: 'In construction, mistakes can happen — but we promise that if and when they do, we will fix them and make it right.' },
  { icon: '♥', title: 'Focused Attention & Care', text: 'Taking care of our families hinges upon our taking care of yours. Putting a great roof over your head enables us to keep a great roof over ours.' },
];

export const warranties = [
  {
    icon: '🛡',
    title: 'Labor Warranties',
    big: '5–20 years',
    text: 'Residential projects include a 10-year labor warranty and no-leak guarantee. Company-wide, Priority Roofing stands behind a 5–20 year labor warranty and no-leak guarantee depending on the system installed.',
    gold: false,
  },
  {
    icon: '◈',
    title: 'Product Warranties',
    big: 'Up to 35+ yrs',
    text: 'Starter strip shingles carry a lifetime warranty plus a 110 mph wind warranty. DuraFlo pipe flashings carry a 35-year warranty — if they leak, they\u2019re replaced. Manufacturer product warranties vary by material.',
    gold: false,
  },
  {
    icon: '▤',
    title: 'Commercial Systems',
    big: 'Up to 30 yrs',
    text: 'Asphalt shingles: lifetime material warranty with 10-year labor coverage. Single-ply: 20-year warranty and no-leak guarantee. Metal: 20-year protection. Clay, tile, slate, SPF foam & modified bitumen: warranties up to 30 years.',
    gold: false,
  },
  {
    icon: '★',
    title: 'The Good Contractors List',
    big: '$10,000',
    text: 'As a member of The Good Contractors List, every job we perform carries a $10,000 guarantee.',
    gold: true,
  },
];

export const team = [
  { name: 'Elias Rodriguez', role: 'Managing Partner — Dallas', image: '/assets/img/team-elias.webp', alt: 'Elias Rodriguez, Managing Partner — Dallas' },
  { name: 'Karina Garcia', role: 'Regional Office Manager', image: '/assets/img/team-karina.webp', alt: 'Karina Garcia, Regional Office Manager' },
  { name: 'Aaron Beishline', role: 'Sales Manager — Dallas', image: '/assets/img/team-aaron.webp', alt: 'Aaron Beishline, Sales Manager — Dallas' },
  { name: 'Timothy Tuttle', role: 'Commercial Sales Manager — Dallas', image: '/assets/img/team-timothy.webp', alt: 'Timothy Tuttle, Commercial Sales Manager — Dallas' },
  { name: 'Dariela Torres', role: 'Commercial Office Manager', image: '/assets/img/team-dariela.webp', alt: 'Dariela Torres, Commercial Office Manager' },
  { name: 'Jack Cella', role: 'Designer Division Manager', image: '/assets/img/team-jack.webp', alt: 'Jack Cella, Designer Division Manager' },
  { name: 'Mario Garduno', role: 'Quality Control Manager — Dallas', image: '/assets/img/team-mario.webp', alt: 'Mario Garduno, Quality Control Manager — Dallas' },
  { name: 'Jason Johnson', role: 'Designer & Commercial Operations Manager', image: '/assets/img/team-jason.webp', alt: 'Jason Johnson, Designer & Commercial Operations Manager' },
  { name: 'Lorena Ferraz', role: 'Designer Office Manager', image: '/assets/img/team-lorena.webp', alt: 'Lorena Ferraz, Designer Office Manager' },
];

export const teamQuotes = [
  {
    text: 'Hello, my name is Elias Rodriguez. I am the Managing Partner here at Priority Roofing Dallas. I am honored to be a part of a company that devotes themselves to customer satisfaction, and strives every day to be the best in the roofing industry. My job is to train all of our staff with the skills that we need to provide you with the best customer service and the best experience that someone could have. We take pride in every job we take on, and we take every job seriously. We know how important your home or business is to you! We want to assure you that we will do our best to do everything effectively, with integrity and professionalism. Thank you for considering us for your residential and commercial roofing needs.',
    author: 'Elias Rodriguez — Managing Partner, Dallas',
  },
  {
    text: 'Lorena Ferraz was born in Massachusetts and has resided in Texas for the past 10 years. She is the daughter of Brazilian immigrant parents, studied at Dallas Baptist University, and is fluent in three languages. Outside of her professional role, she values time with her family and enjoys traveling.',
    author: 'Lorena Ferraz — Designer Office Manager',
  },
];

export const dallasAreas = [
  'Frisco', 'Plano', 'Irving', 'Garland', 'Mesquite',
  'Highland Park', 'Farmers Branch', 'Richardson', 'McKinney', 'Duncanville',
];

export const faqs = [
  {
    q: 'How often should I have my roof inspected?',
    a: 'Priority Roofing recommends checking your roof at least twice a year, particularly after storms or if you spot any damage.',
  },
  {
    q: 'How do I know if my roof is damaged?',
    a: 'Words are words. You may hear everything and anything from a roofing company. That\u2019s why we show you photo documentation of any damage on your property and make sure you\u2019re aware of the current parameters set by insurance companies to qualify for a totaled roof.',
  },
  {
    q: 'Who should I choose?',
    a: 'It\u2019s hard to know who to trust. We encourage homeowners to ask questions. Your roofer should know the ins and outs of the roof and the insurance process. Check reviews — the best way to vet a company is to see what other people\u2019s experiences are. Look for credentials. Choose a company that has the top certifications from the manufacturers\u2019 products you\u2019ll be installing.',
  },
  {
    q: 'Are Priority Roofing contractors licensed and insured?',
    a: 'Yes, we are fully licensed and insured in the state of Texas. Reputable credentials, including certifications from industry authorities such as GAF, NRCA, UASRC, and OSHA, validate our team\u2019s expertise.',
  },
  {
    q: 'What roofing services are offered in Dallas?',
    a: 'Priority Roofing offers a comprehensive range of residential and commercial roof repairs, complete roof replacements, metal roofing installations and storm and hail damage restoration services specifically designed to handle the unique North Texas climate.',
  },
  {
    q: 'What does roof replacement cost in Dallas, TX?',
    a: 'The cost of roof replacement in Dallas can vary depending on the size, slope, and type of roofing material used. However, we offer free inspections and detailed estimates, which many people appreciate during the insurance-heavy repair seasons.',
  },
  {
    q: 'Does Priority Roofing assist with insurance claims?',
    a: 'Yes, we work directly with your insurance provider to help expedite and maximize your claim, ensuring that you get full value for storm-related roof damage.',
  },
];

export const gallery = [
  { image: '/assets/img/proj-lovefield-inn.jpeg', label: 'COMMERCIAL', title: 'Dallas Love Field Inn', loc: '1550 Empire Central Dr · Dallas, TX', wide: true, alt: 'Commercial roofing project — Dallas Love Field Inn, 1550 Empire Central Dr, Dallas, TX 75235' },
  { image: '/assets/img/proj-crestline.jpeg', label: 'RESIDENTIAL', title: 'Crestline Rd', loc: 'Fort Worth, TX', wide: false, alt: 'Residential roofing project — Crestline Rd, Fort Worth, TX' },
  { image: '/assets/img/proj-1.webp', label: 'RESIDENTIAL', title: 'Completed Project', loc: 'North Texas', wide: false, alt: 'Priority Roofing residential roofing project' },
  { image: '/assets/img/proj-2.webp', label: 'RESIDENTIAL', title: 'Completed Project', loc: 'North Texas', wide: false, alt: 'Priority Roofing residential roof replacement project' },
  { image: '/assets/img/proj-3.webp', label: 'RESIDENTIAL', title: 'Completed Project', loc: 'North Texas', wide: false, alt: 'Priority Roofing residential roofing project' },
  { image: '/assets/img/proj-design.webp', label: 'DESIGNER', title: 'Slate & Tile Restoration', loc: 'Designer Division', wide: true, alt: 'Designer roofing project — slate and tile restoration' },
  { image: '/assets/img/proj-commercial2.webp', label: 'COMMERCIAL', title: 'Low-Slope System', loc: 'Commercial Division', wide: false, alt: 'Commercial roofing project' },
  { image: '/assets/img/proj-roof56.jpg', label: 'RESIDENTIAL', title: 'Shingle Replacement', loc: 'Dallas Area', wide: false, alt: 'Residential shingle roof replacement' },
];
