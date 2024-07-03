import React from 'react'

const BottomBar = () => {
    // Bottom bar component code
    return (
        <div className="bottom-container">
            <div className="bottom-container-in">
                <div className="bottom-pages">
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/privacypolicies">Privacy Policy</a></li>
                        <li><a href="/Disclaimer">Disclaimer</a></li>
                    </ul>
                </div>
                <div className="bottom-contact-pages"><a href="/OurContacts">Our Contacts</a></div>
            </div>
        </div>
    );
};

export default BottomBar