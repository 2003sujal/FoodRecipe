const mongoose = require("mongoose");
const User = require("./models/user");
const Recipe = require("./models/recipe");
require("dotenv").config();

mongoose.connect(process.env.CONNECTION_STRING || "mongodb://127.0.0.1:27017/foodRecipe")
    .then(async () => {
        console.log("Connected to DB");
        
        const user = await User.findOne({ email: "sujal@gmail.com" });
        if (user) {
            console.log("Found user:", user._id);
            const result = await Recipe.updateMany(
                { createdBy: { $exists: false } },
                { $set: { createdBy: user._id } }
            );
            console.log(`Updated ${result.modifiedCount} recipes.`);
        } else {
            console.log("User not found!");
        }
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
