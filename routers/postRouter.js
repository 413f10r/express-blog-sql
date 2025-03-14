const express = require("express");

const router = express.Router()

const { show, index, destroy } = require('../controllers/postController')


//INDEX
router.get('/', index);


//SHOW
router.get('/:id', show);


//DESTROY
router.delete('/:id', destroy)




module.exports = router