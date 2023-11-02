"use strict";

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
  const rootElement = document.getElementById('salesPage2');

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

  rootElement.appendChild(table);
  table.appendChild(header);
  table.appendChild(body);
  table.appendChild(footer);
}

for (let i = 0; i < locations.length; i++) {
  locations[i].estimate();
}

renderTable(locations);


// let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// const seattle = {
//   name: 'Seattle',
//   minCustomersPerHour: 23,
//   maxCustomersPerHour: 65,
//   avgCookies: 6.3,
//   estimatedSales: [],
//   render: function() {
//     renderStore(this);
// },
//   estimate: function() {
//     this.estimatedSales = estimate(this);
// }
// }

// const tokyo = {
//   name: 'Tokyo',
//   minCustomersPerHour: 3,
//   maxCustomersPerHour: 24,
//   avgCookies: 1.2,
//   estimatedSales: [],
//   render: function() {
//     renderStore(this);
//   },
//   estimate: function() {
//     this.estimatedSales = estimate(this);
// }
// }

// const dubai = {
//   name: 'Dubai',
//   minCustomersPerHour: 11,
//   maxCustomersPerHour: 38,
//   avgCookies: 3.7,
//   estimatedSales: [],
//   render: function() {
//     renderStore(this);
//   },
//   estimate: function() {
//     this.estimatedSales = estimate(this);
// }
// }

// const paris = {
//   name: 'Paris',
//   minCustomersPerHour: 20,
//   maxCustomersPerHour: 38,
//   avgCookies: 2.3,
//   estimatedSales: [],
//   render: function() {
//     renderStore(this);
//   },
//   estimate: function() {
//     this.estimatedSales = estimate(this);
// }
// }

// const lima = {
//   name: 'Lima',
//   minCustomersPerHour: 2,
//   maxCustomersPerHour: 16,
//   avgCookies: 4.6,
//   estimatedSales: [],
//   render: function() {
//     renderStore(this);
//   },
//   estimate: function() {
//     this.estimatedSales = estimate(this);
// }
// }

// function random(min,max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function estimate(store) {
//   let estimatedSales = [];
//   for( let i=0; i < hours.length; i++ ) {
//     const numCustomers = random(store.minCustomersPerHour, store.maxCustomersPerHour);
//     const hourlySales = Math.ceil(numCustomers * store.avgCookies);
//     estimatedSales.push(hourlySales);
//   }
//   return estimatedSales;
// }

// function renderStore( store ) {
//   const rootElement = document.getElementById('salesPage');

//   const storeSection = document.createElement('section');
//   rootElement.appendChild(storeSection);

//   const firstLocation = document.createElement('h2');
//   firstLocation.textContent = store.name;
//   storeSection.appendChild(firstLocation);

//   const storeDataList = document.createElement('ul');
//   storeSection.appendChild(storeDataList);

//   let total = 0;
//   for( let i=0; i < hours.length; i++ ) {
//     total += store.estimatedSales[i];
//     const est = document.createElement('li');
//     est.textContent = `${hours[i]}: ${store.estimatedSales[i]}`
//     storeDataList.appendChild(est);
//   }

//   const totalElement = document.createElement('li');
//   totalElement.textContent = `Total: ${total}`;
//   storeDataList.appendChild(totalElement);
// }


// let stores = [ seattle, tokyo, dubai, paris, lima ];

// for( let i=0; i < stores.length; i++ ) {
// stores[i].estimate();
// stores[i].render();
// }







// let city = ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"];

// let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// function sales ( city, hours ) {
//   this.city = city;
//   this.hours = hours;
// }

// sales.prototype.render = function() {
//   let rootElement = document.getElementById('salesPage2');

//   let salesTable = document.createElement('section');
//   salesTable.classList.add('sales');
//   rootElement.appendChild(salesTable);

//   let table = document.createElement('table');

//   let header = document.createElement('thead');
//   let headerRow = document.createElement('tr')
//   header.appendChild(headerRow);

//   let locations = document.createElement('th');
//   locations.textContent = 'Locations';
//   headerRow.appendChild(locations);

//   for( let i = 0; i < hours.length; i++ ) {
//     let cell = document.createElement('th');
//     cell.textContent = hours[i];
//     headerRow.appendChild(cell);
//   }

//   let locationTotals = document.createElement('th');
//   locationTotals.textContent = 'Location Totals';
//   headerRow.appendChild(locationTotals);

//   let body = document.createElement('tbody');
//   let seattleRow = document.createElement('tr');
//   let nameCell = document.createElement('td');
//   nameCell.textContent = this.city[0];
//   seattleRow.appendChild(nameCell);
//   body.appendChild(seattleRow);

//   let footer = document.createElement('tfoot');

//   salesTable.appendChild(table);
//   table.appendChild(header);
//   table.appendChild(body);
//   table.appendChild(footer);
// }


// let la = new sales(city, hours);
// la.render();
