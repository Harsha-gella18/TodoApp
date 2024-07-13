
const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const bodyParser=require("body-parser")

const PORT = 7000

//init app
const app = express()

const connectionUrl = "mongodb://localhost:27017/todoList";

mongoose.connect(connectionUrl).then(() => {
    console.log("database conncection successful");
}
).catch((error) =>{
    console.log(error.message);
})

const todoSchema= mongoose.Schema({title: {type :String , required : true },
        description : String,
},{timestamps:true});


const Todo = mongoose.model("Todo",todoSchema);



//view engine



app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",async(req,res,next)=>{
    try{
        const todos=await Todo.find().sort({createdAt: -1});
        res.render("index",{title:"List Todo",todos});
    }catch(error){
        res.status(500).json({message: error.message})
    }

})

app.get("/add-todo",(req,res,next)=>{
    try{
        res.render("newTodo",{title:"Add Todo"});
    }catch(error){
        res.status(500).json({message: error.message})
    }
})
app.get("/update-todo",(req,res,next)=>{
    try{
        res.render("updateTodo",{title:"Update Todo"});
    }catch(error){
        res.status(500).json({message: error.message})
    }
})
app.get("/delete-todo",(req,res,next)=>{
    try{
        res.render("DeleteTodo",{title:"Delete Todo"});
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

app.post("/add-todo", async (req, res, next) => {
    try {
        const { title, description } = req.body;

        // Assuming Todo model and saving logic
        const newTodo = new Todo({ title, description });
        await newTodo.save();

        // Redirect to the home page after adding the todo
        res.redirect("/");
    } catch (error) {
        // Handle errors appropriately
        res.status(500).json({ message: error.message });
    }
});


//listen server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})