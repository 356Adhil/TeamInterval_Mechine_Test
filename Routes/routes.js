const router = require('express').Router();
const articleController = require('../Controllers/article')
const categoryController = require('../Controllers/category')

// Create new artilcle
router.post('/article',articleController.addArticle)

// Get all artilcles
router.get('/article',articleController.getArticles)

// Edit an artilcle
router.put('/articles/:id',articleController.editArticle)

// Get artilcles by category
router.get('/articles/:category', articleController.ArticlesByCategory)


// ----------------------- Category Routes ----------------------- //


// Create new category
router.post('/category',categoryController.addCategory)

// Get all categories
router.get('/category',categoryController.getCategory)

module.exports = router ;
