'use strict';

// Shared theme toggle on each page.
document.querySelectorAll('.theme-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const enabled = document.body.classList.toggle('dark-theme');
    button.setAttribute('aria-pressed', String(enabled));
    button.textContent = enabled ? 'Switch to light theme' : 'Switch to dark theme';
  });
});

// Local client-side validation and confirmation for the prototype form.
const commissionForm = document.querySelector('#commission-form');
if (commissionForm) {
  const status = document.querySelector('#form-status');
  commissionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    status.className = 'form-status';
    const fields = Array.from(commissionForm.elements).filter((field) => field.willValidate);
    const invalidField = fields.find((field) => !field.checkValidity());
    if (invalidField) {
      status.textContent = 'Please check the highlighted field and complete all required information.';
      status.classList.add('error');
      invalidField.focus();
      invalidField.reportValidity();
      return;
    }
    const name = commissionForm.elements.customerName.value.trim();
    status.textContent = `Thanks, ${name}. Your inquiry passed the prototype validation. No message was sent; connect a form service before accepting real submissions.`;
    status.classList.add('success');
    commissionForm.reset();
  });
}
