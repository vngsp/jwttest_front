import * as z from 'zod';

export const AuthSchema = z.object({
    name: z.string().min(2).max(18),
    email: z.email(),
    password: z.string().min(2).max(20)
})

export type AuthSchemaObj = z.infer<typeof AuthSchema>;