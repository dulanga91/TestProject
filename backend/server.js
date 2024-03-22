const express = require('express');
const cors = require('cors');
const mysql = require('mysql');


const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: "http://localhost:3000",
        //credentials: true
    }
))

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'employee_db'
});
// Connect to the database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Get all employees
app.get('/employees', (req, res) => {
  connection.query('SELECT * FROM employee', (error, results) => {
    if (error) {
      console.error('Error querying employees:', error);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
    console.log('Server is running on port 5000')
})