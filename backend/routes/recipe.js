const express=require("express")
const { getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe,upload } = require("../controller/recipe")
const verifyToken=require("../middleware/auth")
const router=express.Router()
 router.get("/",getRecipes)//get all recipe 
 router.get("/:id",getRecipe)//get all recipe by id 
 router.post("/", verifyToken, upload.single('file'), addRecipe)
 router.put("/:id",editRecipe)//editRecipe
 router.delete("/:id",deleteRecipe)


 
module.exports=router
