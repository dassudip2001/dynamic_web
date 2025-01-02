import zod from 'zod';

export const createServiceSchema = zod.object({
    name: zod.string({ message: 'Name is required' }).min(3),
    description: zod.string().optional(),
    image_url: zod.string().optional(),
    heroId: zod.number({ message: 'Hero ID is required' }) // Make heroId required
});

export const updateServiceSchema = zod.object({
    name: zod.string().min(3).optional(),
    description: zod.string().optional(),
    image_url: zod.string().optional(),
    heroId: zod.number().optional()
});

export type CreateServiceInput = zod.infer<typeof createServiceSchema>;
export type UpdateServiceInput = zod.infer<typeof updateServiceSchema>;
