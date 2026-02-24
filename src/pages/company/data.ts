type Tag = { label: string; variant: "feature" | "ui" };

export type ChangelogItemType = {
  date: string;
  title: string;
  description: string;
  tags?: Tag[];
};

export const changelogData: ChangelogItemType[] = [
  {
    date: "Nov 10, 2025",
    title: "Added Trust Center document visibility settings",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi in quisque pellentesque dictum nunc mi pellentesque ornare. Velit tristique ultrices ut vel tellus. Viverra vivamus sapien lectus tortor ultricies quam eget. Diam sed bibendum risus turpis elementum. Diam vulputate mauris lobortis vitae congue odio.",
    tags: [
      { label: "FEATURE", variant: "feature" },
      { label: "UI", variant: "ui" },
    ],
  },
  {
    date: "Nov 11, 2025",
    title: "Added Trust Center document visibility settings",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi in quisque pellentesque dictum nunc mi pellentesque ornare. Velit tristique ultrices ut vel tellus. Viverra vivamus sapien lectus tortor ultricies quam eget. Diam sed bibendum risus turpis elementum. Diam vulputate mauris lobortis vitae congue odio.",
    tags: [{ label: "FEATURE", variant: "feature" }],
  },
  {
    date: "Nov 12, 2025",
    title: "Added Trust Center document visibility settings",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi in quisque pellentesque dictum nunc mi pellentesque ornare. Velit tristique ultrices ut vel tellus. Viverra vivamus sapien lectus tortor ultricies quam eget. Diam sed bibendum risus turpis elementum. Diam vulputate mauris lobortis vitae congue odio.",
    tags: [{ label: "UI", variant: "ui" }],
  },
];

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
};
