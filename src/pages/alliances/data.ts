export interface Alliance {
  name: string;
  category: "Audit Firms" | "Service Providers";
  tags?: string[];
  logo?: string;
  description?: string;
  url?: string;
}

export const alliances: Record<string, Alliance[]> = {
  auditors: [
    {
      name: "Geels Norton",
      category: "Audit Firms",
      tags: ["SOC 1", "SOC 2", "SSPA", "ISO 27001", "ISO 27017", "ISO 27018"],
      logo: "/assets/alliances/GeelsNorton.png",
      description:
        "A premier boutique audit and advisory firm, setting the bar for personalized experiences and high-quality auditing",
      url: "https://www.geelsnorton.com/",
    },
    {
      name: "Certra",
      category: "Audit Firms",
      tags: ["SOC 1", "SOC 2", "HIPAA"],
      logo: "/assets/alliances/Certra Logo - White Background (250 x 150 px).png",
      description:
        "Helping organizations build trust and strengthen controls -SOC 1, SOC 2, and HIPAA audit services",
      url: "https://certra.com/",
    },
    {
      name: "Consilium Labs",
      category: "Audit Firms",
      tags: [
        "SOC 2",
        "ISO 27001",
        "ISO 42001",
        "CSA Star",
        "SSPA",
        "CMMC Pre-Assessment",
      ],
      description:
        "Cybersecurity experts who specialize in conducting cybersecurity audits, we provide real value from the audit and enhance your organization's security",
      logo: "/assets/alliances/Consilium Labs_Logo.png",
      url: "https://consilium-labs.com/",
    },
        {
      name: "Insight Assurance",
      category: "Audit Firms",
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
        "A global audit and compliance firm helping organizations navigate complex regulatory frameworks—including SOC, ISO, HITRUST, PCI, CMMC, FedRAMP, and more—with clarity, quality, and integrity.",
      url: "https://hubs.li/Q045rQ2-0",
    },
    {
      name: "Maxwell Locke & Ritter",
      category: "Audit Firms",
      tags: ["SOC 1", "SOC 2", "HIPAA"],
      logo: "/assets/alliances/ML&R Logo - Standard.jpg",
      description:
        "Boutique SOC 2 readiness, examination, and advisory services provider known for efficiency, technical expertise, and a client-first approach",
      url: "https://www.mlrpc.com/",
    },
    {
      name: "Prescient Security",
      category: "Audit Firms",
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
        "A renowned leader in multi-framework compliance auditing, security assessments, and penetration testing, eliminating compliance gaps and enabling a fortified security stance for organizations",
    },
    {
      name: "Securis 360",
      category: "Audit Firms",
      tags: ["SOC 2", "ISO 27001", "HITRUST", "HIPAA", "GDPR"],
      logo: "/assets/alliances/Securis 360_Logo.png",
      description:
        "Specializes in cloud-native technologies and modern application security, tackling present challenges while anticipating future vulnerabilities",
      url: "https://www.securis360.com/",
    },
    {
      name: "Securisea",
      category: "Audit Firms",
      tags: ["SOC 1", "SOC 2", "ISo 27001", "PCI", "HITRUST", "FedRamp/GovRAMP", "HIPAA", "CMMC", "GDPR", "NIST", "CSA Star"],
      logo: "/assets/alliances/Securisea_blue.svg",
      description:
        "A cybersecurity audit and consulting firm with 20+ years of experience delivering rigorous compliance assessments across security, privacy, and AI frameworks for regulated industries.",
      url: "https://www.securisea.com//",
    },
  ],

  "service-providers": [
    {
      name: "Secure Cloud Innovations",
      category: "Service Providers",
      tags: ["Compliance as a Service", "vCISO", "Pen Testing"],
      logo: "/assets/alliances/SCI-Logox100.png",
      description:
        "US-Based founder-first security partners delivering real-world compliance and testing without checklists, fear, or vendor lock-in games",
      url: "https://securecloudinnovations.net/",
    },
    {
      name: "Certra",
      category: "Service Providers",
      tags: ["SOC 1", "SOC 2", "HIPAA"],
      logo: "/assets/alliances/Certra Logo - White Background (250 x 150 px).png",
      description:
        "Helping organizations build trust and strengthen controls -SOC 1, SOC 2, and HIPAA audit services",
      url: "https://certra.com/",
    },
    {
      name: "Consilium Labs",
      category: "Service Providers",
      tags: ["Pen Testing"],
      description:
        "Cybersecurity experts who specialize in conducting cybersecurity audits, we provide real value from the audit and enhance your organization's security",
      logo: "/assets/alliances/Consilium Labs_Logo.png",
      url: "https://consilium-labs.com/",
    },
    {
      name: "CyberFortify",
      category: "Service Providers",
      tags: ["Cybersecurity", "Penetration Testing", "VAPT", "Compliance", "Application Security"],
      logo: "/assets/alliances/CyberFortify - logo.png",
      description:
        "Delivers penetration testing and security assessments helping businesses identify vulnerabilities, achieve compliance, strengthen posture",
      url: "https://cyberfortify.co/",
    },
    {
      name: "Insight Assurance",
      category: "Service Providers",
      tags: ["Pen Testing", "NIST CSF", "DORA", "NIS 2", "C5"],
      logo: "/assets/alliances/Insight-Assurance.svg",
      description:
        "A global audit and compliance firm helping organizations navigate complex regulatory frameworks—including SOC, ISO, HITRUST, PCI, CMMC, FedRAMP, and more—with clarity, quality, and integrity.",
      url: "https://hubs.li/Q045rQ2-0",
    },
    {
      name: "Maxwell Locke & Ritter",
      category: "Service Providers",
      tags: ["SOC 1", "SOC 2", "HIPAA"],
      logo: "/assets/alliances/ML&R Logo - Standard.jpg",
      description:
        "Boutique SOC 2 readiness, examination, and advisory services provider known for efficiency, technical expertise, and a client-first approach",
      url: "https://www.mlrpc.com/",
    },
    {
      name: "Prescient Security",
      category: "Service Providers",
      tags: ["Pen Testing", "Security Assessments"],
      logo: "/assets/alliances/PrescientSecurity-Logo-Horiz-RGB.png",
      url: "https://prescientsecurity.com/",
      description:
        "Compliance as one part of a multi-pillared security strategy, assessing needs and deliverables from a cybersecurity standpoint first",
    },
    {
      name: "Securis 360",
      category: "Service Providers",
      tags: ["Pen Testing as a Service", "vCISO", "Employee Awareness Training", "Phishing Simulation"],
      logo: "/assets/alliances/Securis 360_Logo.png",
      description:
        "Specializes in cloud-native technologies and modern application security, tackling present challenges while anticipating future vulnerabilities",
      url: "https://www.securis360.com/",
    },
    {
      name: "Securisea",
      category: "Service Providers",
      tags: ["CMMC Consulting", "HIPAA", "FedRAMP Consulting", "Pen Testing", "PCI Consulting", "ISO Internal Audit"],
      logo: "/assets/alliances/Securisea_blue.svg",
      description:
        "A cybersecurity audit and consulting firm with 20+ years of experience delivering rigorous compliance assessments across security, privacy, and AI frameworks for regulated industries.",
      url: "https://www.securisea.com//",
    },
    {
      name: "SideKick",
      category: "Service Providers",
      tags: ["vCISO", "Compliance Readiness", "Pen Testing"],
      logo: "/assets/alliances/sidekick-logo.png",
      description:
        "Protect and empower your organization by designing, building and delivering security that is tailored to your unique systems, users, needs and priorities",
      url: "https://sidekicksecurity.io/",
    },
    {
      name: "Stronta",
      category: "Service Providers",
      tags: ["Compliance as a Service", "vCISO"],
      logo: "/assets/alliances/Stronta.png",
      description:
        "Startup-focused security built for scale. Stronta handles security while you build towards the next milestone",
      url: "https://www.stronta.com/",
    },
  ],
};
