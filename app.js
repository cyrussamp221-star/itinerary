var state = { step: 1, destination: null, days: null, budget: null };

var body = document.body;
var card = document.getElementById('mainCard');
var progressBar = document.getElementById('progressBar');
var dot1 = document.getElementById('dot1');
var dot2 = document.getElementById('dot2');
var dot3 = document.getElementById('dot3');
var step1 = document.getElementById('step1');
var step2 = document.getElementById('step2');
var step3 = document.getElementById('step3');
var step4 = document.getElementById('step4');
var step5 = document.getElementById('step5');
var destinationGrid = document.getElementById('destinationGrid');
var nextStep1Btn = document.getElementById('nextStep1');
var daysGrid = document.getElementById('daysGrid');
var nextStep2Btn = document.getElementById('nextStep2');
var backStep2Btn = document.getElementById('backStep2');
var budgetGrid = document.getElementById('budgetGrid');
var generateBtn = document.getElementById('generateBtn');
var backStep3Btn = document.getElementById('backStep3');
var summaryBox = document.getElementById('summaryBox');
var resultIcon = document.getElementById('resultIcon');
var resultTitle = document.getElementById('resultTitle');
var resultMeta = document.getElementById('resultMeta');
var itineraryList = document.getElementById('itineraryList');
var disasterBanner = document.getElementById('disasterBanner');
var resetBtn = document.getElementById('resetBtn');
var resetCancelBtn = document.getElementById('resetCancelBtn');
var disasterModal = document.getElementById('disasterModal');
var modalMsg = document.getElementById('modalMsg');
var cancelBookingBtn = document.getElementById('cancelBookingBtn');
var proceedBtn = document.getElementById('proceedBtn');

function goToStep(n) {
  state.step = n;

  if (n === 1) {
    step1.classList.remove('hidden');
  } else {
    step1.classList.add('hidden');
  }
  if (n === 2) {
    step2.classList.remove('hidden');
  } else {
    step2.classList.add('hidden');
  }
  if (n === 3) {
    step3.classList.remove('hidden');
  } else {
    step3.classList.add('hidden');
  }
  if (n === 4) {
    step4.classList.remove('hidden');
  } else {
    step4.classList.add('hidden');
  }
  if (n === 5) {
    step5.classList.remove('hidden');
  } else {
    step5.classList.add('hidden');
  }

  if (n <= 3) {
    progressBar.style.display = 'flex';
  } else {
    progressBar.style.display = 'none';
  }

  dot1.className = 'progress-dot';
  dot2.className = 'progress-dot';
  dot3.className = 'progress-dot';

  if (n === 1) {
    dot1.classList.add('current');
    dot2.className = 'progress-dot';
    dot3.className = 'progress-dot';
  }
  if (n === 2) {
    dot1.classList.add('active');
    dot2.classList.add('current');
    dot3.className = 'progress-dot';
  }
  if (n === 3) {
    dot1.classList.add('active');
    dot2.classList.add('active');
    dot3.classList.add('current');
  }

  card.classList.remove('visible');
  setTimeout(function () {
    card.classList.add('visible');
  }, 50);
}

function applyTheme(dest) {
  if (dest) {
    body.className = 'theme-' + dest;
  } else {
    body.className = '';
  }
}

function updateSummary() {
  summaryBox.classList.remove('hidden');
  summaryBox.innerHTML =
    DESTINATION_ICONS[state.destination] +
    ' <strong>' +
    state.destination +
    '</strong>' +
    ' · ' +
    state.days +
    ' Day' +
    (state.days > 1 ? 's' : '') +
    ' · ' +
    BUDGET_ICONS[state.budget] +
    ' ' +
    state.budget +
    ' Budget';
}

function renderItinerary() {
  var dest = state.destination;
  var days = state.days;
  var budget = state.budget;
  var items = ITINERARIES[dest][budget][days];
  var disaster = DISASTER_ALERTS[dest];

  resultIcon.textContent = DESTINATION_ICONS[dest];
  resultTitle.textContent = 'Your ' + dest + ' Itinerary';
  resultMeta.textContent =
    days + ' Day' + (days > 1 ? 's' : '') + ' · ' + budget + ' Budget';

  itineraryList.innerHTML = '';
  for (var i = 0; i < items.length; i++) {
    var div = document.createElement('div');
    div.className = 'itinerary-item';
    div.innerHTML =
      "<span class='itinerary-num'>" +
      (i + 1) +
      '.</span><span>' +
      items[i] +
      '</span>';
    itineraryList.appendChild(div);
    (function (el) {
      setTimeout(function () {
        el.classList.add('visible');
      }, 50);
    })(div);
  }

  if (disaster.active) {
    disasterBanner.classList.remove('hidden');
    disasterBanner.innerHTML =
      disaster.message +
      "<div><button onclick='handleCancel()'>Cancel Booking Due to Disaster</button></div>";
  } else {
    disasterBanner.classList.add('hidden');
  }

  goToStep(4);
}

function handleCancel() {
  disasterModal.classList.add('hidden');
  goToStep(5);
}

function resetAll() {
  state.destination = null;
  state.days = null;
  state.budget = null;

  var allCards = document.querySelectorAll('.choice-card');
  for (var i = 0; i < allCards.length; i++) {
    allCards[i].classList.remove('selected');
  }

  nextStep1Btn.disabled = true;
  nextStep2Btn.disabled = true;
  generateBtn.disabled = true;
  summaryBox.classList.add('hidden');
  summaryBox.innerHTML = '';
  applyTheme(null);
  goToStep(1);
}

/* ── STEP 1 EVENTS ── */
var destCards = destinationGrid.querySelectorAll('.choice-card');
for (var i = 0; i < destCards.length; i++) {
  destCards[i].addEventListener('click', function () {
    for (var j = 0; j < destCards.length; j++) {
      destCards[j].classList.remove('selected');
    }
    this.classList.add('selected');
    state.destination = this.getAttribute('data-value');
    applyTheme(state.destination);
    nextStep1Btn.disabled = false;
  });
}
nextStep1Btn.addEventListener('click', function () {
  goToStep(2);
});

/* ── STEP 2 EVENTS ── */
var dayCards = daysGrid.querySelectorAll('.choice-card');
for (var i = 0; i < dayCards.length; i++) {
  dayCards[i].addEventListener('click', function () {
    for (var j = 0; j < dayCards.length; j++) {
      dayCards[j].classList.remove('selected');
    }
    this.classList.add('selected');
    state.days = parseInt(this.getAttribute('data-value'));
    nextStep2Btn.disabled = false;
  });
}
nextStep2Btn.addEventListener('click', function () {
  goToStep(3);
});
backStep2Btn.addEventListener('click', function () {
  goToStep(1);
});

/* ── STEP 3 EVENTS ── */
var budgetCards = budgetGrid.querySelectorAll('.choice-card');
for (var i = 0; i < budgetCards.length; i++) {
  budgetCards[i].addEventListener('click', function () {
    for (var j = 0; j < budgetCards.length; j++) {
      budgetCards[j].classList.remove('selected');
    }
    this.classList.add('selected');
    state.budget = this.getAttribute('data-value');
    generateBtn.disabled = false;
    updateSummary();
  });
}
backStep3Btn.addEventListener('click', function () {
  goToStep(2);
});
generateBtn.addEventListener('click', function () {
  var disaster = DISASTER_ALERTS[state.destination];
  if (disaster.active) {
    modalMsg.textContent = disaster.message;
    disasterModal.classList.remove('hidden');
  } else {
    renderItinerary();
  }
});

/* ── MODAL EVENTS ── */
cancelBookingBtn.addEventListener('click', function () {
  handleCancel();
});
proceedBtn.addEventListener('click', function () {
  disasterModal.classList.add('hidden');
  renderItinerary();
});

/* ── RESET EVENTS ── */
resetBtn.addEventListener('click', function () {
  resetAll();
});
resetCancelBtn.addEventListener('click', function () {
  resetAll();
});

/* ── START ── */
goToStep(1);
