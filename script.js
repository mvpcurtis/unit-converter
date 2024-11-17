'use strict';

/*
    1 meter = 3.281 feet
    1 liter = 0.264 gallon
    1 kilogram = 2.204 pound
*/

const convBtn = document.querySelector('button');
const lengthParaEl = document.querySelector('#length > p');
const volumeParaEl = document.querySelector('#volume > p');
const massParaEl = document.querySelector('#mass > p');
const inputEl = document.querySelector('input');

const meterToFeet = function (num) {
  return num * 3.281;
};

const feetToMeter = function (num) {
  return num / 3.281;
};

const literToGallon = function (num) {
  return num * 0.264;
};

const gallonToLiter = function (num) {
  return num / 0.264;
};

const kiloToPound = function (num) {
  return num * 2.204;
};

const poundToKilo = function (num) {
  return num / 2.204;
};

const startConversion = function () {
  const value = inputEl.value;

  lengthParaEl.textContent = `
    ${value} meters = ${meterToFeet(value).toFixed(2)} feet | 
    ${value} feet = ${feetToMeter(value).toFixed(2)} meters
`;

  volumeParaEl.textContent = `
    ${value} liters = ${literToGallon(value).toFixed(2)} gallons |
    ${value} gallons = ${gallonToLiter(value).toFixed(2)} liters
`;

  massParaEl.textContent = `
    ${value} kilos = ${kiloToPound(value).toFixed(2)} pounds |
    ${value} pounds = ${poundToKilo(value).toFixed(2)} kilos
`;
};

convBtn.addEventListener('click', startConversion);
