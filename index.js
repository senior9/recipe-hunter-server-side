const express =require('express');
const app = express();
const port =  process.env.PORT || 5000;
const  cors = require('cors');

app.use(cors());
const chief = require('./chef.json');
const recipe = require('./recipe.json');


app.get("/chief", (req,res)=>{
    res.send(chief);
    console.log(chief)
})

// chief id capture 

app.get(("/chief/:id"),(req,res)=>{
  const id =parseInt(req.params.id);
  const clickChiefCard = chief.find(c=>parseInt(c.id) == id);
  res.send(clickChiefCard);
  console.log(clickChiefCard)
})


// Recipe Category
app.get("/recipe", (req,res)=>{
    res.send(recipe);
    console.log(recipe);
})


// Recipe Id Captured 
app.get("/recipe/:id", (req,res)=>{
  const id = parseInt(req.params.id);
  const findRecipe = recipe.find(recipe => parseInt(recipe.chef_category_id) === id);
  if(findRecipe){
    res.send(findRecipe);
    console.log(findRecipe);
  }
  else{
    res.status(404).send("Recipe not found.");
  }
})



  app.listen(port,()=>{
    console.log("apps running ")
})