import dotenv from 'dotenv';
dotenv.config();


export const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
export const MONGODB_URL: string = process.env.MONGODB_URL || 'mongodb://localhost:27017/defaultdb';
// Application level contants, with fallbacks
// if .env variables are not set

