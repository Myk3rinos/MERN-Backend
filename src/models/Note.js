import mongoose from "mongoose";

// 1. Create a schema
// 2. Create a model based on the schema
// 3. Export the model

const noteSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    content: {
        type:String,
        required:true
    },
},
{timestamps:true} // automatically add createdAt and updatedAt fields
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
