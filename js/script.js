// Get the form element
const form = document.getElementById('contact-form');

// Add submit event listener to the form
form.addEventListener('submit', function(event) {
  
  // Prevents webpage reloding when sending the form
  event.preventDefault(); 

  // Show the modal
  const myModal = new bootstrap.Modal(document.getElementById('myModal'));
  myModal.show();

});