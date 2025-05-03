const express = require('express');
const cors = require('cors');
const { readDb, writeDb } = require('./db_functions');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
  const data = readDb();
  res.json(data);
});

app.post('/api/data', (req, res) => {
  const newData = req.body;
  writeDb(newData);
  res.json({ message: 'Data saved successfully' });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
