import { z } from 'zod'

const envSchema = z.object({
  MODE: z.enum(['production', 'development', 'test']),
  VITE_API_URL: z.string(),
  VITE_API_PORT: z.string(),
  VITE_ENABLE_API_DELAY: z
    .string()
    .transform(value => value === 'true')
    .optional(),
})

export const env = envSchema.parse(import.meta.env)
