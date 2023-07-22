let Post = require('../../models/posts.model');
let User = require('../../models/user.model')


const getPost = async(req, res) =>{
    try{
        // const post = await Post.find()
        // res.json(post)

        ///////////////////////
        const posts = await Post.find();
        const postsWithUsername = await Promise.all(
            posts.map(async (post) => {
                const user = await User.findOne({ email: post.email });
                return { ...post.toObject(), username: user ? user.username : 'Unknown' };
            })
        );
        console.log("post with username : " + postsWithUsername)
        res.json(postsWithUsername);
    }
    catch(err){
        res.status(500).json(err)
    }
}

module.exports = getPost