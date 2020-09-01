const mongoose = require('mongoose');

// Superclass interface for all data models 
const Schema = mongoose.Schema;

const postSchema = new Schema({
    // Every property in the schema has its own defined properties
    title:{
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
    
}, {timestamps: true}); // Second object is for options

// model gives us a framework to interact with the schemas in our db
const Post = mongoose.model('Post', postSchema); // Creating a const object to access our collection with

module.exports = Post;