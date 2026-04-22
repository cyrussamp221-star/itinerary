const DISASTER_ALERTS = {
  Beach: {
    active: true,
    message:
      '⚠️ Typhoon Signal #3 raised in coastal areas. Beach travel is currently unsafe.',
  },
  City: { active: false, message: '' },
  Nature: {
    active: true,
    message: '⚠️ Landslide warning in mountain regions due to heavy rainfall.',
  },
};

const ITINERARIES = {
  Beach: {
    Low: {
      1: [
        'Morning: Swim at public beach (free)',
        'Lunch: Local carenderia meal ₱80',
        'Afternoon: Beachcombing & sunset watch',
        'Evening: Bonfire at the shore',
      ],
      2: [
        'Day 1: Public beach, snorkeling rental ₱150, local eatery dinner',
        'Day 2: Island hopping (budget boat ₱300), night market stroll',
      ],
      3: [
        'Day 1: Arrive, public beach swim, street food dinner',
        'Day 2: Kayak rental ₱200, reef walk, local grill',
        'Day 3: Sunrise walk, souvenir shopping, depart',
      ],
    },
    Medium: {
      1: [
        'Morning: Resort beach access ₱500',
        'Lunch: Beachfront restaurant',
        'Afternoon: Banana boat + snorkel tour ₱800',
        'Sunset: Cocktail at beach bar',
      ],
      2: [
        'Day 1: Resort check-in, water activities, seafood dinner',
        'Day 2: Guided island tour, paddleboard, spa hour',
      ],
      3: [
        'Day 1: Resort arrival, pool & beach',
        'Day 2: Island hopping tour, fresh catch dinner',
        'Day 3: Morning yoga, brunch, depart',
      ],
    },
    High: {
      1: [
        'Private villa check-in',
        'Yacht day trip ₱5,000',
        'Fine dining beachfront dinner',
        'Evening: Fire dance show',
      ],
      2: [
        'Day 1: Luxury resort, butler service, sunset cruise',
        'Day 2: Private dive tour, spa treatment, tasting menu dinner',
      ],
      3: [
        'Day 1–3: Private beachfront villa, personal chef, daily excursions, underwater photography session',
      ],
    },
  },
  City: {
    Low: {
      1: [
        'Morning: Free museum walking tour',
        'Lunch: Streetfood district ₱100',
        'Afternoon: Public parks & historic sites',
        'Evening: Night market ₱150',
      ],
      2: [
        'Day 1: Heritage walk, jeepney rides, carinderia meals',
        'Day 2: Free art murals, local bookshops, cheap eats tour',
      ],
      3: [
        'Day 1: Intramuros walk (free)',
        'Day 2: Public market food trip, local cinema',
        'Day 3: Church visits, sidewalk café, depart',
      ],
    },
    Medium: {
      1: [
        'Morning: Guided city tour ₱600',
        'Lunch: Popular local restaurant',
        'Afternoon: Mall & cultural center visit',
        'Evening: Bar hopping district',
      ],
      2: [
        'Day 1: Historical tour + food crawl',
        'Day 2: Shopping mall, rooftop dinner, night city tour',
      ],
      3: [
        'Day 1: Arrival, cultural district tour',
        'Day 2: Culinary class, art gallery, jazz bar',
        'Day 3: Morning market, brunch, depart',
      ],
    },
    High: {
      1: [
        'Private city tour (chauffeured)',
        'Michelin-recommended lunch',
        'Spa afternoon',
        'Rooftop fine dining',
      ],
      2: [
        "Day 1: Luxury hotel, VIP museum tour, chef's table dinner",
        'Day 2: Helicopter city view, personal shopper, cocktail lounge',
      ],
      3: [
        'Day 1–3: 5-star hotel, private guides, exclusive dining, nightlife concierge',
      ],
    },
  },
  Nature: {
    Low: {
      1: [
        'Dawn hike to nearest peak (free)',
        'Packed breakfast & lunch',
        'Afternoon: Waterfall swim',
        'Evening: Campfire cooking',
      ],
      2: [
        'Day 1: Trail hike, swimming hole, wild camp',
        'Day 2: Nature foraging walk, river trek, depart',
      ],
      3: [
        'Day 1: Arrival & trail orientation',
        'Day 2: Full-day hike, wildlife spotting',
        'Day 3: River crossing, depart',
      ],
    },
    Medium: {
      1: [
        'Guided eco-hike ₱500',
        'Packed lunch at summit',
        'Afternoon: Zip line ₱600',
        'Return: Hot spring soak',
      ],
      2: [
        'Day 1: Guided waterfall trek, glamping',
        'Day 2: Canopy walk, bird watching, river kayaking',
      ],
      3: [
        'Day 1: Eco-resort check-in, forest trail',
        'Day 2: Cave tour + canyoneering',
        'Day 3: Sunrise hike, depart',
      ],
    },
    High: {
      1: [
        'Private nature guide',
        'Helicopter mountain view ₱8,000',
        'Luxury glamping setup',
        'Gourmet outdoor dinner',
      ],
      2: [
        'Day 1: Private eco-lodge, VIP trail access, wildlife tracker',
        'Day 2: Hot air balloon, spa retreat, forest dinner',
      ],
      3: [
        'Day 1–3: Luxury wilderness lodge, private naturalist, customized adventure itinerary',
      ],
    },
  },
};

const DESTINATION_ICONS = { Beach: '🏖️', City: '🏙️', Nature: '🌿' };
const BUDGET_ICONS = { Low: '💰', Medium: '💳', High: '💎' };

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
