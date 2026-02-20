export interface Alliance {
  name: string;
  category: "Audit Firm" | "Service Providers";
  tags?: string[];
  logo?: string;
  description?: string;
  url?: string;
  permissionConfirmed?: string;
  mutualCustomers?: number;
}

export const alliances: Record<string, Alliance[]> = {
  auditors: [
    {
      name: "Geels Norton",
      category: "Audit Firm",
      tags: ["SOC 1", "SOC 2", "SSPA", "ISO 27001", "ISO 27017", "ISO 27018"],
      logo: "/assets/alliances/GeelsNorton.png",
      description:
        "A premier boutique audit and advisory firm, setting the bar for personalized experiences and high-quality auditing.",
      url: "https://www.geelsnorton.com/",
      permissionConfirmed: "Yes",
      mutualCustomers: 1,
    },
    {
      name: "Certra",
      category: "Audit Firm",
      tags: ["SOC 1", "SOC 2", "HIPAA"],
      logo: "/assets/alliances/Certra Logo - White Background (250 x 150 px).png",
      description:
        "Helping organizations build trust and strengthen controls -SOC 1, SOC 2, and HIPAA audit services",
      url: "https://certra.com/",
      permissionConfirmed: "Yes",
      mutualCustomers: 0,
    },
    {
      name: "Consilium Labs",
      category: "Audit Firm",
      tags: [
        "SOC 2",
        "ISO 27001",
        "ISO 42001",
        "CSA Star",
        "SSPA",
        "Pen Testing",
      ],
      logo: "/assets/alliances/Consilium Labs_Logo.png",
      url: "https://consilium-labs.com/",
      permissionConfirmed: "Yes",
      mutualCustomers: 0,
    },
    {
      name: "Maxwell Locke & Ritter",
      category: "Audit Firm",
      tags: ["SOC 1", "SOC 2", "HIPAA"],
      logo: "/assets/alliances/ML&R Logo - Standard.jpg",
      description:
        "Boutique SOC 2 readiness, examination, and advisory services provider known for efficiency, technical expertise, and a client-first approach.",
      url: "https://www.mlrpc.com/",
      permissionConfirmed: "Yes",
      mutualCustomers: 0,
    },
    {
      name: "Prescient Security",
      category: "Audit Firm",
      tags: [
        "SOC",
        "ISO 27001",
        "ISO 42001",
        "PCI",
        "HITRUST",
        "FedRAMP",
        "HIPAA",
        "CMMC",
        "GDPR",
        "NIST",
      ],
      logo: "/assets/alliances/PrescientSecurity-Logo-Horiz-RGB.png",
      url: "https://prescientsecurity.com/",
      description:
        "Compliance as one part of a multi-pillared security strategy, assessing needs and deliverables from a cybersecurity standpoint first",
      permissionConfirmed: "Yes, meeting 4 Feb to update verbiage",
      mutualCustomers: 0,
    },
    {
      name: "Securis 360",
      category: "Audit Firm",
      tags: ["SOC 2", "ISO 27001", "HITRUST", "HIPAA", "GDPR"],
      logo: "/assets/alliances/Securis 360_Logo.png",
      description:
        "Specializes in cloud-native technologies and modern application security, tackling present challenges while anticipating future vulnerabilities.",
      url: "https://www.securis360.com/",
      permissionConfirmed: "Yes",
      mutualCustomers: 0,
    },
    // {
    //   name: "LBMC",
    //   category: "Audit Firm",
    //   url: "https://www.lbmc.com/",
    //   permissionConfirmed:
    //     "Not yet, but will grant if we move forward with partnership",
    // },
    // {
    //   name: "Linford & Co",
    //   category: "Audit Firm",
    //   url: "https://linfordco.com/",
    //   permissionConfirmed: "expect yes, just pending a few conversations",
    // },
    {
      name: "Insight Assurance",
      category: "Audit Firm",
      tags: [
        "SOC",
        "ISO",
        "PCI",
        "HITRUST",
        "FedRAMP",
        "CSA Star",
        "HIPAA",
        "CMMC",
        "GDPR",
      ],
      logo: "/assets/alliances/Insight-Assurance.svg",
      description:
        "Independent, expert-led assessments of security frameworks empowering organizations to proactively identify control gaps, manage risk, and achieve timely regulatory compliance with clarity and confidence.",
      url: "https://insightassurance.com/",
      permissionConfirmed: "expect yes, just pending a few conversations",
    },
  ],

  "service-providers": [
    {
      name: "Secure Cloud Innovations",
      category: "Service Providers",
      tags: ["Compliance as a Service", "vCISO", "Pen Testing"],
      logo: "/assets/alliances/SCI-Logox100.png",
      description:
        "US-Based founder-first security partners delivering real-world compliance and testing without checklists, fear, or vendor lock-in games.",
      url: "https://securecloudinnovations.net/",
      permissionConfirmed: "Yes",
      mutualCustomers: 1,
    },
    {
      name: "Certra",
      category: "Service Providers",
      tags: ["SOC 1", "SOC 2", "HIPAA"],
      logo: "/assets/alliances/Certra Logo - White Background (250 x 150 px).png",
      description:
        "Helping organizations build trust and strengthen controls -SOC 1, SOC 2, and HIPAA audit services",
      url: "https://certra.com/",
      permissionConfirmed: "Yes",
      mutualCustomers: 0,
    },
    {
      name: "Insight Assurance",
      category: "Service Providers",
      tags: ["Pen Testing", "NIST CSF", "Security Assessment"],
      logo: "/assets/alliances/Insight-Assurance.svg",
      description:
        "Comprehensive, expert-led evaluations of organizations’ information security posture—covering everything from policy enforcement and network vulnerability scanning to penetration testing and access control reviews.",
      url: "https://insightassurance.com/",
      permissionConfirmed: "expect yes, just pending a few conversations",
    },
    {
      name: "Maxwell Locke & Ritter",
      category: "Service Providers",
      tags: ["SOC 1", "SOC 2", "HIPAA"],
      logo: "/assets/alliances/ML&R Logo - Standard.jpg",
      description:
        "Boutique SOC 2 readiness, examination, and advisory services provider known for efficiency, technical expertise, and a client-first approach.",
      url: "https://www.mlrpc.com/",
      permissionConfirmed: "Yes",
      mutualCustomers: 0,
    },
    {
      name: "Prescient Security",
      category: "Service Providers",
      tags: ["Pen Testing", "Security Assessments"],
      logo: "/assets/alliances/PrescientSecurity-Logo-Horiz-RGB.png",
      url: "https://prescientsecurity.com/",
      description:
        "Compliance as one part of a multi-pillared security strategy, assessing needs and deliverables from a cybersecurity standpoint first",
      permissionConfirmed: "Yes, meeting 4 Feb to update verbiage",
      mutualCustomers: 0,
    },
    {
      name: "CyberFortify",
      category: "Service Providers",
      tags: [
        "Cybersecurity",
        "Penetration Testing",
        "VAPT",
        "Compliance",
        "Application Security",
      ],
      logo: "/assets/alliances/CyberFortify - logo.png",
      description:
        "Delivers penetration testing and security assessments helping businesses identify vulnerabilities, achieve compliance, strengthen posture.",
      url: "https://cyberfortify.co/",
      permissionConfirmed: "Yes",
      mutualCustomers: 0,
    },
    {
      name: "Stronta",
      category: "Service Providers",
      tags: ["Compliance as a Service", "vCISO"],
      logo: "/assets/alliances/Stronta logo.png",
      description:
        "Startup-focused security built for scale. Stronta handles security while you build towards the next milestone.",
      url: "https://www.stronta.com/",
      permissionConfirmed: "Yes",
      mutualCustomers: 0,
    },
    {
      name: "SideKick",
      category: "Service Providers",
      tags: ["vCISO", "Compliance Readiness", "Pen Testing"],
      logo: "/assets/alliances/sidekick-logo.png",
      description:
        "Protect and empower your organization by designing, building and delivering security that is tailored to your unique systems, users, needs and priorities.",
      url: "https://sidekicksecurity.io/",
      permissionConfirmed: "expect yes, pending confirmation",
      mutualCustomers: 0,
    },
    {
      name: "Securis 360",
      category: "Service Providers",
      tags: [
        "Pen Testing as a Service",
        "vCISO",
        "Employee Awareness Training",
        "Phishing Simulation",
      ],
      logo: "/assets/alliances/Securis 360_Logo.png",
      description:
        "Specializes in cloud-native technologies and modern application security, tackling present challenges while anticipating future vulnerabilities.",
      url: "https://www.securis360.com/",
      permissionConfirmed: "Yes",
      mutualCustomers: 0,
    },
    // {
    //   name: "Pensar",
    //   category: "Service Providers",
    //   tags: ["Pen Testing", "Vulnerability Management"],
    //   url: "https://www.pensarai.app/",
    //   description:
    //     "New partnership (Jan 27th) -pending NDA but hope to post soon",
    // },
    // {
    //   name: "Cimento",
    //   category: "Service Providers",
    //   tags: ["Employee Awareness Training", "Phishing Simulation"],
    //   url: "https://cimento.ai/",
    //   description:
    //     "expect yes, not sure if they are actually GA yet (meeting Feb 16)",
    // },
  ],
};
