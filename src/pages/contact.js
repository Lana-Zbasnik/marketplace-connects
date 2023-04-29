/* This is the "Contact us" page of my web application that allowes user to send an email to me in case something goes wrong */

import React from 'react';

const Contact = () => {
  const contactPage = document.createElement("div");
  contactPage.className = "contact-page";

  const contactForm = document.createElement("form");
  contactForm.action = "/submit-form.php";
  contactForm.method = "POST";

  const nameLabel = document.createElement("label");
  nameLabel.htmlFor = "name";
  nameLabel.innerHTML = "Name:";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "name";
  nameInput.name = "name";
  nameInput.required = true;

  const emailLabel = document.createElement("label");
  emailLabel.htmlFor = "email";
  emailLabel.innerHTML = "Email:";
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.id = "email";
  emailInput.name = "email";
  emailInput.required = true;

  const messageLabel = document.createElement("label");
  messageLabel.htmlFor = "message";
  messageLabel.innerHTML = "Message:";
  const messageInput = document.createElement("textarea");
  messageInput.id = "message";
  messageInput.name = "message";
  messageInput.required = true;

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.innerHTML = "Send";

  contactForm.append(nameLabel, nameInput, emailLabel, emailInput, messageLabel, messageInput, submitButton);

  const contactInfo = document.createElement("div");
  contactInfo.className = "contact-info";

  
  return (
    <div style={{display: "flex"}}>
    <div style={{flex: 0.8, marginLeft: "3.5cm", marginTop: "3cm", width:"50%"}}>
      <p>We're sorry to hear that you've experienced an issue on our website. We take all feedback seriously, and we want to make sure that we address any concerns you may have. Please don't hesitate to contact us if you have encountered any problems while using our platform.</p>
      <p>Our support team is available to assist you with any issues or questions you may have. You can reach out to us through the contact form on our website, and we will respond to you as soon as possible. If your issue is urgent, please indicate this in your message, and we will prioritize your request accordingly.</p>
      <p>We appreciate your trust in our platform, and we are committed to providing a safe and reliable experience for all of our users. Your feedback helps us to continuously improve our services, so please don't hesitate to share your thoughts with us.</p>
      <p>Thank you for your understanding, and we look forward to resolving any issues you may have encountered.</p>
    </div>
    <div className="contact-page" style={{marginTop: "3.5cm", width: "35%", marginLeft: "3cm"}}>
      <form action="mailto:lz0613@westminstercollege.ecu" method="POST">
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" id="name" name="name" required style={{width: "60", marginBottom: "20px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc"}} />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" id="email" name="email" required style={{width: "65%", marginBottom: "20px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc"}} />
        <br />
        <label htmlFor="message">Message:</label>
        <br />
        <textarea id="message" name="message" required style={{width: "70%", height: "160px", marginBottom: "20px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc"}}></textarea>
        
        <button type="submit" style={{backgroundColor: "#5d44a8", color: "#fff", border: "1px solid #ccc", padding: "10px 20px", borderRadius: "5px", cursor: "pointer", transition: "background-color 0.3s",  marginLeft: "45px"}}>Send</button>
      </form>
    </div>
  </div>
  
      
    
  
  );
}


  
export default Contact;
