
import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3001
export const DB_USER =  process.env.POSTGRES_USER 
export const DB_PASSWORD = process.env.POSTGRES_PASSWORD 
export const DB_HOST = process.env.POSTGRES_HOST 
export const DB_DATABASE = process.env.POSTGRES_DATABASE 
export const DB_PORT = 5432
export const DB_SSL = true
export const POSTGRES_URL = process.env.POSTGRES_URL


// POSTGRES_URL="postgres://default:7TP6RCUwlzjZ@ep-divine-poetry-a4u3iwwo-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
// POSTGRES_PRISMA_URL="postgres://default:7TP6RCUwlzjZ@ep-divine-poetry-a4u3iwwo-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require&pgbouncer=true&connect_timeout=15"
// POSTGRES_URL_NO_SSL="postgres://default:7TP6RCUwlzjZ@ep-divine-poetry-a4u3iwwo-pooler.us-east-1.aws.neon.tech:5432/verceldb"
// POSTGRES_URL_NON_POOLING="postgres://default:7TP6RCUwlzjZ@ep-divine-poetry-a4u3iwwo.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
// POSTGRES_USER="default"
// POSTGRES_HOST="ep-divine-poetry-a4u3iwwo-pooler.us-east-1.aws.neon.tech"
// POSTGRES_PASSWORD="7TP6RCUwlzjZ"
// POSTGRES_DATABASE="verceldb"
