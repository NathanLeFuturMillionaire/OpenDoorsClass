import { config } from "dotenv";
// S'assure de charger .env.local prioritairement
config({ path: ".env.local" });

import { defineConfig, env } from "prisma/config";

// Utilise DIRECT_URL, ou bascule sur DATABASE_URL si absente
const connectionUrl = process.env.DIRECT_URL || process.env.DATABASE_URL;

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: connectionUrl,
  },
});