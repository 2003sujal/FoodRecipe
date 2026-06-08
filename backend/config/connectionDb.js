const mongoose = require("mongoose");
const dns = require("dns");

// Override default DNS resolution to Google and Cloudflare DNS to bypass local SRV lookup issues
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDb = async () => {
    await mongoose.connect(process.env.CONNECTION_STRING)
    .then (()=>console.log("connected"))
}

module.exports = connectDb;