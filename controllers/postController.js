
const Post = require('../models/Post');

exports.index = async(req, res) => {
     try {
    const post = await Post.findAll();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


// Create
exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Post.create({ title, content });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// get data

exports.getPost= async(req, res) => {
     try {
    const post = await Post.findByPk(req.params.id);
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
 

// update data

exports.updatePost= async(req, res) => {
     try {
    const post = await Post.findByPk(req.params.id);
    post.title = req.body.title;
    post.content = req.body.content;
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


// delete data

exports.deletePost= async(req, res) => {
     try {
    const post = await Post.findByPk(req.params.id);
    await post.destroy();
    res.status(201).json({message:"delete successfully"});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}