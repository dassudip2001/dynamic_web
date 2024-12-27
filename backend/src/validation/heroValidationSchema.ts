import { z } from 'zod';

export const createHeroSchema = z.object({
    name: z.string({ message: 'Name is required' }).min(3),
    description: z.string().optional()
});

export const updateHeroSchema = z.object({
    name: z.string().min(3).optional(),
    description: z.string().optional()
});

export type CreateHeroInput = z.infer<typeof createHeroSchema>;
export type UpdateHeroInput = z.infer<typeof updateHeroSchema>;
