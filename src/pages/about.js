
/* This is the "About" page of my web application that tells the users about my mission and my platform */

import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>About Us</title>
        </head>
        <body>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <img src="https://as2.ftcdn.net/v2/jpg/03/17/32/85/1000_F_317328556_FLtaOieyLDOwGeXFntbxoVobcwAcOuuT.jpg" alt="Website photo " style={{ width: '500px', height: '300px', objectFit: 'cover', margin: '0 0 20px' }} />
          
          <p>
            
        <h1 style={{ fontSize: '36px', margin: '0 0 20px' }}>Welcome to Our Website!</h1>
       
            This website is dedicated to helping students buy and sell items in a safe
            and reliable way. Our platform is supported by universities, and students
            can connect with each other to buy and sell items they need for prices
            that fit their budget.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide a stress-free experience for students while
            ensuring that they are not scammed or taken advantage of by others. We are
            dedicated to creating a community where students can trust one another and
            enjoy the benefits of affordable prices for items they need.
          </p>
          <h2>Our Platform</h2>
          <p>
            Our website is designed with the highest level of security, and before
            signing in, students must agree to our terms and conditions. This ensures
            that everyone is aware of the consequences of trying to take advantage of
            the system.
          </p>
          <p>
            We believe that this platform will not only benefit students who are new
            to the country but also those who are leaving campus and want to sell
            their items. By providing a secure platform, we hope to reduce the stress
            that comes with buying and selling items and make the experience more
            enjoyable for everyone involved.
          </p>
          <p>
            Thank you for choosing our platform, and we look forward to serving you!
          </p>
          <br></br>
        <br></br>
        <br></br>
        <br></br>
        </body>
      </html>
    </div>
  );
};

export default About;
