import React from 'react';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { ContactCardIcon, PhoneIcon, MailIcon } from './icons';
import './styles/Contact.css';

const styles = {
  fadeIn: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

const Contact = () => {
    return (
        <div className="body">
            <StyleRoot>
                <div className="contact-container" style={styles.fadeIn}>
                    <div>
                        <h1>I am available for freelance work</h1>
                    </div>
                    <div className="email-phone-wrap">
                        <div className="email-phone-row">
                            <p style={{ marginRight: '14px', fontSize: '16px', paddingBottom: '2px' }}>kylie.stewart@me.com</p>
                            <MailIcon width="43px"/>
                        </div>
                        <div className="email-phone-row">
                            <PhoneIcon width="43px"/>
                            <p style={{ marginLeft: '8px', fontSize: '16px', paddingBottom: '9px' }}>(202) 713-8956</p>    
                        </div>
                    </div>
                    <div className="github-linkedin-wrap">
                        <ContactCardIcon height="70px" width="70px"/>
                    </div>
                    <form method="get" action="KylieStewart-CV.pdf">
                        <button type="submit" style={{ marginTop: '20px' }}>Download my Fancy Resume</button>
                    </form>
                    <form method="get" action="KylieStewart-plaintext-CV.pdf">
                        <button type="submit" style={{ marginTop: '12px' }}>Download my Plaintext Resume</button>
                    </form>
                </div>
            </StyleRoot>
            <div className="space"></div>
        </div>
    );
}

export default Contact;
