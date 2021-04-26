const express = require("express");
const router = express.Router();

// Load Article model
const Article = require("../../models/Article");

// @route POST api/article/create
// @desc Article
// @access Public
router.post("/create", (req, res) => {


  Article.findOne({ reference: req.body.reference }).then(articles => {
    if (article) {
      return res.status(400).json({ reference: "Reference existe déjà !" });
    } else {
      const newArticle = new Article({
        reference: req.body.reference,
        name: req.body.name,
        description: req.body.description,
        family: req.body.family,
        quantite: req.body.quantite,
        path: req.body.path
      });
      newArticle
      .save()
      .then(articles => res.json(articles))
      .catch(err => console.log(err));
    }
  });
});

router.get("/getArticle", (req, res) => {

  console.log(res.articles.catch(err => console.log(err)))
    return res.json(res.articles.catch(err => console.log(err)));
    
})
  module.exports = router;
