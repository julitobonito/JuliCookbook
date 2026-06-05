import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    diet: z.array(z.enum(['meat', 'vegetarian', 'vegan', 'low-carb'])),
    mealType: z.enum(['breakfast', 'lunch-dinner', 'dessert']),
    cuisine: z.string(),
    time: z.string(),
    servings: z.union([z.string(), z.number()]),
    source: z.string().optional(),
  }),
});

export const collections = { recipes };
