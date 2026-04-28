const express = require('express');
const path = require('path');
const app = express();

// ✅ import data from data.js
const {
  DISASTER_ALERTS,
  ITINERARIES,
  DESTINATION_ICONS,
  BUDGET_ICONS,
} = require('./data');

// serve frontend files
app.use(express.static(__dirname));

// homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ✅ API route (THIS is for Postman)
app.get('/events', (req, res) => {
  res.json({
    DISASTER_ALERTS,
    ITINERARIES,
    DESTINATION_ICONS,
    BUDGET_ICONS,
  });
});

// start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});