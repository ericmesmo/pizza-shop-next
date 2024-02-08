'use server'

import { z } from 'zod'

const envSchema = z.object({
  MODE: z.enum(['development', 'production', 'test']).default('development'),
  API_URL: z.string(),
  NEXT_PUBLIC_API_URL: z.string(),
})

console.log(envSchema)

export const env = envSchema.parse(process.env)
