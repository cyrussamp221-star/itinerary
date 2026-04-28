const express = require('express');
const path = require('path');
const app = express();

// middleware
app.use(express.json()); // ✅ allow JSON body
app.use(express.static(__dirname));

// import data
const {
  DISASTER_ALERTS,
  ITINERARIES,
  DESTINATION_ICONS,
  BUDGET_ICONS,
} = require('./data');

// =====================
// 📌 ROUTES
// =====================

// homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ✅ GET all data
app.get('/events', (req, res) => {
  res.json({
    DISASTER_ALERTS,
    ITINERARIES,
    DESTINATION_ICONS,
    BUDGET_ICONS,
  });
});

// ✅ GET specific itinerary
// example: /itinerary?dest=Beach&days=2&budget=Low
app.get('/itinerary', (req, res) => {
  const { dest, days, budget } = req.query;

  try {
    const result = ITINERARIES[dest][budget][days];
    res.json({ success: true, data: result });
  } catch {
    res.status(400).json({ success: false, message: 'Invalid query' });
  }
});

// =====================
// 🆕 POST (add itinerary)
// =====================
app.post('/itinerary', (req, res) => {
  const { dest, budget, days, plan } = req.body;

  if (!dest || !budget || !days || !plan) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  if (!ITINERARIES[dest]) ITINERARIES[dest] = {};
  if (!ITINERARIES[dest][budget]) ITINERARIES[dest][budget] = {};

  ITINERARIES[dest][budget][days] = plan;

  res.json({ message: 'Itinerary added', data: plan });
});

// =====================
// ✏️ PUT (update itinerary)
// =====================
app.put('/itinerary', (req, res) => {
  const { dest, budget, days, plan } = req.body;

  try {
    ITINERARIES[dest][budget][days] = plan;
    res.json({ message: 'Updated successfully' });
  } catch {
    res.status(400).json({ message: 'Update failed' });
  }
});

// =====================
// ❌ DELETE itinerary
// =====================
app.delete('/itinerary', (req, res) => {
  const { dest, budget, days } = req.body;

  try {
    delete ITINERARIES[dest][budget][days];
    res.json({ message: 'Deleted successfully' });
  } catch {
    res.status(400).json({ message: 'Delete failed' });
  }
});

// =====================
// 🚨 GET disaster alert
// =====================
app.get('/disaster/:place', (req, res) => {
  const place = req.params.place;
  const alert = DISASTER_ALERTS[place];

  if (!alert) {
    return res.status(404).json({ message: 'Not found' });
  }

  res.json(alert);
});

// =====================
// START SERVER
// =====================
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});