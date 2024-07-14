const mongoose=require("mongoose")

// Define the schema and model
const todoSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: String,
}, { timestamps: true });

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo