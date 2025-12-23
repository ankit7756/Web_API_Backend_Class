import mongoose from "mongoose";
import { MONGODB_URL } from "../config";

export async function connectDatabase() {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("Connected to MongoDB successfully.");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit process with failure
    }
}