const scriptURL = 'https://script.google.com/macros/s/AKfycbyTCi-2jHrj9f7wn7CzFNPqqJW_U-TMWdVR2iCQ7XlHjufxC2yTp1npAb-c9bNsE6s/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})