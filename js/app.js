const nameField = document.querySelector('#name');
const otherJobTitle = document.querySelector('#other-title');
const jobRole = document.querySelector('#title');
const tshirtTheme = document.querySelector('#design');
const tshirtColorsDiv = document.querySelector('#colors-js-puns');
const tshirtColors = document.querySelector('#color');

// Set focus on the first text field on page-load
nameField.focus();

// A text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
otherJobTitle.style.display = 'none';
jobRole.addEventListener('input', (e) => {
  if (e.target.value === 'other') {
    otherJobTitle.style.display = '';
  } else {
    otherJobTitle.style.display = 'none';
  }
  otherJobTitle.focus();
});
