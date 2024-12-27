import zod from 'zod';

export const createServiceSchema = zod.object({
    name: zod.string({ message: 'Name is required' }).min(3),
    description: zod.string().optional(),
    image_url: zod.string().optional()
});

export const updateServiceSchema = zod.object({
    name: zod.string().min(3).optional(),
    description: zod.string().optional(),
    image_url: zod.string().optional()
});
