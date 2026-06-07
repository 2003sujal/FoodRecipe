const express=require("express")
const { getRecipes } = require("../controller/recipe")
const router=express.Router()
 router.get("/",getRecipes)//get all recipe 
 router.get("/:id",getRecipes)//get all recipe by id 
 router.post("/",addRecipe)
 router.put("/:id",editRecipe)//editRecipe
 router.delete("/:id",this.deleteRecipe)


 
module.exports=router
