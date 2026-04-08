import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string().optional(),
    preheader: z.string().optional().nullable(),
    subheader: z.string().optional().nullable(),
    date: z.coerce.date().optional(),
    lead: z.string().optional(),
    widgets: z.array(z.any()).optional(),
  }),
});

export const collections = { pages };
