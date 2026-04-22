const express = require('express');
const app = express();
const port = 3000;

// Enable JSON request body parsing
app.use(express.json());

// Mock data (similar to your frontend state)
const ITINERARIES = {
  Beach: {
    Low: {
      1: ['Beach walk', 'Sunset watching'],
      2: ['Island hopping', 'Snorkeling'],
      3: ['Luxury resort', 'Private yacht', 'Spa day']
    },
    Medium: {
      1: ['Beach walk', 'Street food'],
      2: ['Resort stay', 'Snorkeling'],
      3: ['Private yacht', 'Fine dining']
    },
  },
  // Add other destinations as needed...
};

const DISASTER_ALERTS = {
  Beach: { active: true, message: "There's a storm warning, your booking might need to be canceled!" },
  // Add other destinations...
};

// API to get the itinerary based on user selection (GET)
app.get('/itinerary', (req, res) => {
  const { destination, days, budget } = req.query;

  if (!destination || !days || !budget) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  const items = ITINERARIES[destination] && ITINERARIES[destination][budget]
    ? ITINERARIES[destination][budget][days]
    : null;

  if (!items) {
    return res.status(404).json({ error: 'Itinerary not found' });
  }

  const disaster = DISASTER_ALERTS[destination] || {};

  return res.json({
    destination,
    days,
    budget,
    itinerary: items,
    disaster
  });
});

// API to handle POST request for itinerary (e.g., user submits the form)
app.post('/itinerary', (req, res) => {
  const { destination, days, budget } = req.body;

  if (!destination || !days || !budget) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  const items = ITINERARIES[destination] && ITINERARIES[destination][budget]
    ? ITINERARIES[destination][budget][days]
    : null;

  if (!items) {
    return res.status(404).json({ error: 'Itinerary not found' });
  }

  const disaster = DISASTER_ALERTS[destination] || {};

  return res.json({
    destination,
    days,
    budget,
    itinerary: items,
    disaster
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});