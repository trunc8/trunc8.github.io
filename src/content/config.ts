import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string().optional().default(""),
    ogImage: z.string().optional(),
    theme: z.string(),
    tags: z.array(z.string()).default([]),
    mathjax: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    date: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    videoId: z.string().optional(),
    repo: z.string().optional(),
    demo: z.string().optional(),
    blog: z.string().optional(),
  }),
});

export const collections = { blog, projects };
