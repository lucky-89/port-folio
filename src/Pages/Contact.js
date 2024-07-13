import React from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();
 
    // Fetch form data
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value
    };
 
    // Prepare the data to be sent through emailjs
    const emailData = {
      service_id: "service_v01cvjb",
      template_id: "template_67kck8t",
      user_id:"I1ZyG6PX_ioH6uiYt",
   
      template_params: {
        
        'from_name': formData.name,
        'from_email': formData.email,
        'phone': formData.phone,
        'message_html': formData.message
      }
    };
 
    // Send email using EmailJS
    emailjs.sendForm(emailData.service_id, emailData.template_id, e.target,emailData.user_id)
      .then((response) => {
        console.log('Email sent:', response.status, response.text);
        if (response.status === 200) {
          // Show success message using SweetAlert
          swal("Success!", "Your message has been sent successfully!", "success");
          // Clear form fields
          e.target.reset();
        } else {
          // Show error message using SweetAlert
          swal("Error!", "Failed to send message. Please try again later.", "error");
        }
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Show error message using SweetAlert
        swal("Error!", "Failed to send message. Please try again later.", "error");
      });
  };
 
  return (
    <div className="container1">
      <h2>Contact Us</h2>
      <form onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" className="form-control" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
