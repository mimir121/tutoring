function submitEmail() {
  const email = document.getElementById('email').value;
  if (email) {
    alert(`Thanks! I'll get back to you at ${email}.`);
    document.getElementById('email').value = '';
  } else {
    alert('Please enter a valid email.');
  }
}

document.getElementById('year').textContent = new Date().getFullYear();
