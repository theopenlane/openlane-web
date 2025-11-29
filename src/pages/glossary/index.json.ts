import { getCollection } from "astro:content";

export const prerender = true;

export async function GET() {
  const baseUrl = "https://www.theopenlane.io";
  const entries = await getCollection("glossary");

  const terms = entries.map((entry) => ({
    slug: entry.slug,
    name: entry.data.name,
    description: entry.data.description,
    url: `${baseUrl}/glossary/${entry.slug}`,
    related: entry.data.related ?? [],
  }));

  const body = JSON.stringify(
    {
      site: baseUrl,
      generatedAt: new Date().toISOString(),
      terms,
    },
    null,
    2,
  );

  return new Response(body, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
