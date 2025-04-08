const mongoose = require("mongoose");

const MONGODB_URL = "mongodb://localhost:27017/";
const DB_NAME = "yourDatabaseName";  // Replace with actual DB name

const dbConfig = async () => {
    try {
        const instance = await mongoose.connect(
            `${MONGODB_URL}${DB_NAME}?retryWrites=true&w=majority`,
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log("MongoDB connected successfully!");
        return instance;
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

module.exports = { dbConfig };
