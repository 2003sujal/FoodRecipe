const express=require("express")
const { getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe } = require("../controller/recipe")
const router=express.Router()
 router.get("/",getRecipes)//get all recipe 
 router.get("/:id",getRecipe)//get all recipe by id 
 router.post("/",addRecipe)
 router.put("/:id",editRecipe)//editRecipe
 router.delete("/:id",deleteRecipe)


 
module.exports=router
