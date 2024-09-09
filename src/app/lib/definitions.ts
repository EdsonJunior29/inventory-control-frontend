import { z } from 'zod'

export const SignupFormSchema = z.object({
    email: z.string().email({message: 'Please enter a valid email'}).trim(),
    password: z.string()
        .min(8, {message: 'Be at least 8 characters long'})
        .regex(/[A-Z]/, {message: 'Contain at least one uppercase letter.'})
        .regex(/[a-z]/, {message: 'Contain at least one lowercase letter.'})
        .regex(/[0-9]/, {message: 'Contain at least one number.'})
        .regex(/[a-zA-Z0-9_]/, {message: 'Contain at least one special character.'}).trim()
        .refine(value => !/123|234|345|456|567|678|789/.test(value), {
            message: 'Does not contain sequential numbers'})
})

export type FormState = | {
    errors?:{
        email?: string[]
        password?: string[]
    }
    message?: string
    
} | undefined

export type SessionPayload = {
    userId: string;
    token: string;
    expiresAt?: Date;
};
