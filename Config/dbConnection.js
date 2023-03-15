const mysql = require('mysql');

require('dotenv').config();

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to database!');

  const article = `CREATE TABLE articles (
      id INT AUTO_INCREMENT PRIMARY KEY,
      heading VARCHAR(255),
      read_time VARCHAR(10),
      description TEXT,
      categories VARCHAR(255),
      thumbnail_image VARCHAR(255),
      featured_image VARCHAR(255),
      verified BOOLEAN DEFAULT false,
      newest BOOLEAN DEFAULT true,
      trending BOOLEAN DEFAULT false,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`;

  connection.query(article, (err, result) => {
      if (err) throw err;
      console.log('Table "articles" created successfully!');
  });

  const categories = `CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`;  

  connection.query(categories, (err, result) => {
      if (err) throw err;
      console.log('Table "categories" created successfully!');
  });

  connection.end((err) => {
      if (err) throw err;
      console.log('Connection closed!');
  });
});

module.exports = connection;
