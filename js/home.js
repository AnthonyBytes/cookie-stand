"use strict";

const seattle = {
  name: 'Seattle',
  hoursOpen: 'Hours Open: 6am - 7pm',
  phoneNumber: 'Contact Info: 123-456-7890',
  location: 'Location: 2901 3rd Ave #300, Seattle, WA 98121',
  render: function() {
    const rootElement = document.getElementById('homePage');

    const storeSection = document.createElement('section');
    rootElement.appendChild(storeSection);

    const firstLocation = document.createElement('h2');
    firstLocation.textContent = this.name;
    storeSection.appendChild(firstLocation);

    const storeInfo = document.createElement('ul');
    storeSection.appendChild(storeInfo);

    const hours = document.createElement('li');
    hours.textContent = this.hoursOpen;
    storeSection.appendChild(hours);

    const phone = document.createElement('li');
    phone.textContent = this.phoneNumber;
    storeSection.appendChild(phone);

    const location = document.createElement('li');
    location.textContent = this.location;
    storeSection.appendChild(location);
  }
}

const tokyo = {
  name: 'Tokyo',
  hoursOpen: 'Hours Open: 6am - 7pm',
  phoneNumber: 'Contact Info: 222-222-2222',
  location: 'Location: 1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-8634',
  render: function() {
    const rootElement = document.getElementById('homePage');

    const storeSection = document.createElement('section');
    rootElement.appendChild(storeSection);

    const firstLocation = document.createElement('h2');
    firstLocation.textContent = this.name;
    storeSection.appendChild(firstLocation);

    const storeInfo = document.createElement('ul');
    storeSection.appendChild(storeInfo);

    const hours = document.createElement('li');
    hours.textContent = this.hoursOpen;
    storeSection.appendChild(hours);

    const phone = document.createElement('li');
    phone.textContent = this.phoneNumber;
    storeSection.appendChild(phone);

    const location = document.createElement('li');
    location.textContent = this.location;
    storeSection.appendChild(location);
  }
}

const dubai = {
  name: 'Dubai',
  hoursOpen: 'Hours Open: 6am - 7pm',
  phoneNumber: 'Contact Info: 333-333-3333',
  location: 'Location: 1 Sheikh Mohammed bin Rashid Blvd - Dubai',
  render: function() {
    const rootElement = document.getElementById('homePage');

    const storeSection = document.createElement('section');
    rootElement.appendChild(storeSection);

    const firstLocation = document.createElement('h2');
    firstLocation.textContent = this.name;
    storeSection.appendChild(firstLocation);

    const storeInfo = document.createElement('ul');
    storeSection.appendChild(storeInfo);

    const hours = document.createElement('li');
    hours.textContent = this.hoursOpen;
    storeSection.appendChild(hours);

    const phone = document.createElement('li');
    phone.textContent = this.phoneNumber;
    storeSection.appendChild(phone);

    const location = document.createElement('li');
    location.textContent = this.location;
    storeSection.appendChild(location);
  }
}

const paris = {
  name: 'Paris',
  hoursOpen: 'Hours Open: 6am - 7pm',
  phoneNumber: 'Contact Info: 444-444-4444',
  location: 'Location: Champ de Mars, 5 Avenue Anatole France, 75007 Paris',
  render: function() {
    const rootElement = document.getElementById('homePage');

    const storeSection = document.createElement('section');
    rootElement.appendChild(storeSection);

    const firstLocation = document.createElement('h2');
    firstLocation.textContent = this.name;
    storeSection.appendChild(firstLocation);

    const storeInfo = document.createElement('ul');
    storeSection.appendChild(storeInfo);

    const hours = document.createElement('li');
    hours.textContent = this.hoursOpen;
    storeSection.appendChild(hours);

    const phone = document.createElement('li');
    phone.textContent = this.phoneNumber;
    storeSection.appendChild(phone);

    const location = document.createElement('li');
    location.textContent = this.location;
    storeSection.appendChild(location);
  }
}

const lima = {
  name: 'Lima',
  hoursOpen: 'Hours Open: 6am - 7pm',
  phoneNumber: 'Contact Info: 555-555-5555',
  location: 'Location: Ca. Gral. Borgono cuadra 8, Miraflores 15074',
  render: function() {
    const rootElement = document.getElementById('homePage');

    const storeSection = document.createElement('section');
    rootElement.appendChild(storeSection);

    const firstLocation = document.createElement('h2');
    firstLocation.textContent = this.name;
    storeSection.appendChild(firstLocation);

    const storeInfo = document.createElement('ul');
    storeSection.appendChild(storeInfo);

    const hours = document.createElement('li');
    hours.textContent = this.hoursOpen;
    storeSection.appendChild(hours);

    const phone = document.createElement('li');
    phone.textContent = this.phoneNumber;
    storeSection.appendChild(phone);

    const location = document.createElement('li');
    location.textContent = this.location;
    storeSection.appendChild(location);
  }
}

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
