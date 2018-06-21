# TeamTreehouse FullStack JavaScript Techdegree Project3
# Build an Interactive Form
![alt text](https://github.com/newKeating/FS-techdegree-project3-Build-an-Interactive-Form/blob/master/Project3-Pass-Confirmed.png)

## About this Project
In this project, you'll create an interactive registration form for "FullStack Conf." Using the supplied HTML and CSS files, you'll use JavaScript to enhance the form by adding interactivity. You’ll also make the form more user-friendly by providing helpful error messages when the user enters invalid information into the form fields. You can use plain JavaScript or jQuery –– it's up to you!

This project is a great way for you to practice fundamental JavaScript skills. It also gives you a simple interactive portfolio project you can use to show off your understanding of JavaScript. Forms are a large part of any web application, so learning how to make them easy-to-use, interactive and responsive is a task worth mastering.

Download the project files. We've supplied two files for you to use:

- index.html is the web page you'll link your JavaScript file to.
- style.css contains the styles used to format the page and the registration form.

Create and link a JavaScript file to index.html

- Create a JavaScript file inside the "js" folder and link it to index.html
- If you're using jQuery, link index.html to the latest version of jQuery

## Project Instruction
Set focus on the first text field
- When the page loads, give focus to the first text field

”Job Role” section of the form:
- A text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
- Give the field an id of “other-title,” and add the placeholder text of "Your Job Role" to the field.

”T-Shirt Info” section of the form:
- For the T-Shirt color menu, only display the color options that match the design selected in the "Design" menu.
- If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
- If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."

”Register for Activities” section of the form:

- Some events are at the same time as others. If the user selects a workshop, don't allow selection of a workshop at the same date and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.
- When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
- As a user selects activities, a running total should display below the list of checkboxes. For example, if the user selects "Main Conference", then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300.

Payment Info section of the form:

- Display payment sections based on the payment option chosen in the select menu
- The "Credit Card" payment option should be selected by default, display the #credit-card div, and hide the "Paypal" and "Bitcoin information.
- When a user selects the "PayPal" payment option, the Paypal information should display, and the credit card and “Bitcoin” information should be hidden.
- When a user selects the "Bitcoin" payment option, the Bitcoin information should display, and the credit card and “PayPal” information should be hidden.

Form validation:

- If any of the following validation errors exist, prevent the user from submitting the form:
- Name field can't be blank
- Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, just that it's formatted like one: dave@teamtreehouse.com for example.
- Must select at least one checkbox under the "Register for Activities" section of the form.
- If the selected payment option is "Credit Card," make sure the user has supplied a credit card number, a zip code, and a 3 number CVV value before the form can be submitted.
  - Credit card field should only accept a number between 13 and 16 digits
  - The zipcode field should accept a 5-digit number
  - The CVV should only accept a number that is exactly 3 digits long
