export const frameworksData = [
  {
    background:
      "bg-white bg-[radial-gradient(100%_100%_at_50%_0%,rgba(17,185,236,0.1)_0%,rgba(17,185,236,0)_100%)]",
    icon: "/assets/standards/soc2.svg",
    description:
      "The controls you create will depend on your company's people, technology, and products. Service organizations must protect customer data and products, ensuring a safe and reliable platform for business.",
    position: "top-[40%] left-0",
    tags: [
      "security",
      "availability",
      "processing integrity",
      "confidetiality",
      "privacy",
    ],
    showInFrameworks: true,
    href: "/product/frameworks/soc2",
  },
  {
    background:
      "bg-white bg-[radial-gradient(100%_100%_at_50%_0%,rgba(53,120,190,0.1)_0%,rgba(53,120,190,0)_100%)]",
    icon: "/assets/standards/hipaa.svg",
    description:
      "The Health Insurance Portability and Accountability Act (HIPAA) sets national standards to protect individuals' medical records and personal health information. It applies to health plans, clearinghouses, and providers, ensuring the confidentiality and integrity of protected health information (PHI).",
    position: "top-0 left-[10%]",
    tags: ["healthcare", "phi", "privacy", "security", "compliance"],
    showInFrameworks: true,
    href: "/product/frameworks/hipaa",
  },
  {
    background:
      "bg-white bg-[radial-gradient(100%_100%_at_50%_0%,rgba(8,56,150,0.1)_0%,rgba(8,56,150,0)_100%)]",
    icon: "/assets/standards/gdpr.svg",
    description:
      "The General Data Protection Regulation (GDPR) is an EU law that enforces strict rules on personal data protection and privacy. It regulates how organizations handle the personal information of EU and EEA residents and controls data transfers outside these areas.",
    position: "bottom-[15%] right-[10%]",
    opacity: "opacity-50",
    showInFrameworks: true,
    tags: [
      "privacy",
      "data protection",
      "eu regulation",
      "consent",
      "data transfer",
    ],
    href: "/product/frameworks/gdpr",
  },

  {
    background:
      "bg-white bg-[radial-gradient(100%_100%_at_50%_0%,rgba(77,119,176,0.1)_0%,rgba(77,119,176,0)_100%)]",
    icon: "/assets/standards/iso_27001.svg",
    description:
      "The international standard for information security management systems (ISMS) offers a systematic way to manage sensitive company information, ensuring its confidentiality, integrity, and availability.",
    position: "top-0 right-[40%]",
    opacity: "opacity-50",
    tags: [
      "isms",
      "risk management",
      "security controls",
      "asset management",
      "continuous improvement",
    ],
    showInFrameworks: true,
    href: "/product/frameworks/iso-27001",
  },
  {
    background:
      "bg-white bg-[radial-gradient(100%_100%_at_50%_0%,rgba(44,111,118,0.1)_0%,rgba(44,111,118,0)_100%)]",
    icon: "/assets/standards/pcidss.svg",
    description:
      "The Payment Card Industry Data Security Standard (PCI DSS) is a global security standard for organizations handling credit card information. It sets requirements to ensure a secure environment and protect cardholder data.",
    position: "bottom-[15%] left-[15%]",
    opacity: "opacity-50",
    tags: [
      "payment security",
      "cardholder data",
      "network security",
      "encryption",
      "monitoring",
    ],
    showInFrameworks: true,
    href: "/product/frameworks/pci-dss",
  },
  {
    background:
      "bg-white bg-[radial-gradient(100%_100%_at_50%_0%,rgba(56,132,38,0.1)_0%,rgba(56,132,38,0)_100%)]",
    icon: "/assets/standards/nist_csf.svg",
    description:
      "The NIST Cybersecurity Framework (NIST CSF) offers voluntary guidelines from the U.S. government to help organizations manage cybersecurity risks.",
    position: "top-[20%] right-0",
    tags: ["identify", "protect", "detect", "respond", "recover"],
    showInFrameworks: true,
    href: "/product/frameworks/nist-csf",
  },
  {
    background:
      "bg-white bg-[radial-gradient(100%_100%_at_50%_0%,rgba(56,132,38,0.1)_0%,rgba(56,132,38,0)_100%)]",
    icon: "/assets/standards/nist_80053.svg",
    description:
      "A cybersecurity framework by the National Institute of Standards and Technology (NIST) that outlines security controls for federal information systems.",
    position: "top-[20%] right-0",
    tags: [
      "access control",
      "system security",
      "configuration management",
      "incident response",
      "continuous monitoring",
    ],
    showInFrameworks: false,
    href: "/product/frameworks/nist-800-53",
  },
  {
    background:
      "bg-white bg-[radial-gradient(100%_100%_at_50%_0%,rgba(56,132,38,0.1)_0%,rgba(56,132,38,0)_100%)]",
    icon: "/assets/standards/nist_800171.svg",
    description:
      "NIST SP 800-171 outlines security requirements for safeguarding Controlled Unclassified Information (CUI) in non-federal systems.",
    position: "top-[20%] right-0",
    tags: [
      "cui",
      "confidentiality",
      "nonfederal systems",
      "access control",
      "audit & accountability",
    ],
    showInFrameworks: false,
    href: "/product/frameworks/nist-800-171",
  },
  {
    background:
      "bg-white bg-[radial-gradient(100%_100%_at_50%_0%,rgba(14,241,199,0.1)_0%,rgba(14,241,199,0)_100%)]",
    icon: "/assets/standards/custom.svg",
    description:
      "Empower your team to define compliance on your own terms. With Openlane's Custom Framework feature, you can import any set of controls—whether it's an industry standard, a bespoke company policy, or an entirely new security model—and manage them alongside our built-in frameworks.",
    position: "top-[20%] right-0",
    tags: ["flexible controls", "framework import", "tailored compliance"],
    showInFrameworks: false,
    href: "/product/frameworks/custom",
  },
];

export const complianceNumbersData = [
  {
    title: "82%",
    description: "less time spent on evidence collection",
    icon: "/assets/down.svg",
  },
  {
    title: "80+",
    description: "hours saved achieving compliance",
  },
  {
    title: "12+",
    description: "compliance frameworks that build real trust",
  },
];

export const whyTeamsChooseOpenlaneData = [
  {
    title: "Less Manual Work",
    description:
      "Automate evidence collection, policy updates, and control tracking to save hours.",
    icon: "/assets/hammer.svg",
  },
  {
    title: "Simplify Audits",
    description:
      "Automate evidence and control tracking so audits never slow you down.",
    icon: "/assets/audits.svg",
  },
  {
    title: "Stay Globally Aligned",
    description:
      "Meet SOC 2, ISO 27001, GDPR, and other global frameworks without complexity.",
    icon: "/assets/global.svg",
  },
  {
    title: "Faster Sales Cycles",
    description:
      "Build trust faster with enterprise customers through verified, real-time readiness.",
    icon: "/assets/trust-center/speedometer.svg",
  },
  {
    title: "Scalable Confidence",
    description:
      "As your company grows, Openlane grows with you—keeping compliance simple at any size.",
    icon: "/assets/trust-center/chart-bar-duotone 1.svg",
  },
  {
    title: "Team Alignment",
    description:
      "Give every department a single source of truth for compliance and security.",
    icon: "/assets/trust-center/users-three-duotone 1.svg",
  },
];

export const complianceCardsData = [
  {
    title: "Too many tools",
    description:
      "Teams juggle fragmented systems that don’t talk to each other.",

    imageSrc: "/assets/tools.svg",
  },
  {
    title: "Manual work",
    description:
      "Evidence collection and control testing consume valuable time..",
    imageSrc: "/assets/checklist.svg",
  },
  {
    title: "Legacy platforms",
    description:
      "Outdated, rigid tools weren’t built for modern, fast-moving teams",
    imageSrc: "/assets/legacy.svg",
  },
];

export const openlanePlatformData = [
  {
    title: "Monitor Risk and Stay Audit-Ready",
    description:
      "Identify risks early, track open tasks, and monitor compliance status in real time. Openlane helps you spot issues before audits do—keeping your organization proactive, not reactive.",
    icon: "/assets/collaborate.png",
  },
  {
    title: "Collaborate and Report with Confidence",
    description:
      "Assign roles, manage approvals, and share audit-ready reports with stakeholders in seconds. From leadership to auditors, everyone stays informed, aligned, and confident in your security posture..",
    icon: "/assets/monitor-risks.png",
  },
  {
    title: "Automate and Centralize Your Compliance",
    description:
      "Openlane connects your frameworks, controls, and evidence into a single platform. Automate repetitive tasks, eliminate spreadsheets, and manage everything from SOC 2 to ISO 27001 with clarity and confidence.",
    icon: "/assets/automate.svg",
  },
];
