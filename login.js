// Import the tryLoadAndStartRecorder function from the recorder-loader module
import { tryLoadAndStartRecorder } from '@alwaysmeticulous/recorder-loader';

// Function to start the app
async function startApp() {
  try {
    // Start the Meticulous recorder
    await tryLoadAndStartRecorder({
      projectId: '0XTPUVif3qPwtgpZQK9fDUXafaxE8ECQmSdNa4wa',
      isProduction: window.location.hostname !== 'localhost', // Determine production based on hostname
    });
    console.log('Meticulous recorder started successfully.');
  } catch (error) {
    console.error('Error starting Meticulous recorder:', error);
  }

  // Function to simulate clicking a button
  function clickButton(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.click();
    } else {
      console.error(`Button with ID ${buttonId} not found.`);
    }
  }

  // Function to simulate filling out a form field
  function fillFormField(fieldId, value) {
    const field = document.getElementById(fieldId);
    if (field) {
      field.value = value;
    } else {
      console.error(`Form field with ID ${fieldId} not found.`);
    }
  }

  // Function to simulate submitting a form
  function submitForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
      form.submit();
    } else {
      console.error(`Form with ID ${formId} not found.`);
    }
  }

  // Simulate interactions
  window.onload = function () {
    // Click a button
    clickButton('submit-button');

    // Fill out a form field
    fillFormField('username', 'example_user');

    // Submit a form
    submitForm('login-form');
  };
}

// Call the startApp function to initialize the app
startApp();
