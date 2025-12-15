import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.email(),
    password: z.string().min(2).max(20)
})

export type LoginSchemaObj = z.infer<typeof LoginSchema>;