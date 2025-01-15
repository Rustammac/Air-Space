// Get form elements
const form = document.querySelector("form");
const submitBtn = document.querySelector(".submit-btn");

const successModal = document.getElementById("successModal");
const closeModal = document.querySelector(".close");

// Function to check if all fields are filled
function checkFormValidity() {
  const departureDate = document.getElementById("departure-date").value;
  const returnDate = document.getElementById("return-date").value;
  const travelers = document.getElementById("travelers").value;
  const classType = document.getElementById("class").value;

  // Show or hide the submit button based on form fields validity
  if (departureDate && travelers && classType) {
    submitBtn.style.display = "inline-block"; // Show button
  } else {
    submitBtn.style.display = "none"; // Hide button
  }
}

// Validate dates and check if everything is filled when submitting
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const departureDate = new Date(
    document.getElementById("departure-date").value
  );
  const returnDateValue = document.getElementById("return-date").value;
  const returnDate = returnDateValue ? new Date(returnDateValue) : null;

  // Check if the return date is before departure date, if return date is provided
  if (returnDate && returnDate < departureDate) {
    alert(
      "Return date cannot be earlier than departure date. Please choose a valid return date."
    );

    return;
  }

  // If everything is fine
  alert("Form submitted successfully!");
  // Here you can proceed with form submission or further actions
});

// Event listener to track input changes and check validity
form.addEventListener("input", checkFormValidity);

// Hide button on page load until all fields are filled
checkFormValidity();

// Validate dates and check if everything is filled when submitting
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const departureDate = new Date(
    document.getElementById("departure-date").value
  );
  const returnDate = new Date(document.getElementById("return-date").value);

  // Check if return date is before departure date
  if (returnDate < departureDate) {
    alert(
      "Return date cannot be earlier than departure date. Please choose a valid return date."
    );
    return;
  }

  // If everything is fine
  alert("Form submitted successfully!");
  // Here you can proceed with form submission or further actions
});

// Event listener to track input changes and check validity
form.addEventListener("input", checkFormValidity);

// Disable button on page load until all fields are filled
checkFormValidity();
