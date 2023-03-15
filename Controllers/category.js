const connection = require("../Config/dbConnection");
module.exports = {
  // Create a new category
  addCategory: async (req, res) => {
    try {
      const { name } = req.body;
      const query = `INSERT INTO categories (name) VALUES (?)`;

      connection.query(query, [name], (err, result) => {
        if (err) throw err;
        res.send(`Category "${name}" created successfully!`);
      });
    } catch (error) {
      res.send("Server error");
      console.log(error);
    }
  },

  // Get all categories   
  getCategory: async (req, res) => {
    try {
      const sql = "SELECT * FROM categories";
      connection.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    } catch (error) {
      res.send("Server error");
      console.log(error);
    }
  },
};
