export const site = {
  name: "Juristax Advisors LLP",
  shortName: "Juristax",
  tagline: "Taxation · Finance · Advisory · Compliance",
  title: "Juristax Advisors LLP | Taxation, Finance, Advisory & Compliance",
  description:
    "Juristax Advisors LLP is a newly established professional advisory firm built on more than 10 years of industry experience across taxation, finance, advisory and compliance.",
  line: "Professional advice for the decisions that matter.",
  contact: {
    email: "juristaxadvisors@gmail.com",
    phone: "+91 96439 39494",
    location: "New Delhi",
    emailHref: "mailto:juristaxadvisors@gmail.com",
    phoneHref: "tel:+919643939494",
  },
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  kicker: "TAXATION  ·  FINANCE  ·  ADVISORY  ·  COMPLIANCE",
  headline: "Clear advice for decisions that matter.",
  supporting:
    "Juristax brings together taxation, finance, advisory and compliance under one professional relationship, backed by more than 10 years of industry experience.",
  primaryCta: "Talk to Juristax",
  secondaryCta: "Explore services",
};

export const credibility = [
  {
    mark: "10+",
    label: "years",
    body: "Industry experience",
  },
  {
    mark: "4",
    label: "core areas",
    body: "Taxation · Finance · Advisory · Compliance",
  },
  {
    mark: "One",
    label: "relationship",
    body: "Professional support across the work",
  },
];

export const about = {
  label: "What we do",
  heading: "More than compliance.",
  headingSecond: "More than numbers.",
  body: "Businesses need more than accurate accounts and timely filings. They need clarity around tax, finance, compliance and the decisions that shape what comes next.",
  close: "Juristax brings these areas together under one professional relationship.",
  practices: ["Taxation", "Finance", "Advisory", "Compliance"],
};

export const servicesIntro = {
  label: "Services",
  heading: "What we help with",
  supporting:
    "Six practices, from tax and finance through to analytics and liaisoning.",
};

export const primaryServices = [
  {
    number: "01",
    title: "Taxation",
    items: [
      "GST",
      "Tax Planning",
      "Tax Compliance",
      "Representation & Litigation Support",
    ],
  },
  {
    number: "02",
    title: "Finance",
    items: [
      "Financial Planning",
      "Management Reporting",
      "Treasury & Fund Management",
    ],
  },
  {
    number: "03",
    title: "Advisory",
    items: [
      "Business Advisory",
      "Valuation",
      "Due Diligence",
      "Internal Controls",
      "Risk Advisory",
    ],
  },
  {
    number: "04",
    title: "Compliance",
    items: [
      "GST",
      "TDS",
      "ROC",
      "Secretarial Compliance",
      "Regulatory Compliance",
    ],
  },
  {
    number: "05",
    title: "Data Analytics",
    items: [
      "MIS Reporting",
      "Business Analytics",
      "Dashboards & Insights",
    ],
  },
  {
    number: "06",
    title: "Liaisoning",
    items: [
      "ROC & Regulatory Approvals",
      "Government Liaisoning",
    ],
  },
];

export const experience = {
  label: "The firm",
  mark: "10+",
  markCaption: "Years of industry experience",
  heading: "A new chapter.\nBuilt on established experience.",
  body: "Juristax is a newly established firm. The people behind it bring more than a decade of professional work in taxation, finance, advisory and compliance. That experience is the foundation. The firm is the next chapter.",
};

export const approach = {
  label: "How we work",
  heading: "A clear process.\nAdvice that moves things forward.",
  steps: [
    {
      number: "01",
      title: "Understand",
      body: "We start with the business, the numbers and the situation.",
    },
    {
      number: "02",
      title: "Assess",
      body: "We identify the risks, requirements and opportunities.",
    },
    {
      number: "03",
      title: "Advise",
      body: "We provide practical recommendations based on the situation.",
    },
    {
      number: "04",
      title: "Support",
      body: "We stay involved where ongoing compliance, reporting or advisory support is needed.",
    },
  ],
};

export const audiences = {
  label: "Who we work with",
  heading: "Partnerships built on trust and understanding.",
  supporting:
    "We work with a diverse set of clients across businesses, professional practices and individuals—delivering clarity, structure and practical solutions.",
  items: [
    {
      title: "Businesses",
      body: "Owners and management teams seeking dependable advice for complex financial and compliance needs.",
    },
    {
      title: "Entrepreneurs",
      body: "Growing and evolving businesses looking for structure, insight and long-term financial clarity.",
    },
    {
      title: "Professionals",
      body: "Individuals with complex financial situations who value clarity, privacy and professional guidance.",
    },
  ],
};

export const enquiryServiceGroups = [
  {
    label: "Taxation",
    options: [
      "Taxation",
      "GST",
      "Income tax",
      "Tax Planning",
      "Tax Compliance",
      "Representation & Litigation Support",
    ],
  },
  {
    label: "Finance",
    options: [
      "Finance",
      "Financial Planning",
      "Management Reporting",
      "Treasury & Fund Management",
    ],
  },
  {
    label: "Advisory",
    options: [
      "Advisory",
      "Business Advisory",
      "Valuation",
      "Due Diligence",
      "Internal Controls",
      "Risk Advisory",
    ],
  },
  {
    label: "Compliance",
    options: [
      "Compliance",
      "TDS",
      "ROC",
      "Secretarial Compliance",
      "Regulatory Compliance",
    ],
  },
  {
    label: "Data Analytics",
    options: [
      "Data Analytics",
      "MIS Reporting",
      "Business Analytics",
      "Dashboards & Insights",
    ],
  },
  {
    label: "Liaisoning",
    options: [
      "Liaisoning",
      "ROC & Regulatory Approvals",
      "Government Liaisoning",
    ],
  },
  {
    label: "Other",
    options: ["Other"],
  },
];

export const enquiryServices = enquiryServiceGroups.flatMap(
  (group) => group.options,
);

export const cta = {
  heading: "Have a question?\nLet's talk.",
  supporting:
    "Whether you need help with taxation, finance, compliance or a broader business matter, start with a conversation.",
  primary: "Talk to Juristax",
  secondary: "Email us",
};

export const contactModal = {
  heading: "Let's talk.",
  supporting:
    "Tell us a little about what you need help with. We'll take it from there.",
  successTitle: "Thank you.",
  successBody:
    "We've received your enquiry and will get back to you shortly.",
};
