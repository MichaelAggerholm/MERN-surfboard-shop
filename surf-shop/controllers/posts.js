const Post = require('../models/post');
const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'dwf6izx4b',
    api_key: '124619525916557',
    api_secret: process.env.CLOUDINARY_SECRET
});

module.exports = {
    // Posts index
    async postIndex(req, res, next) {
        let posts = await Post.find({});
        res.render('posts/index', {posts});
    },
    // Posts new
    postNew(req, res, next) {
        res.render('posts/new');
    },
    // Posts create
    async postCreate(req, res, next) {
        // images array
        req.body.post.images = [];

        // image upload to cloudinary asynchronous
        for (const file of req.files) {
            let image = await cloudinary.v2.uploader.upload(file.path);
            req.body.post.images.push({
                url: image.secure_url,
                public_id: image.public_id
            });
        }

        // Create the new post object
        let post = await Post.create(req.body.post);
        res.redirect(`/posts/${post.id}`);
    },
    // Posts show
    async postShow(req, res, next) {
        let post = await Post.findById(req.params.id);
        res.render('posts/show', {post});
    },
    // Posts edit
    async postEdit(req, res, next) {
        let post = await Post.findById(req.params.id);
        res.render('posts/edit', {post});
    },
    // Posts update
    async postUpdate(req, res, next) {
        // Find the post by id.
        let post = await Post.findById(req.params.id);
        // Check if there's any images for deletion. (deleteImages comes from the body parser)
        if(req.body.deleteImages && req.body.deleteImages.length) {
            // assign deleteImages from req.body to its own variable.
            let deleteImages = req.body.deleteImages;
            //loop over deleteImages.
            for(const public_id of deleteImages) {
                // Delete image from cloudinary.
                await cloudinary.v2.uploader.destroy(public_id);
                // Delete image from post.images.
                for(const image of post.images) {
                    if(image.public_id === public_id) {
                        let index = post.images.indexOf(image);
                        // Remove image with splice.
                        post.images.splice(index, 1);
                    }
                }
            }
        }
        // Check if there are any new images for upload.
        if(req.files) {
            // Upload images.
            for (const file of req.files) {
                let image = await cloudinary.v2.uploader.upload(file.path);
                // Add images to post.images array.
                post.images.push({
                    url: image.secure_url,
                    public_id: image.public_id
                });
            }
        }
        // Update the post properties.
        post.title = req.body.post.title;
        post.description = req.body.post.description;
        post.price = req.body.post.price;
        post.location = req.body.post.location;

        // Save the updated post into the db.
        post.save();
        // Redirect back to the post view.
        res.redirect(`/posts/${post.id}`);
    },
    // Posts destroy
    async postDestroy(req, res, next) {
        await Post.findByIdAndRemove(req.params.id);
        res.redirect(`/posts`);
    }
}