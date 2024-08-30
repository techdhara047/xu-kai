import { defineCollection, z } from "astro:content";

// Define the schema for the Wonderland of Love content
const filmographyCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      useStatus: z.number().int(), // 0, 1, or 2
      releasedstatus: z.string(), // Date in YYYY-MM-DD format
      description: z.string(),
      isBanner: z.boolean().optional(),
      genre: z.string().optional(),
      episodes: z.array(z.string()).optional(),
      tags: z.array(z.string()).optional(),
      type: z.number().optional(), // 0 => tv series, 1 => movie, 2 => variety shows
      novellink: z.string().optional(),
      originalNetwork: z.array(z.string()).optional(),
      country: z.string().optional(),
      banner: z.object({
        high: image(),
        medium: image(),
        low: image(), // Make `low` optional
      }),
      rating: z.number(),
      watchlinks: z
        .array(
          z.object({
            name: z.string(),
            link: z.string(),
          }),
        )
        .optional(),
      casts: z
        .array(
          z.object({
            name: z.string(),
            role: z.string(),
          }),
        )
        .optional(), // Make `casts` optional
    }),
});

export const collections = {
  filmography: filmographyCollection,
};
