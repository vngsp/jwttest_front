import * as z from 'zod';

export const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.email()
})

export type userSchemaObj = z.infer<typeof userSchema>;