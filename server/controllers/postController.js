const Post = require('../models/post');

const post_get = (req, res) => {
    Post.find().sort({ createdAt: -1 }) // newest to oldest, decsending order
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log('error retrieving posts from db');
        })
};

const post_create = (req, res) => {
    console.log(req.body);
    const post = new Post(req.body) // using deconstruction to match properties created object(post) and passed object(req.body)

    post.save()
        .then((result) => {
            // attach a status to the response and send it
            res.status(201).send();
        })
        .catch((err) => {
            console.log("error creating a post");
            // console.log(err);
            res.status(400).send();

        });
}

const post_delete = (req, res) => {
    const id = req.params.id;

    Post.findByIdAndDelete(id)
        .then((result) => {
            console.log(`post deleted: ${id}`);
            res.status(200).send();
        })
        .catch((err) => {
            console.log(err);
        })
}


module.exports = {
    post_get,
    post_create,
    post_delete
}