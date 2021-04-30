import React from 'react';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { MdLocationOn } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';


function Contact({background}) {
    return (
        <div className={background?"contact dark-mode":"contact"}>
        <div className="contact-title">
            <h2>Contact Me</h2>
            <h4>Get In Touch</h4>
        </div>
        <div className="contact-me">
            <div className="contact-form">
            <h3>Message Me</h3>
            <form>
                <div className="form-group">
                    <div className="inner-form-name">
                        <input type="text" placeholder="Your Name" className="form-control"/>
                    </div>
                    <div className="inner-form-email">
                        <input type="text" placeholder="Your Email" className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Subject" className="form-control"/>
                </div>
                <div className="form-group">
                    <textarea cols="30" rows="10" className="form-control" placeholder="Message"></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" value="Send Message" className="btn"/>
                </div>
            </form>
            </div>
            <div className="contact-details">
            <h3 className="contact-info-title">Contact Info</h3>
                <ul>
                    <li>
                        <div className="contact-icons">
                            <RiContactsBook2Fill className="contact-icons-img"/>
                        </div>
                        <div className="contact-info">
                            <h3>Name</h3>
                            <b>Kiran Budhathoki</b>
                        </div>
                    </li>
                    <li>
                        <div className="contact-icons">
                            <MdLocationOn className="contact-icons-img"/>
                        </div>
                        <div className="contact-info">
                            <h3>Location</h3>
                            <b>Lokanthali,Bhaktapur</b>
                        </div>
                    </li>
                    <li>
                        <div className="contact-icons">
                            <FiPhoneCall className="contact-icons-img"/>
                        </div>
                        <div className="contact-info">
                            <h3>Call</h3>
                            <b>9819709827</b>
                        </div>
                    </li>
                    <li>
                        <div className="contact-icons">
                            <AiOutlineMail className="contact-icons-img"/>
                        </div>
                        <div className="contact-info">
                            <h3>Email</h3>
                            <b>Bishes247437@gmail.com</b>
                        </div>
                    </li>

                </ul>
            </div>
            </div>
        </div>
    )
}

export default Contact
