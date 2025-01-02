import { z } from 'zod';

export const createOurWorkSchema = z.object({
    title: z.string({ message: 'title is required' }).min(3),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    image_url: z.array(z.string()).optional(),
    heroId: z.number({ message: 'Hero ID is required' }) // Make heroId required
});

export const updateOurWorkSchema = z.object({
    title: z.string().min(3).optional(),
    description: z.string().optional(),
    subtitle: z.string().optional(),
    image_url: z.array(z.string()).optional(),
    heroId: z.number({ message: 'Hero ID is required' }) // Make heroId required
});

export type CreateOurWorkInput = z.infer<typeof createOurWorkSchema>;
export type UpdateOurWorkInput = z.infer<typeof updateOurWorkSchema>;
