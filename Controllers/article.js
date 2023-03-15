const connection = require("../Config/dbConnection");
module.exports = {
  // Create new article
  addArticle: async (req, res) => {
    try {
      const article = req.body;
      const sql = "INSERT INTO articles SET ?";
      await connection.query(sql, article, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Article created");
      });
    } catch (error) {
      res.send("Server error");
      console.log(error);
    }
  },

  // Get all articles
  getArticles: async (req, res) => {
    try {
      const sql = "SELECT * FROM articles";
      connection.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    } catch (error) {
      res.send("Server error");
      console.log(error);
    }
  },

  // Edit an article
  editArticle: async (req, res) => {
    try {
      const id = req.params.id;
      const article = req.body;
      const sql = "UPDATE articles SET ? WHERE id = ?";
      connection.query(sql, [article, id], (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Article updated");
      });
    } catch (error) {
      res.send("Server error");
      console.log(error);
    }
  },

  // Delete an article
  deleteArticle: async (req, res) => {
    try {
      const id = req.params.id;
      const sql = "DELETE FROM articles WHERE id = ?";
      connection.query(sql, id, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Article deleted");
      });
    } catch (error) {
      res.send("Server error");
      console.log(error);
    }
  },

  // Get articles by category
  ArticlesByCategory: async (req, res)=> {
    try {
        const category = req.params.category;
        const query = `SELECT * FROM articles WHERE categories LIKE '%${category}%'`;
        connection.query(query, (err, results) => {
          if (err) throw err;
          res.send(results);
        });
    } catch (error) {
        
    }
  },

};
