const mongoose = require('mongoose');

// Schemas describe how the data looks
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
})

module.export = mongoose.model('Posts', PostSchema);