import { defineCollection, z } from "astro:content";

// Define the schema for the Wonderland of Love content
const filmographyCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      status: z.number().optional(), // 0 => released, 1 => ongoing,  2 => upcoming, 3 => filming
      releasedstatus: z.string(), // Date in YYYY-MM-DD format
      description: z.array(z.string()).optional(),
      isBanner: z.boolean().optional(),
      genre: z.string().optional(),
      episodes: z.number().optional(),
      tags: z.array(z.string()).optional(),
      type: z.number().optional(), // 0 => tv series, 1 => movie, 2 => variety shows
      novellink: z.string().optional(),
      originalNetwork: z.array(z.string()).optional(),
      country: z.string().optional(),
      cardimages: z.array(z.string()).optional(),
      images: z.array(image()).optional(),
      role: z.string().optional(),
      banner: z.object({
        high: image(),
        medium: image(),
        low: image(), // Make `low` optional
      }),
      rating: z.string(),
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
const newsCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      img: image(),
      description: z.array(z.string()).optional(),
      videourl: z.string().optional(),
    }),
});
export const collections = {
  filmography: filmographyCollection,
  news: newsCollection,
};
