// app/javascript/controllers/form_controller.js
import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["name", "email"];

  submitForm(event) {
    event.preventDefault();
    
    const form = event.currentTarget;
    const formData = new FormData(form);
    
    fetch(form.action, {
      method: form.method,
      body: formData
    }).then(response => {
      if (response.ok) {
        // Optionally handle successful submission
        console.log("Form submitted successfully!");
      } else {
        // Optionally handle errors
        console.error("Form submission failed.");
      }
    }).catch(error => {
      console.error("An error occurred:", error);
    });
  }
}
