let Post = require('../../models/posts.model');

const createPost = async(req, res) =>{
    const content = req.body.content;
    const username = req.username;
    const email = req.email
    
    console.log("userId : " + req.userId);

    const newPost = new Post({email,content})

    await newPost.save()
    .then(()=>res.status(200).json({msg: "post created successfully"}))
    .catch((err) => {
         res.status(400).json({msg: "error creating post"})
    })
}

module.exports = createPost