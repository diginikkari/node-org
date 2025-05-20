import { z } from 'zod';

export function myLib(): string {
    const nameSchema = z.string().min(1);
    const result = nameSchema.parse('John');
    return result;
}