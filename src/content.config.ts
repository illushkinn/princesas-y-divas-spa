/**
 * ─────────────────────────────────────────────
 * Princesas & Divinas — Content Collections
 * ─────────────────────────────────────────────
 * Configura las colecciones de contenido (blog).
 * Usa el loader `glob` para archivos .md.
 */

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(["tips", "eventos", "promociones"]),
    coverImage: z.string().optional(),
    excerpt: z.string(),
    author: z.string().default("Princesas & Divinas"),
  }),
});

export const collections = { blog };
