import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env.example")) });

export const env = {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  jwt_Access_secret_key: process.env.JWT_ACCESS_SECRET_KEY,
  jwt_Access_expires_in: process.env.ACCESS_TOKEN_EXPIRY,
  admin_email: process.env.ADMIN_EMAIL,
  admin_password: process.env.ADMIN_PASSWORD,
};
