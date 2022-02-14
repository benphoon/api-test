const express = require('express')
const router = express.Router();
const Post = require('../models/Post')

//ROUTES
//get - get info
//post -  eg submit a form (give info)
//delete - delete data
//patch - update a resource
//first parameter = route

router.get('/', (req, res) => {
    res.send('We are on posts')
});

router.post('/', (req, res) => {
    const post = {
        console.log(req.body);
    }
})

module.exports = router;