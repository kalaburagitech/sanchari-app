import dotenv from 'dotenv';

dotenv.config();

if (!process.env.MONGO_URI || !process.env.JWT_SECRET || !process.env.PORT) {
  throw new Error('Missing required environment variables.');
}

export const config = {
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  PORT: process.env.PORT || 5000,
};
