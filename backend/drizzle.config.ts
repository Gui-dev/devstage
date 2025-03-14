import type { Config } from 'drizzle-kit'
import { env } from './src/shared/config/env'

export default {
  schema: './src/shared/databases/drizzle/schemas/*',
  out: './src/shared/databases/drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
} satisfies Config
