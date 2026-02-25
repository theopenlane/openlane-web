import { tagEnum } from "../../content.config"

type Tag = {
  label: string;
  variant: typeof tagEnum._type;
};

export type ChangelogItemType = {
  date: string;
  title: string;
  description: string;
  tags?: Tag[];
};

export const tagColors: Record<
  string,
  { bg: string; border: string; text: string }
> = {
  feature: {
    bg: "bg-bg-feature",
    border: "border-border-feature",
    text: "text-text-feature",
  },
  ui: { bg: "bg-bg-ui", border: "border-border-ui", text: "text-text-ui" },

  improvement: {
    bg: "bg-bg-improvement",
    border: "border-border-improvement",
    text: "text-text-improvement",
  },
  bugfix: {
    bg: "bg-bg-bugfix",
    border: "border-border-bugfix",
    text: "text-text-bugfix",
  },
  performance: {
    bg: "bg-bg-performance",
    border: "border-border-performance",
    text: "text-text-performance",
  },
  "breaking-change": {
    bg: "bg-bg-breaking-change",
    border: "border-border-breaking-change",
    text: "text-text-breaking-change",
  },
  beta: {
    bg: "bg-bg-beta",
    border: "border-border-beta",
    text: "text-text-beta",
  },
  "trust-center": {
    bg: "bg-bg-trust-center",
    border: "border-border-trust-center",
    text: "text-text-trust-center",
  },
  compliance: {
    bg: "bg-bg-compliance",
    border: "border-border-compliance",
    text: "text-text-compliance",
  },
  controls: {
    bg: "bg-bg-controls",
    border: "border-border-controls",
    text: "text-text-controls",
  },
  frameworks: {
    bg: "bg-bg-frameworks",
    border: "border-border-frameworks",
    text: "text-text-frameworks",
  },
  automation: {
    bg: "bg-bg-automation",
    border: "border-border-automation",
    text: "text-text-automation",
  },
  exposure: {
    bg: "bg-bg-exposure",
    border: "border-border-exposure",
    text: "text-text-exposure",
  },
  notifications: {
    bg: "bg-bg-notifications",
    border: "border-border-notifications",
    text: "text-text-notifications",
  },
  assessments: {
    bg: "bg-bg-assessments",
    border: "border-border-assessments",
    text: "text-text-assessments",
  },
  registry: {
    bg: "bg-bg-registry",
    border: "border-border-registry",
    text: "text-text-registry",
  },
  ux: { bg: "bg-bg-ux", border: "border-border-ux", text: "text-text-ux" },
  api: { bg: "bg-bg-api", border: "border-border-api", text: "text-text-api" },
  ai: { bg: "bg-bg-ai", border: "border-border-ai", text: "text-text-ai" },
  auth: {
    bg: "bg-bg-auth",
    border: "border-border-auth",
    text: "text-text-auth",
  },
  sso: { bg: "bg-bg-sso", border: "border-border-sso", text: "text-text-sso" },
};
