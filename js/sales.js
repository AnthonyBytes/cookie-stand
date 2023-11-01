"use strict";

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const seattle = {
  name: 'Seattle',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookies: 6.3,
  estimatedSales: [],
  render: function() {
    renderStore(this);
},
  estimate: function() {
    this.estimatedSales = estimate(this);
}
}

const tokyo = {
  name: 'Tokyo',
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  avgCookies: 1.2,
  estimatedSales: [],
  render: function() {
    renderStore(this);
  },
  estimate: function() {
    this.estimatedSales = estimate(this);
}
}

const dubai = {
  name: 'Dubai',
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookies: 3.7,
  estimatedSales: [],
  render: function() {
    renderStore(this);
  },
  estimate: function() {
    this.estimatedSales = estimate(this);
}
}

const paris = {
  name: 'Paris',
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  avgCookies: 2.3,
  estimatedSales: [],
  render: function() {
    renderStore(this);
  },
  estimate: function() {
    this.estimatedSales = estimate(this);
}
}

const lima = {
  name: 'Lima',
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  avgCookies: 4.6,
  estimatedSales: [],
  render: function() {
    renderStore(this);
  },
  estimate: function() {
    this.estimatedSales = estimate(this);
}
}

function random(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function estimate(store) {
  let estimatedSales = [];
  for( let i=0; i < hours.length; i++ ) {
    const numCustomers = random( store.minCustomersPerHour, store.maxCustomersPerHour);
    const hourlySales = Math.ceil(numCustomers * store.avgCookies);
    estimatedSales.push( hourlySales );
  }
  return estimatedSales;
}

function renderStore( store ) {
  const rootElement = document.getElementById('salesPage');

  const storeSection = document.createElement('section');
  rootElement.appendChild(storeSection);

  const firstLocation = document.createElement('h2');
  firstLocation.textContent = store.name;
  storeSection.appendChild(firstLocation);

  const storeDataList = document.createElement('ul');
  storeSection.appendChild(storeDataList);

  let total = 0;
  for( let i=0; i < hours.length; i++ ) {
    total += store.estimatedSales[i];
    const est = document.createElement('li');
    est.textContent = `${hours[i]}: ${store.estimatedSales[i]}`
    storeDataList.appendChild(est);
  }

  const totalElement = document.createElement('li');
  totalElement.textContent = `Total: ${total}`;
  storeDataList.appendChild(totalElement);
}


let stores = [ seattle, tokyo, dubai, paris, lima ];

for( let i=0; i < stores.length; i++ ) {
stores[i].estimate();
stores[i].render();
}
