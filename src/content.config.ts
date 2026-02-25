import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const glossary = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    related: z.array(z.string()).optional(),
  }),
});

export const tagEnum =  z.enum([
            "feature",
            "improvement",
            "bugfix",
            "performance",
            "breaking-change",
            "beta",
            "trust-center",
            "compliance",
            "controls",
            "frameworks",
            "automation",
            "exposure",
            "notifications",
            "assessments",
            "registry",
            "ui",
            "ux",
            "api",
            "ai",
            "auth",
            "sso",
          ])

const changelog = defineCollection({
  loader: glob({ base: "./src/content/changelog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(
      z
        .string()
        .transform((s) => s.toLowerCase())
        .pipe(
          tagEnum,
        ),
    ),
  }),
});

export const collections = { blog, glossary, changelog };
