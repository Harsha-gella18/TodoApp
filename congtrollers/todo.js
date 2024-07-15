const moment = require("moment")
const Todo=require("../models/Todo")
const homecontroller = async (req, res, next) => {
    try {
        const todos = await Todo.find().sort({ createdAt: -1 });
        res.render("index", { title: "List Todo", todos });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const addTodoFormController = (req, res, next) => {

    try {
        res.render("newTodo", { title: "Add Todo" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateTodoFormCOntroller =async (req, res, next) => {
    try {
        const {id} = req.query;
        const todo = await Todo.findById(id);
        res.render("updateTodo", { title: "Update Todo", todo });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const DeleteTodoFormController=(req, res, next) => {
    try {
        const {id} = req.query;
        res.render("deleteTodo", { title: "Delete Todo" ,id});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const addTodoPageController=async (req, res, next) => {
    try {
        const { title, description } = req.body;

        // Create and save new todo
        const newTodo = new Todo({ title, description });
        await newTodo.save();

        // Redirect to the home page after adding the todo
        res.redirect("/");
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: error.message });
    }
}

const updateTodoPageController = async (req, res, next) => {
    try {
        const id = req.query.id;
        const { title, description } = req.body;
        const todo = await Todo.findById(id);

        if (!todo) {
            return res.status(400).json({ message: "Todo not found" });
        }

        todo.title = title;
        todo.description = description;

        await todo.save();

        return res.redirect("/");
    } catch (error) {
        console.error(error); // Optional: log the error for debugging
        return res.status(500).json({ message: error.message });
    }
};

const deleteTodoPageController=async (req, res, next) => {
    try {
        const {id,confirm} = req.query;
        const todo = await Todo.findById(id);

        if (confirm === "yes") {
            await Todo.findByIdAndDelete(id);
        }

        return res.redirect("/");
    } catch (error) {
        console.error(error); 
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {homecontroller,
    addTodoFormController,
    updateTodoFormCOntroller,
    DeleteTodoFormController,
    addTodoPageController,
    updateTodoPageController,
    deleteTodoPageController}