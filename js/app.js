const nameField = document.querySelector('#name');
const otherJobTitle = document.querySelector('#other-title');
const jobRole = document.querySelector('#title');
const tshirtTheme = document.querySelector('#design');
const tshirtColorsDiv = document.querySelector('#colors-js-puns');
const tshirtColors = document.querySelector('#color');
const activities = document.querySelector('.activities');
const activitiesCheckboxes = document.querySelectorAll('fieldset.activities > label > input');
const p = document.createElement('p');
let totalCost = 0;
activities.appendChild(p);

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

// ”Register for Activities” section of the form
  // Disable checkboxes for workshops that are conflicting with user's selections.
activities.addEventListener('change', (e) => {
  toggleCheckbox(e);
  printTotal(e);
});

const toggleCheckbox = (e) => {
  const isChecked = e.target.checked;
  const checkboxName = e.target.name;
  const disableCheckboxes = (num1, num2, boo) => {
    const label = document.querySelectorAll('fieldset.activities > label');
    activitiesCheckboxes[num1].disabled = boo;
    activitiesCheckboxes[num2].disabled = boo;
    // disable class adds grey color
    if (boo) {
      label[num1].className = 'disable';
      label[num2].className = 'disable';
    } else {
      label[num1].classList.remove('disable');
      label[num2].classList.remove('disable');
    }
  }

  if(isChecked) {
    switch(checkboxName) {
      case 'js-frameworks':
        disableCheckboxes(3, 5, true);
        break;
      case 'js-libs':
        disableCheckboxes(4, 6, true);
        break;
      case 'express':
        disableCheckboxes(1, 5, true);
        break;
      case 'node':
        disableCheckboxes(2, 6, true);
        break;
      case 'build-tools':
        disableCheckboxes(1, 3, true);
        break;
      case 'npm':
        disableCheckboxes(2, 4, true);
        break;
    }
  } else if(!isChecked) {
    switch(checkboxName) {
      case 'js-frameworks':
        disableCheckboxes(3, 5, false);
        break;
      case 'js-libs':
        disableCheckboxes(4, 6, false);
        break;
      case 'express':
        disableCheckboxes(1, 5, false);
        break;
      case 'node':
        disableCheckboxes(2, 6, false);
        break;
      case 'build-tools':
        disableCheckboxes(1, 3, false);
        break;
      case 'npm':
        disableCheckboxes(2, 4, false);
        break;
    }
  }
}

const printTotal = (e) => {
  const isChecked = e.target.checked;
  const calculateTotal = (e) => {
    if(isChecked) {
      totalCost += parseInt(e.target.value);
    } else if(!isChecked) {
      totalCost -= parseInt(e.target.value);
    }
    return totalCost;
  }
  calculateTotal(e);
  p.textContent = `Total: $${totalCost}`;
  if(totalCost === 0) {
    p.style.display = 'none';
  } else {
    p.style.display = '';
  }
}
