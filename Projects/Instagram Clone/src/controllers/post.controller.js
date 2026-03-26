const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  console.log(req.body, req.file);

  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Token not provided, Unauthorized access",
    });
  }

  let decoded = null;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "User not Authorized",
    });
  }

  console.log(decoded);

  const file = await imageKit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer)),
    fileName: "Test",
    folder: "insta-clone",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: decoded.id,
  });

  res.status(201).json({
    message: "Post Created Succesfully",
    post,
  });
}

async function getPostController(req, res) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "UnAuthorized Access",
    });
  }

  let decoded = null;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    return res.status(401).json({
      message: "Token Invalid",
    });
  }

  const userId = decoded.id;

  const posts = await postModel.find({
    user: userId,
  });

  if (posts.length === 0) {
    return res.status(404).json({
      message: "No Posts Found",
    });
  }

  res.status(200).json({
    message: "Posts Fetched Succesfully",
    posts,
  });
}

async function getPostDetailsController(req, res) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "UnAuthorized Access",
    });
  }

  let decoded = null;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }

  const userId = decoded.id;
  const postId = req.params.postId;

  const post = await postModel.findById(postId);
  console.log(post);

  if (!post) {
    return res.status(404).json({
      message: "Post not Found",
    });
  }

  const isValidUser = post.user.toSring() == userId;

  if (!isValidUser) {
    return res.status(403).json({
      message: "Forbiddden Content",
    });
  }

  return res.status(200).json({
    message: "Post Fetched Succesfully",
  });
}

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,
};
