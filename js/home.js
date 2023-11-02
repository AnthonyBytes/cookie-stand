"use strict";

const seattle = {
  name: 'Seattle',
  //hoursOpen: ['Hours Open: 6am - 7pm'],
  phoneNumbers: ['Contact Info: 123-456-7890'],
  //location: ['2901 3rd Ave #300, Seattle, WA 98121']
  render: function() {
    const rootElement = document.getElementById('homePage');

    const storeSection = document.createElement('section');
    rootElement.appendChild(storeSection);

    const firstLocation = document.createElement('h2');
    firstLocation.textContent = this.name;
    storeSection.appendChild(firstLocation);

    const storeDataList = document.createElement('ul');
    storeSection.appendChild(storeDataList);

    for(let i=0; i<this.phoneNumbers.length; i++) {
    const phoneItem = document.createElement('li');
    phoneItem.textContent = this.phoneNumbers[i];
    storeDataList.appendChild(phoneItem);
    }
  }
}

const tokyo = {
  name: 'Tokyo',
  phoneNumbers: ['222-222-2222'],
  render: function() {
    const rootElement = document.getElementById('homePage');

    const storeSection = document.createElement('section');
    rootElement.appendChild(storeSection);

    const firstLocation = document.createElement('h2');
    firstLocation.textContent = this.name;
    storeSection.appendChild(firstLocation);

    const storeDataList = document.createElement('ul');
    storeSection.appendChild(storeDataList);

    for(let i=0; i<this.phoneNumbers.length; i++) {
    const phoneItem = document.createElement('li');
    phoneItem.textContent = this.phoneNumbers[i];
    storeDataList.appendChild(phoneItem);
    }
  }
}

const dubai = {
  name: 'Dubai',
  phoneNumbers: ['333-333-3333'],
  render: function() {
    const rootElement = document.getElementById('homePage');

    const storeSection = document.createElement('section');
    rootElement.appendChild(storeSection);

    const firstLocation = document.createElement('h2');
    firstLocation.textContent = this.name;
    storeSection.appendChild(firstLocation);

    const storeDataList = document.createElement('ul');
    storeSection.appendChild(storeDataList);

    for(let i=0; i<this.phoneNumbers.length; i++) {
    const phoneItem = document.createElement('li');
    phoneItem.textContent = this.phoneNumbers[i];
    storeDataList.appendChild(phoneItem);
    }
  }
}

const paris = {
  name: 'Paris',
  phoneNumbers: ['444-444-4444'],
  render: function() {
    const rootElement = document.getElementById('homePage');

    const storeSection = document.createElement('section');
    rootElement.appendChild(storeSection);

    const firstLocation = document.createElement('h2');
    firstLocation.textContent = this.name;
    storeSection.appendChild(firstLocation);

    const storeDataList = document.createElement('ul');
    storeSection.appendChild(storeDataList);

    for(let i=0; i<this.phoneNumbers.length; i++) {
    const phoneItem = document.createElement('li');
    phoneItem.textContent = this.phoneNumbers[i];
    storeDataList.appendChild(phoneItem);
    }
  }
}

const lima = {
  name: 'Lima',
  phoneNumbers: ['555-555-5555'],
  render: function() {
    const rootElement = document.getElementById('homePage');

    const storeSection = document.createElement('section');
    rootElement.appendChild(storeSection);

    const firstLocation = document.createElement('h2');
    firstLocation.textContent = this.name;
    storeSection.appendChild(firstLocation);

    const storeDataList = document.createElement('ul');
    storeSection.appendChild(storeDataList);

    for(let i=0; i<this.phoneNumbers.length; i++) {
    const phoneItem = document.createElement('li');
    phoneItem.textContent = this.phoneNumbers[i];
    storeDataList.appendChild(phoneItem);
    }
  }
}

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();



