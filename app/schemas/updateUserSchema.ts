import * as z from 'zod';

export const UpdateUserSchema = z.object({
    email: z.email(),
    name: z.string().min(2).max(20)
})

export type UpdateUserSchemaObj = z.infer<typeof UpdateUserSchema>;