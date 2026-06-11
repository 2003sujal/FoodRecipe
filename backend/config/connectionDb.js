const mongoose = require("mongoose");
const dns = require("dns");

// Override DNS to bypass ISP/network blocks on MongoDB Atlas SRV records
dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);

const connectDb = async () => {
    await mongoose.connect(process.env.CONNECTION_STRING, {
        tls: true,
        serverSelectionTimeoutMS: 15000,
    })
    .then(() => console.log("Database connected successfully"))
    .catch((err) => {
        console.error("Database connection error:", err.message);
        process.exit(1);
    });
}

module.exports = connectDb;