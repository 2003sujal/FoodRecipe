const mongoose = require("mongoose");

const connectDb = async () => {
    const primaryConnectionString = process.env.CONNECTION_STRING || process.env.MONGO_URI;
    const fallbackConnectionString = "mongodb://127.0.0.1:27017/FoodRecipe";

    try {
        await mongoose.connect(primaryConnectionString || fallbackConnectionString);
        console.log("Connected to MongoDB");
        return true;
    } catch (err) {
        if (primaryConnectionString && primaryConnectionString !== fallbackConnectionString) {
            console.warn("Primary MongoDB connection failed, trying local MongoDB...");

            try {
                await mongoose.connect(fallbackConnectionString);
                console.log("Connected to local MongoDB");
                return true;
            } catch (fallbackErr) {
                console.error("Local MongoDB connection failed:", fallbackErr.message);
                return false;
            }
        }

        console.error("Database connection failed:", err.message);
        return false;
    }
};

module.exports = connectDb;