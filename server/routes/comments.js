
const express = require('express')
const router = express.Router()
const { Comment } = require('../models/comment')

// to validate object IDs
const { ObjectID } = require('mongodb')


//Get all Comments
router.get('/', getUser, async (req, res) =>{
    res.json(res.user.userComment)
})

//Getting One
router.get('/:comment_id', getUser, getComment, (req, res) => {
    res.json(res.post)
})

//Creating One comment 
router.post('/:id', getUser, async (req, res)=>{
    const comment = new Comment({
        responseTo: req.body.responseTo,
        content: req.body.content
    })
    res.user.userComment.push(comment)
    try{
        const newComment = await comment.save()
        res.status(200).json(newComment)
    }catch(err){
        res.status(400).json({messge: err.message})
    }
})


router.patch('/comment/:id', getUser, getComment ,async (req, res) => {
	// Add code here
	try{
		if (req.body.responseTo != null){
			res.user.comment.responseTo = req.body.responseTo  
		}
		if (req.body.content != null){
			res.user.comment.content = req.body.content
		}
		const patchedComment= await res.user.save()
		res.send({
			"user": res.user,
			"comment": res.user.comment
		})
	}catch(err){
		res.status(500).json({message: err.message})
	}
})

//Delete One
router.delete('/comment/:id', (req, res) => {
	const id = req.params.id

	// Validate id
	if (!ObjectID.isValid(id)) {
		res.status(404).send()
	}

	// Delete a post by their id
	Comment.findByIdAndRemove(id).then((comment) => {
		if (!comment) {
			res.status(404).send()
		} else {   
			res.send(comment)
		}
	}).catch((error) => {
		res.status(500).send() 
	})
})

//MiddleWare to get specific comment 
async function getComment(req, res, next) {
    let comment
    try{
        comment = await res.user.userComment.id(req.params.comment_id)
        if (comment == null){
            return res.status(404).json({message: 'Cannot find post'})
        }
    }catch (err){
        return res.status(500).json({message: err.message})
    }
    res.comment = comment
    next()
}

module.exports = router 
