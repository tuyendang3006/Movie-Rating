const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CommentSchema = mongoose.Schema({
	
	writer: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }, 
    postId: {
        type: String,
    },
    responseTo: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    content: {
        type: String
    }

}, { timestamps: true })

// make a model using the User schema
module.exports = mongoose.model('Comment', CommentSchema)
