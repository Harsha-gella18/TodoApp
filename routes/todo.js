
const express=require("express");
const router = express.Router()
const todo=require("../congtrollers/todo")

router.get("/",todo.homecontroller);

router.get("/add-todo",todo.addTodoFormController );

// GET route to render update form
router.get("/update-todo",todo.addTodoFormController );

router.get("/delete-todo",todo.DeleteTodoFormController);

router.post("/add-todo",todo.addTodoPageController );



module.exports = router;