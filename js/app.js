"use strict";

let seattle = {
  name: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  cookiesSold: seattleCookies()
}

let tokyo = {
  name: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  cookiesSold: tokyoCookies()
}

let dubai = {
  name: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  cookiesSold: dubaiCookies()
}

let paris = {
  name: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  cookiesSold: parisCookies()
}

let lima = {
  name: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  cookiesSold: limaCookies()
}


function seattleCookies (){
  let min = 23
  let max = 65
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function tokyoCookies (){
  let min = 3
  let max = 24
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function dubaiCookies (){
  let min = 11
  let max = 38
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function parisCookies (){
  let min = 20
  let max = 38
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function limaCookies (){
  let min = 2
  let max = 16
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let locationSection = document.getElementById('location');

let seattleSection = document.createElement('h2');
seattleSection.textContent = seattle.name;
locationSection.appendChild(seattleSection);

let seattleStats = document.createElement('ul');
seattleSection.appendChild(seattleStats);

let seattle6Am = document.createElement('li');
seattle6Am.textContent = `6am: ${seattle.cookiesSold} cookies`;
seattleSection.appendChild(seattle6Am);

let seattle7Am = document.createElement('li');
seattle7Am.textContent = `7am: ${seattle.cookiesSold} cookies`;
seattleSection.appendChild(seattle7Am);

let seattle8Am = document.createElement('li');
seattle8Am.textContent = `8am: ${seattle.cookiesSold} cookies`;
seattleSection.appendChild(seattle8Am);

let seattle9Am = document.createElement('li');
seattle9Am.textContent = `9am: ${seattle.cookiesSold} cookies`;
seattleSection.appendChild(seattle9Am);

let seattle10Am = document.createElement('li');
seattle10Am.textContent = `10am: ${seattle.cookiesSold} cookies`;
seattleSection.appendChild(seattle10Am);

let seattle11Am = document.createElement('li');
seattle11Am.textContent = `11am: ${seattle.cookiesSold} cookies`;
seattleSection.appendChild(seattle11Am);

let seattle12Pm = document.createElement('li');
seattle12Pm.textContent = `12pm: ${seattle.cookiesSold} cookies`;
seattleSection.appendChild(seattle12Pm);

let seattle1Pm = document.createElement('li');
seattle1Pm.textContent = `1pm: ${seattle.cookiesSold} cookies`;
seattleSection.appendChild(seattle1Pm);

let seattle2Pm = document.createElement('li');
seattle2Pm.textContent = `2pm: ${seattle.cookiesSold} cookies`;
seattleSection.appendChild(seattle2Pm);

let seattle3Pm = document.createElement('li');
seattle3Pm.textContent = `3pm: ${seattle.cookiesSold} cookies`;
seattleSection.appendChild(seattle3Pm);

let seattle4Pm = document.createElement('li');
seattle4Pm.textContent = `4pm: ${seattle.cookiesSold} cookies`;
seattleSection.appendChild(seattle4Pm);

let seattle5Pm = document.createElement('li');
seattle5Pm.textContent = `5pm: ${seattle.cookiesSold} cookies`;
seattleSection.appendChild(seattle5Pm);

let seattle6Pm = document.createElement('li');
seattle6Pm.textContent = `6pm: ${seattle.cookiesSold} cookies`;
seattleSection.appendChild(seattle6Pm);

let seattle7Pm = document.createElement('li');
seattle7Pm.textContent = `7pm: ${seattle.cookiesSold} cookies`;
seattleSection.appendChild(seattle7Pm);



let tokyoSection = document.createElement('h2');
tokyoSection.textContent = tokyo.name;
locationSection.appendChild(tokyoSection);

let tokyoStats = document.createElement('ul');
tokyoSection.appendChild(tokyoStats);

let tokyo6Am = document.createElement('li');
tokyo6Am.textContent = `6am: ${tokyo.cookiesSold} cookies`;
tokyoSection.appendChild(tokyo6Am);

let tokyo7Am = document.createElement('li');
tokyo7Am.textContent = `7am: ${tokyo.cookiesSold} cookies`;
tokyoSection.appendChild(tokyo7Am);

let tokyo8Am = document.createElement('li');
tokyo8Am.textContent = `8am: ${tokyo.cookiesSold} cookies`;
tokyoSection.appendChild(tokyo8Am);

let tokyo9Am = document.createElement('li');
tokyo9Am.textContent = `9am: ${tokyo.cookiesSold} cookies`;
tokyoSection.appendChild(tokyo9Am);

let tokyo10Am = document.createElement('li');
tokyo10Am.textContent = `10am: ${tokyo.cookiesSold} cookies`;
tokyoSection.appendChild(tokyo10Am);

let tokyo11Am = document.createElement('li');
tokyo11Am.textContent = `11am: ${tokyo.cookiesSold} cookies`;
tokyoSection.appendChild(tokyo11Am);

let tokyo12Pm = document.createElement('li');
tokyo12Pm.textContent = `12pm: ${tokyo.cookiesSold} cookies`;
tokyoSection.appendChild(tokyo12Pm);

let tokyo1Pm = document.createElement('li');
tokyo1Pm.textContent = `1pm: ${tokyo.cookiesSold} cookies`;
tokyoSection.appendChild(tokyo1Pm);

let tokyo2Pm = document.createElement('li');
tokyo2Pm.textContent = `2pm: ${tokyo.cookiesSold} cookies`;
tokyoSection.appendChild(tokyo2Pm);

let tokyo3Pm = document.createElement('li');
tokyo3Pm.textContent = `3pm: ${tokyo.cookiesSold} cookies`;
tokyoSection.appendChild(tokyo3Pm);

let tokyo4Pm = document.createElement('li');
tokyo4Pm.textContent = `4pm: ${tokyo.cookiesSold} cookies`;
tokyoSection.appendChild(tokyo4Pm);

let tokyo5Pm = document.createElement('li');
tokyo5Pm.textContent = `5pm: ${tokyo.cookiesSold} cookies`;
tokyoSection.appendChild(tokyo5Pm);

let tokyo6Pm = document.createElement('li');
tokyo6Pm.textContent = `6pm: ${tokyo.cookiesSold} cookies`;
tokyoSection.appendChild(tokyo6Pm);

let tokyo7Pm = document.createElement('li');
tokyo7Pm.textContent = `7pm: ${tokyo.cookiesSold} cookies`;
tokyoSection.appendChild(tokyo7Pm);



let dubaiSection = document.createElement('h2');
dubaiSection.textContent = dubai.name;
locationSection.appendChild(dubaiSection);

let dubaiStats = document.createElement('ul');
dubaiSection.appendChild(dubaiStats);

let dubai6Am = document.createElement('li');
dubai6Am.textContent = `6am: ${dubai.cookiesSold} cookies`;
dubaiSection.appendChild(dubai6Am);

let dubai7Am = document.createElement('li');
dubai7Am.textContent = `7am: ${dubai.cookiesSold} cookies`;
dubaiSection.appendChild(dubai7Am);

let dubai8Am = document.createElement('li');
dubai8Am.textContent = `8am: ${dubai.cookiesSold} cookies`;
dubaiSection.appendChild(dubai8Am);

let dubai9Am = document.createElement('li');
dubai9Am.textContent = `9am: ${dubai.cookiesSold} cookies`;
dubaiSection.appendChild(dubai9Am);

let dubai10Am = document.createElement('li');
dubai10Am.textContent = `10am: ${dubai.cookiesSold} cookies`;
dubaiSection.appendChild(dubai10Am);

let dubai11Am = document.createElement('li');
dubai11Am.textContent = `11am: ${dubai.cookiesSold} cookies`;
dubaiSection.appendChild(dubai11Am);

let dubai12Pm = document.createElement('li');
dubai12Pm.textContent = `12pm: ${dubai.cookiesSold} cookies`;
dubaiSection.appendChild(dubai12Pm);

let dubai1Pm = document.createElement('li');
dubai1Pm.textContent = `1pm: ${dubai.cookiesSold} cookies`;
dubaiSection.appendChild(dubai1Pm);

let dubai2Pm = document.createElement('li');
dubai2Pm.textContent = `2pm: ${dubai.cookiesSold} cookies`;
dubaiSection.appendChild(dubai2Pm);

let dubai3Pm = document.createElement('li');
dubai3Pm.textContent = `3pm: ${dubai.cookiesSold} cookies`;
dubaiSection.appendChild(dubai3Pm);

let dubai4Pm = document.createElement('li');
dubai4Pm.textContent = `4pm: ${dubai.cookiesSold} cookies`;
dubaiSection.appendChild(dubai4Pm);

let dubai5Pm = document.createElement('li');
dubai5Pm.textContent = `5pm: ${dubai.cookiesSold} cookies`;
dubaiSection.appendChild(dubai5Pm);

let dubai6Pm = document.createElement('li');
dubai6Pm.textContent = `6pm: ${dubai.cookiesSold} cookies`;
dubaiSection.appendChild(dubai6Pm);

let dubai7Pm = document.createElement('li');
dubai7Pm.textContent = `7pm: ${dubai.cookiesSold} cookies`;
dubaiSection.appendChild(dubai7Pm);



let parisSection = document.createElement('h2');
parisSection.textContent = paris.name;
locationSection.appendChild(parisSection);

let parisStats = document.createElement('ul');
parisSection.appendChild(parisStats);

let paris6Am = document.createElement('li');
paris6Am.textContent = `6am: ${paris.cookiesSold} cookies`;
parisSection.appendChild(paris6Am);

let paris7Am = document.createElement('li');
paris7Am.textContent = `7am: ${paris.cookiesSold} cookies`;
parisSection.appendChild(paris7Am);

let paris8Am = document.createElement('li');
paris8Am.textContent = `8am: ${paris.cookiesSold} cookies`;
parisSection.appendChild(paris8Am);

let paris9Am = document.createElement('li');
paris9Am.textContent = `9am: ${paris.cookiesSold} cookies`;
parisSection.appendChild(paris9Am);

let paris10Am = document.createElement('li');
paris10Am.textContent = `10am: ${paris.cookiesSold} cookies`;
parisSection.appendChild(paris10Am);

let paris11Am = document.createElement('li');
paris11Am.textContent = `11am: ${paris.cookiesSold} cookies`;
parisSection.appendChild(paris11Am);

let paris12Pm = document.createElement('li');
paris12Pm.textContent = `12pm: ${paris.cookiesSold} cookies`;
parisSection.appendChild(paris12Pm);

let paris1Pm = document.createElement('li');
paris1Pm.textContent = `1pm: ${paris.cookiesSold} cookies`;
parisSection.appendChild(paris1Pm);

let paris2Pm = document.createElement('li');
paris2Pm.textContent = `2pm: ${paris.cookiesSold} cookies`;
parisSection.appendChild(paris2Pm);

let paris3Pm = document.createElement('li');
paris3Pm.textContent = `3pm: ${paris.cookiesSold} cookies`;
parisSection.appendChild(paris3Pm);

let paris4Pm = document.createElement('li');
paris4Pm.textContent = `4pm: ${paris.cookiesSold} cookies`;
parisSection.appendChild(paris4Pm);

let paris5Pm = document.createElement('li');
paris5Pm.textContent = `5pm: ${paris.cookiesSold} cookies`;
parisSection.appendChild(paris5Pm);

let paris6Pm = document.createElement('li');
paris6Pm.textContent = `6pm: ${paris.cookiesSold} cookies`;
parisSection.appendChild(paris6Pm);

let paris7Pm = document.createElement('li');
paris7Pm.textContent = `7pm: ${paris.cookiesSold} cookies`;
parisSection.appendChild(paris7Pm);



let limaSection = document.createElement('h2');
limaSection.textContent = lima.name;
locationSection.appendChild(limaSection);

let limaStats = document.createElement('ul');
limaSection.appendChild(limaStats);

let lima6Am = document.createElement('li');
lima6Am.textContent = `6am: ${lima.cookiesSold} cookies`;
limaSection.appendChild(lima6Am);

let lima7Am = document.createElement('li');
lima7Am.textContent = `7am: ${lima.cookiesSold} cookies`;
limaSection.appendChild(lima7Am);

let lima8Am = document.createElement('li');
lima8Am.textContent = `8am: ${lima.cookiesSold} cookies`;
limaSection.appendChild(lima8Am);

let lima9Am = document.createElement('li');
lima9Am.textContent = `9am: ${lima.cookiesSold} cookies`;
limaSection.appendChild(lima9Am);

let lima10Am = document.createElement('li');
lima10Am.textContent = `10am: ${lima.cookiesSold} cookies`;
limaSection.appendChild(lima10Am);

let lima11Am = document.createElement('li');
lima11Am.textContent = `11am: ${lima.cookiesSold} cookies`;
limaSection.appendChild(lima11Am);

let lima12Pm = document.createElement('li');
lima12Pm.textContent = `12pm: ${lima.cookiesSold} cookies`;
limaSection.appendChild(lima12Pm);

let lima1Pm = document.createElement('li');
lima1Pm.textContent = `1pm: ${lima.cookiesSold} cookies`;
limaSection.appendChild(lima1Pm);

let lima2Pm = document.createElement('li');
lima2Pm.textContent = `2pm: ${lima.cookiesSold} cookies`;
limaSection.appendChild(lima2Pm);

let lima3Pm = document.createElement('li');
lima3Pm.textContent = `3pm: ${lima.cookiesSold} cookies`;
limaSection.appendChild(lima3Pm);

let lima4Pm = document.createElement('li');
lima4Pm.textContent = `4pm: ${lima.cookiesSold} cookies`;
limaSection.appendChild(lima4Pm);

let lima5Pm = document.createElement('li');
lima5Pm.textContent = `5pm: ${lima.cookiesSold} cookies`;
limaSection.appendChild(lima5Pm);

let tlimaPm = document.createElement('li');
tlimaPm.textContent = `6pm: ${lima.cookiesSold} cookies`;
limaSection.appendChild(lima6Pm);

let lima7Pm = document.createElement('li');
lima7Pm.textContent = `7pm: ${lima.cookiesSold} cookies`;
limaSection.appendChild(lima7Pm);
