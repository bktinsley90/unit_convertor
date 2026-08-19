/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.querySelector('#convert-btn');
const inputField = document.querySelector('input[type="number"]');
const meterToFeetResult = document.querySelector('.meters-result');
const litersToGallonsResult = document.querySelector('.liters-result');
const kilogramsToPoundsResult = document.querySelector('.kilograms-result');

convertBtn.addEventListener('click', function () {
  //console.log('Button clicked');
  // meter to feet conversion
  const meters = parseFloat(inputField.value);
  const feet = metersToFeet(meters);
  // console.log('Meters:', meters, 'Feet:', feet);
  meterToFeetResult.textContent = `${meters} meters = ${feet.toFixed(2)} feet | ${feet.toFixed(2)} feet = ${meters} meters`;
  //liters to gallons conversion
  const liters = parseFloat(inputField.value);
  const gallons = litersToGallons(liters);
  litersToGallonsResult.textContent = `${liters} liters = ${gallons.toFixed(2)} gallons | ${gallons.toFixed(2)} gallons = ${liters} liters`;
  //kilograms to pounds conversion
  const kilograms = parseFloat(inputField.value);
  const pounds = kilogramsToPounds(kilograms);
  kilogramsToPoundsResult.textContent = `${kilograms} kilograms = ${pounds.toFixed(2)} pounds | ${pounds.toFixed(2)} pounds = ${kilograms} kilograms`;
});

function metersToFeet(meters) {
  return meters * 3.281;
}

function feetToMeters(feet) {
  return feet / 3.281;
}

function litersToGallons(liters) {
  return liters * 0.264;
}
function gallonsToLiters(gallons) {
  return gallons / 0.264;
}
function kilogramsToPounds(kilograms) {
  return kilograms * 2.204;
}
function poundsToKilograms(pounds) {
  return pounds / 2.204;
}
