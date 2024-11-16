'use strict';

const convBtn = document.querySelector('button');

convBtn.addEventListener('click', function (event) {
  console.log('Hello World!');
  document.querySelector('h1').textContent = 'JS Linked!';
});
