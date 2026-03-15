import "dotenv/config";
import type { Config } from "drizzle-kit";



function parseDatabaseUrl(url: string) {
  // [1]=user, [2]=password, [3]=host, [4]=port, [5]=database, [7]=sslmode
  const match = url.match(/^postgres(?:ql)?:\/\/([^:]+):([^@]+)@([^:/]+)(?::(\d+))?\/([^?]+)(\?sslmode=(\w+))?/);
  if (!match) throw new Error("Invalid DATABASE_URL");
  return {
    host: match[3],
    port: match[4] ? Number(match[4]) : 5432,
    user: match[1],
    password: match[2],
    database: match[5],
    ssl: !!match[7],
  };
}

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: parseDatabaseUrl(process.env.DATABASE_URL!),
} satisfies Config;