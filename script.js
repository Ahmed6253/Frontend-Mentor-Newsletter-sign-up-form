'use strict';

const submitBtn = document.querySelector('#submit');
const container = document.querySelector('.container');
const form = document.querySelector('.form');
const emailForm = document.querySelector('form');
const emailInbut = document.querySelector('#email');
const emailSpan = document.querySelector('span');
const confirmation = document.querySelector('.confirmation');
const dismiss = document.querySelector('#dismiss');
emailInbut.focus();

submitBtn.addEventListener('click', function () {
  emailInbut.blur();
  if (!emailForm.checkValidity()) {
    document.querySelector('.alert').style.display = 'flex';
    emailInbut.style.border = 'solid var(--tomato) 1px';
    emailInbut.style.backgroundColor = 'hsl(3, 64%, 89%)';
    emailInbut.style.color = 'var(--tomato)';
  } else {
    emailForm.addEventListener('submit', (e) => {
      e.preventDefault();
      container.innerHTML = '';
      container.appendChild(confirmation);
      confirmation.style.display = 'flex';
      emailSpan.innerHTML = emailInbut.value;
    });
  }
});

dismiss.addEventListener('click', () => {
  close();
});
