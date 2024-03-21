const form = document.getElementById('request-form');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const note = document.getElementById('note').value;

  const data = {
    name,
    email,
    phone,
    note,
  };

  // Simulate sending data to email (frontend-only, no actual email sending)
  fetch('/send-request', { // Replace with actual email sending backend logic
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        message.textContent = 'Your request has been sent successfully!';
        form.reset(); // Reset form after successful submission
      } else {
        message.textContent = 'There was an error sending your request.';
      }
    })
    .catch(error => {
      console.error(error);
      message.textContent = 'There was a problem sending your request.';
    });
});
