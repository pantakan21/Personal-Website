import React from 'react'
import {assets} from "../../assets/assets"
import "./ContactMe.css"

const ContactMe = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e1ff51db-aee4-4ae8-a2fb-dba874e1dace");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
    };

    return (
        <div id = "contact" className="contact">
            <h1>CONTACT ME</h1>

            <div className="contact-container">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available for new job opportunities and would love to discuss how I can contribute to your team. Feel free to reach out to me anytime!</p>
                    <div className="contact-info">
                        <img src={assets.Mail_icon} alt="" />
                        <p>pantakanwork219@gmail.com</p>
                    </div>
                    <div className="contact-info">
                        <img src={assets.Call_icon} alt="" />
                        <p>+66 92-121-9001</p>
                    </div>
                    <div className="contact-info">
                        <img src={assets.Location_icon} alt="" />
                        <p>Bangkok, Thailand</p>
                    </div>
                    <div className='contact-info-link-group'>
                        <div className="contact-info-link">
                        <a href="https://github.com/pantakan21" target='_blank'><img src={assets.Github} alt="" /></a>
                        </div>
                        <div className="contact-info-link">
                            <a href="https://www.facebook.com/profile.php?id=100002601415319" target='_blank'><img src={assets.Facebook} alt="" /></a>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label>Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" required/>
                    <label>Your Email</label>
                    <input type="email" placeholder="Enter your email address" name="email" required/>
                    <label>Write you message here</label>
                    <textarea name="message" rows = "8" placeholder="Enter your message" required></textarea>
                    <button type="submit" className="contact-submit">Submit Now</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe
