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

// For the T-Shirt color menu, only display the color options that match the design selected in the "Design" menu.
  // Hide T-Shirt color div
  tshirtColorsDiv.style.display = 'none';
  // If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
  // If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."
//
tshirtTheme.addEventListener('change', (e) => {
  if (e.target.value === 'js puns') {
    tshirtColorsDiv.style.display = '';
    tshirtColors.selectedIndex = 0;
    for(let i=0; i<3; i++) {
      tshirtColors[i].style.display = '';
    }
    for(let i=3; i<6; i++) {
      tshirtColors[i].style.display = 'none';
    }
  } else if (e.target.value === 'heart js') {
    tshirtColorsDiv.style.display = '';
    tshirtColors.selectedIndex = 3;
    for(let i=0; i<3; i++) {
      tshirtColors[i].style.display = 'none';
    }
    for(let i=3; i<6; i++) {
      tshirtColors[i].style.display = '';
    }
  } else {
    tshirtColorsDiv.style.display = 'none';
  }
});
