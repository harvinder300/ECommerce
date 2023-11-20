import React from "react";
import './ContactUs.css'; // Import the CSS file

function ContactUs() {
    return (
        <div className="contact-container">
            <form className="contact-form">
                <h2>Contact Us</h2>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Mobile No.</label>
                    <input type="tel" id="phone" placeholder="Enter your Number" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Your message here"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type='text' id='address' placeholder='1234 Main Street' />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactUs;
