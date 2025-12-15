import * as z from 'zod';

export const DeleteUserSchema = z.object({
    id: z.string()
})

export type DeleteUserSchemaObj = z.infer<typeof DeleteUserSchema>;