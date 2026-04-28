var DISASTER_ALERTS = {
  Beach: {
    active: true,
    message:
      'Typhoon Signal #3 raised in coastal areas. Beach travel is currently unsafe.',
  },
  City: { active: false, message: '' },
  Nature: {
    active: true,
    message: 'Landslide warning in mountain regions due to heavy rainfall.',
  },
};

var ITINERARIES = {
  Beach: {
    Low: {
      1: [
        'Morning: Swim at public beach (free)',
        'Lunch: Local carenderia meal P80',
        'Afternoon: Beachcombing and sunset watch',
        'Evening: Bonfire at the shore',
      ],
      2: [
        'Day 1: Public beach, snorkeling rental P150, local eatery dinner',
        'Day 2: Island hopping budget boat P300, night market stroll',
      ],
      3: [
        'Day 1: Arrive, public beach swim, street food dinner',
        'Day 2: Kayak rental P200, reef walk, local grill',
        'Day 3: Sunrise walk, souvenir shopping, depart',
      ],
    },
    Medium: {
      1: [
        'Morning: Resort beach access P500',
        'Lunch: Beachfront restaurant',
        'Afternoon: Banana boat and snorkel tour P800',
        'Sunset: Cocktail at beach bar',
      ],
      2: [
        'Day 1: Resort check-in, water activities, seafood dinner',
        'Day 2: Guided island tour, paddleboard, spa hour',
      ],
      3: [
        'Day 1: Resort arrival, pool and beach',
        'Day 2: Island hopping tour, fresh catch dinner',
        'Day 3: Morning yoga, brunch, depart',
      ],
    },
    High: {
      1: [
        'Private villa check-in',
        'Yacht day trip P5000',
        'Fine dining beachfront dinner',
        'Evening: Fire dance show',
      ],
      2: [
        'Day 1: Luxury resort, butler service, sunset cruise',
        'Day 2: Private dive tour, spa treatment, tasting menu dinner',
      ],
      3: [
        'Day 1 to 3: Private beachfront villa, personal chef, daily excursions, underwater photography session',
      ],
    },
  },
  City: {
    Low: {
      1: [
        'Morning: Free museum walking tour',
        'Lunch: Streetfood district P100',
        'Afternoon: Public parks and historic sites',
        'Evening: Night market P150',
      ],
      2: [
        'Day 1: Heritage walk, jeepney rides, carinderia meals',
        'Day 2: Free art murals, local bookshops, cheap eats tour',
      ],
      3: [
        'Day 1: Intramuros walk free',
        'Day 2: Public market food trip, local cinema',
        'Day 3: Church visits, sidewalk cafe, depart',
      ],
    },
    Medium: {
      1: [
        'Morning: Guided city tour P600',
        'Lunch: Popular local restaurant',
        'Afternoon: Mall and cultural center visit',
        'Evening: Bar hopping district',
      ],
      2: [
        'Day 1: Historical tour and food crawl',
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
        'Private city tour chauffeured',
        'Michelin-recommended lunch',
        'Spa afternoon',
        'Rooftop fine dining',
      ],
      2: [
        'Day 1: Luxury hotel, VIP museum tour, chefs table dinner',
        'Day 2: Helicopter city view, personal shopper, cocktail lounge',
      ],
      3: [
        'Day 1 to 3: 5-star hotel, private guides, exclusive dining, nightlife concierge',
      ],
    },
  },
  Nature: {
    Low: {
      1: [
        'Dawn hike to nearest peak free',
        'Packed breakfast and lunch',
        'Afternoon: Waterfall swim',
        'Evening: Campfire cooking',
      ],
      2: [
        'Day 1: Trail hike, swimming hole, wild camp',
        'Day 2: Nature foraging walk, river trek, depart',
      ],
      3: [
        'Day 1: Arrival and trail orientation',
        'Day 2: Full-day hike, wildlife spotting',
        'Day 3: River crossing, depart',
      ],
    },
    Medium: {
      1: [
        'Guided eco-hike P500',
        'Packed lunch at summit',
        'Afternoon: Zip line P600',
        'Return: Hot spring soak',
      ],
      2: [
        'Day 1: Guided waterfall trek, glamping',
        'Day 2: Canopy walk, bird watching, river kayaking',
      ],
      3: [
        'Day 1: Eco-resort check-in, forest trail',
        'Day 2: Cave tour and canyoneering',
        'Day 3: Sunrise hike, depart',
      ],
    },
    High: {
      1: [
        'Private nature guide',
        'Helicopter mountain view P8000',
        'Luxury glamping setup',
        'Gourmet outdoor dinner',
      ],
      2: [
        'Day 1: Private eco-lodge, VIP trail access, wildlife tracker',
        'Day 2: Hot air balloon, spa retreat, forest dinner',
      ],
      3: [
        'Day 1 to 3: Luxury wilderness lodge, private naturalist, customized adventure itinerary',
      ],
    },
  },
};

var DESTINATION_ICONS = { Beach: '🏖️', City: '🏙️', Nature: '🌿' };
var BUDGET_ICONS = { Low: '💰', Medium: '💳', High: '💎' };

if (typeof module !== 'undefined') {
  module.exports = {
    DISASTER_ALERTS,
    ITINERARIES,
    DESTINATION_ICONS,
    BUDGET_ICONS,
  };
}