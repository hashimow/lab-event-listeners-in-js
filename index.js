// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  document.body.style.backgroundColor = 'rgb(173, 216, 230)'; // lightblue in RGB
}

// Function to reset the background color when the reset button is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = ''; // Reset to empty string
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyDisplay = document.getElementById('keyPressDisplay');
  if (keyDisplay) {
    keyDisplay.textContent = `Key pressed: ${event.key}`;
  }
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const textInput = document.getElementById('textInput');
  const displayParagraph = document.getElementById('textInputDisplay');
  if (textInput && displayParagraph) {
    displayParagraph.textContent = `You typed: ${textInput.value}`;
  }
}

// Attach Event Listeners
function setupEventListeners() {
  // Change background color when button is clicked
  const changeBtn = document.getElementById('changeColorButton');
  if (changeBtn) {
    changeBtn.addEventListener('click', changeBackgroundColor);
  }

  // Reset background color when reset button is double-clicked
  const resetBtn = document.getElementById('resetColorButton');
  if (resetBtn) {
    resetBtn.addEventListener('dblclick', resetBackgroundColor);
  }

  // Display key pressed
  document.addEventListener('keydown', displayKeyPress);

  // Display user input in real-time
  const textInput = document.getElementById('textInput');
  if (textInput) {
    textInput.addEventListener('input', displayUserInput);
  }
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

// Export functions for Jest testing
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};
