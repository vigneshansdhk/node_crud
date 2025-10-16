
const Post = require('../models/Post');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const BlackListToken = require('../models/blackListToken');


const generateToken = (id) => {
  return jwt.sign({ id }, "your_secret_key", {
    expiresIn: '30d'
  });
};

exports.index = async(req, res) => {
     try {
    const post = await Post.findAll();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

//Register

exports.createUser = async (req, res) => {
  try {
    const { name, email,phone_number,password,address } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email,password: hashedPassword,phone_number,address });

    const token = generateToken(user.id);

    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: {user,token},
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


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
   return res.status(201).json({message:"delete successfully"});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


// logout user


exports.logoutUser= async(req, res) => {

     try {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
      return res.status(401).json({message : "Token is missing"});
    }

    const token = authHeader.split(' ')[1];

    await BlackListToken.create({ token : token });

    return res.status(200).json({message:"Logout successfully"});

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}