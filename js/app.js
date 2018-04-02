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
const $errors = $('.error');
$errors.hide();
const $nameError = $('#name-error');
const $emailError = $('#email-error-wrongType');
const $ccNumError = $('#cc-error');
const $zipError = $('#zip-error');
const $cvvError = $('#cvv-error');

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

// if any validator returns false it's not valid
  // validator functions
    // name field validator

// if validator functions return false
  // show error message function
  // error style function

let nameValid = /\S+/.test(nameInput.value);
let emailValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput.value);
let checkboxValid = () => {
  for(let i=0; i<activitiesCheckboxes.length; i++) {
    if(activitiesCheckboxes[i].checked) {
      return true;
    } else {
      return false;
    }
  }
}
let ccNumValid = /^\d{13,16}$/.test(cardNumInput.value);
let zipValid = /^\d{5}$/.test(zipcodeInput.value);
let cvvValid = /^\d{3}$/.test(cvvInput.value);

form.addEventListener('submit', (e) => {
  if(!nameValid) {
    e.preventDefault();
    $nameError.show();
    nameInput.addEventListener("keypress", (e) => {
      $nameError.hide();
    });
  }
  if(!emailValid) {
    e.preventDefault();
    $emailError.show();
    emailInput.addEventListener("keypress", (e) => {
      $emailError.hide();
    });
  }
});
