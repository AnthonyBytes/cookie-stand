"use strict";

let tableBody = document.getElementById('tableBody');
let button = document.getElementById('addLocation');

function newLocation(locationName, minCusPerHr, maxCusPerHr, avgCookiesPerSale) {
  this.locationName = locationName;
  this.minCusPerHr = minCusPerHr;
  this.maxCusPerHr = maxCusPerHr;
  this.avgCookiesPerSale = avgCookiesPerSale;
}

newLocation.prototype.render = function() {

  let locationCell = document.createElement('td');
  locationCell.textContent = this.locationName;

  let minCell = document.createElement('td');
  minCell.textContent = this.minCusPerHr;

  let maxCell = document.createElement('td');
  maxCell.textContent = this.maxCusPerHr;

  let avgCell = document.createElement('td');
  avgCell.textContent = this.avgCookiesPerSale;

  let row = document.createElement('tr');
  row.appendChild(locationCell);
  row.appendChild(minCell);
  row.appendChild(maxCell);
  row.appendChild(avgCell);

  tableBody.appendChild(row);
};

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const locations = [
  {
    name: 'Seattle',
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    avgCookies: 6.3,
    estimatedSales: [],
    estimate: function() {
      this.estimatedSales = estimate(this);
    }
  },
  {
    name: 'Tokyo',
    minCustomersPerHour: 3,
    maxCustomersPerHour: 24,
    avgCookies: 1.2,
    estimatedSales: [],
    estimate: function() {
      this.estimatedSales = estimate(this);
    }
  },
  {
    name: 'Dubai',
    minCustomersPerHour: 11,
    maxCustomersPerHour: 38,
    avgCookies: 3.7,
    estimatedSales: [],
    estimate: function() {
      this.estimatedSales = estimate(this);
    }
  },
  {
    name: 'Paris',
    minCustomersPerHour: 20,
    maxCustomersPerHour: 38,
    avgCookies: 2.3,
    estimatedSales: [],
    estimate: function() {
      this.estimatedSales = estimate(this);
    }
  },
  {
    name: 'Lima',
    minCustomersPerHour: 2,
    maxCustomersPerHour: 16,
    avgCookies: 4.6,
    estimatedSales: [],
    estimate: function() {
      this.estimatedSales = estimate(this);
    }
  }
];

button.addEventListener('click', function() {
  let name = document.getElementById('locationName').value;
  let min = document.getElementById('minCusPerHr').value;
  let max = document.getElementById('maxCusPerHr').value;
  let avg = document.getElementById('avgCookiesPerSale').value;
  let newLocation = {
    name: name,
    minCustomersPerHour: parseInt(min),
    maxCustomersPerHour: parseInt(max),
    avgCookies: parseInt(avg),
    estimatedSales: [],
    estimate: function() {
      this.estimatedSales = estimate(this);
    }
  };

  let newEstimatedSales = estimate(newLocation);
  newLocation.estimatedSales = newEstimatedSales;
  console.log(newLocation);
  locations.push(newLocation);

  let salesPage = document.getElementById('salesPage');
  if (salesPage.hasChildNodes()) {
    while (salesPage.firstChild) {
      salesPage.removeChild(salesPage.firstChild);
    }
  }
  renderTable(locations);
});

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function estimate(store) {
  let estimatedSales = [];
  for (let i = 0; i < hours.length; i++) {
    const numCustomers = random(store.minCustomersPerHour, store.maxCustomersPerHour);
    const hourlySales = Math.ceil(numCustomers * store.avgCookies);
    estimatedSales.push(hourlySales);
  }

  return estimatedSales;
}

function renderTable(locations) {
  const rootElement = document.getElementById('salesPage');

  const table = document.createElement('table');

  const header = document.createElement('thead');
  const headerRow = document.createElement('tr');
  header.appendChild(headerRow);

  const locationsHeader = document.createElement('th');
  locationsHeader.textContent = 'Locations';
  headerRow.appendChild(locationsHeader);

  for (let i = 0; i < hours.length; i++) {
    const cell = document.createElement('th');
    cell.textContent = hours[i];
    headerRow.appendChild(cell);
  }

  const locationTotals = document.createElement('th');
  locationTotals.textContent = 'Location Totals';
  headerRow.appendChild(locationTotals);

  const body = document.createElement('tbody');

  for (let i = 0; i < locations.length; i++) {
    const location = locations[i];
    const row = document.createElement('tr');

    const locationCell = document.createElement('td');
    locationCell.textContent = location.name;
    row.appendChild(locationCell);

    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      const estCell = document.createElement('td');
      estCell.textContent = location.estimatedSales[i];
      total += location.estimatedSales[i];
      row.appendChild(estCell);
    }

    const totalCell = document.createElement('td');
    totalCell.textContent = total;
    row.appendChild(totalCell);

    body.appendChild(row);
  }

  const footer = document.createElement('tfoot');
  const footerRow = document.createElement('tr');
  footer.appendChild(footerRow);

  const hrTotals = document.createElement('tr');
  hrTotals.textContent = 'Hourly Totals for All Locations';
  footerRow.appendChild(hrTotals);
  let totals = 0;

  const hourlyTotals = new Array(hours.length).fill(0);
  for (let i = 0; i < locations.length; i++) {
    for (let j = 0; j < hours.length; j++) {
      hourlyTotals[j] += locations[i].estimatedSales[j];
    }
  }

  for (let i = 0; i < hours.length; i++) {
    const totalCell = document.createElement('td');
    totalCell.textContent = hourlyTotals[i];
    totals += hourlyTotals[i];
    footerRow.appendChild(totalCell);
  }

  const locationTotalTotal = document.createElement('td');
  locationTotalTotal.textContent = totals;
  footerRow.appendChild(locationTotalTotal);

  rootElement.appendChild(table);
  table.appendChild(header);
  table.appendChild(body);
  table.appendChild(footer);
}

for (let i = 0; i < locations.length; i++) {
  locations[i].estimate();
}

renderTable(locations);
