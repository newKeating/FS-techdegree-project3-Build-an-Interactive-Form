const otherJobTitle = document.querySelector('#other-title');
const jobRole = document.querySelector('#title');
const tshirtTheme = document.querySelector('#design');
const tshirtColorsDiv = document.querySelector('#colors-js-puns');
const tshirtColors = document.querySelector('#color');
const activities = document.querySelector('.activities');
const activitiesCheckboxes = document.querySelectorAll('fieldset.activities label input');
const p = document.createElement('p');
let totalCost = 0;
activities.appendChild(p);
const paymentOptions = document.querySelector('#payment');
const $paymentOptions = $('#payment');
const $creditcardDiv = $('#credit-card');
const $paypalDiv = $('#paypal');
const $bitcoinDiv = $('#bitcoin');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#mail');
const cardNumInput = document.querySelector('#cc-num');
const zipcodeInput = document.querySelector('#zip');
const cvvInput = document.querySelector('#cvv');
const form = document.querySelector('form');
const $errors = $('.error-message');
$errors.hide();
const $nameError = $('#name-error');
const $emailError = $('#email-error-wrongType');
const $checkboxError = $('#activities-error');
const $ccNumError = $('#cc-error');
const $zipError = $('#zip-error');
const $cvvError = $('#cvv-error');
const nameLabel = document.querySelector('#name-label');
const emailLabel = document.querySelector('#mail-label');
const checkboxLegend = document.querySelector('#activity-legend');
const ccNumLabel = document.querySelector('#cc-num-label');
const zipLabel = document.querySelector('#zip-label');
const cvvLabel = document.querySelector('#cvv-label');

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
  const disableCheckboxes = (num, boo) => {
    const label = document.querySelectorAll('fieldset.activities > label');
    activitiesCheckboxes[num].disabled = boo;
    // disable class adds grey color
    if (boo) {
      label[num].className = 'disable';
    } else {
      label[num].classList.remove('disable');
    }
  }

  if(isChecked) {
    switch(checkboxName) {
      case 'js-frameworks':
        disableCheckboxes(3, true);
        break;
      case 'js-libs':
        disableCheckboxes(4, true);
        break;
      case 'express':
        disableCheckboxes(1, true);
        break;
      case 'node':
        disableCheckboxes(2, true);
        break;
    }
  } else if(!isChecked) {
    switch(checkboxName) {
      case 'js-frameworks':
        disableCheckboxes(3, false);
        break;
      case 'js-libs':
        disableCheckboxes(4, false);
        break;
      case 'express':
        disableCheckboxes(1, false);
        break;
      case 'node':
        disableCheckboxes(2, false);
        break;
    }
  }
}
// As a user selects activities, a running total should display below the list of checkboxes. For example, if the user selects "Main Conference", then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300.
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

// Payment Info section of the form:
// Display payment sections based on the payment option chosen in the select menu
  // The "Credit Card" payment option should be selected by default
const paymentDefault = () => {
  $paymentOptions.val('credit card');
  $paypalDiv.hide();
  $bitcoinDiv.hide();
}
paymentDefault();
  // When "Credit Card" option selected, display the #credit-card div, and hide the "Paypal" and "Bitcoin information.
  // When a user selects the "PayPal" payment option, the Paypal information should display, and the credit card and “Bitcoin” information should be hidden.
  // When a user selects the "Bitcoin" payment option, the Bitcoin information should display, and the credit card and “PayPal” information should be hidden.
$paymentOptions.on('change', (e)=>{
  if(e.target.value === 'credit card') {
    $creditcardDiv.show();
    $paypalDiv.hide();
    $bitcoinDiv.hide();
  } else if(e.target.value === 'paypal') {
    $creditcardDiv.hide();
    $paypalDiv.show();
    $bitcoinDiv.hide();
  } else if(e.target.value === 'bitcoin') {
    $creditcardDiv.hide();
    $paypalDiv.hide();
    $bitcoinDiv.show();
  } else {
    $creditcardDiv.hide();
    $paypalDiv.hide();
    $bitcoinDiv.hide();
  }
});
// Form validation - If any of the following validation errors exist, prevent the user from submitting the form:
  // 1. Name field can't be blank
  // 2. Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, just that it's formatted like one: dave@teamtreehouse.com for example.
  // 3. Must select at least one checkbox under the "Register for Activities" section of the form.
  // 4. If the selected payment option is "Credit Card," make sure the user has supplied a credit card number, a zip code, and a 3 number CVV value before the form can be submitted.
    // - Credit card field should only accept a number between 13 and 16 digits
    // - The zipcode field should accept a 5-digit number
    // - The CVV should only accept a number that is exactly 3 digits long

form.addEventListener('submit', (e) => {
  if(nameInput.value.match(/\S+/) === null) {
    e.preventDefault();
    $nameError.show();
    nameLabel.className = 'invalid-color';
    nameInput.className = 'invalid-border';
    nameInput.addEventListener("keypress", (e) => {
      $nameError.hide();
      nameLabel.classList.remove('invalid-color');
      nameInput.classList.remove('invalid-border');
    });
  }
  if(emailInput.value.match(/^[^@]+@[^@.]+\.[a-z]+$/i) === null) {
    e.preventDefault();
    $emailError.show();
    emailLabel.className = 'invalid-color';
    emailInput.className = 'invalid-border';
    emailInput.addEventListener("keypress", (e) => {
      $emailError.hide();
      emailLabel.classList.remove('invalid-color');
      emailInput.classList.remove('invalid-border');
    });
  }
  const checkboxValid = () => {
    for(let i=0; i<activitiesCheckboxes.length; i++) {
      if(activitiesCheckboxes[i].checked) {
        return true;
      }
    }
  }
  if(!checkboxValid()) {
    e.preventDefault();
    $checkboxError.show();
    checkboxLegend.className = 'invalid-color';
    activities.addEventListener('change', () => {
      $checkboxError.hide();
      checkboxLegend.classList.remove('invalid-color');
    });
  }
  if(cardNumInput.value.match(/^\d{13,16}$/) === null) {
    e.preventDefault();
    $ccNumError.show();
    ccNumLabel.className = 'invalid-color';
    cardNumInput.className = 'invalid-border';
    cardNumInput.addEventListener("keypress", (e) => {
      $ccNumError.hide();
      ccNumLabel.classList.remove('invalid-color');
      cardNumInput.classList.remove('invalid-border');
    });
  }
  if(zipcodeInput.value.match(/^\d{5}$/) === null) {
    e.preventDefault();
    $zipError.show();
    zipLabel.className = 'invalid-color';
    zipcodeInput.className = 'invalid-border';
    zipcodeInput.addEventListener("keypress", (e) => {
      $zipError.hide();
      zipLabel.classList.remove('invalid-color');
      zipcodeInput.classList.remove('invalid-border');
    });
  }
  if(cvvInput.value.match(/^\d{3}$/) === null) {
    e.preventDefault();
    $cvvError.show();
    cvvLabel.className = 'invalid-color';
    cvvInput.className = 'invalid-border';
    cvvInput.addEventListener("keypress", (e) => {
      $cvvError.hide();
      cvvLabel.classList.remove('invalid-color');
      cvvInput.classList.remove('invalid-border');
    });
  }
});
