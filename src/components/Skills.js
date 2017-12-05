import React from 'react';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './styles/Contact.css';

const styles = {
  fadeIn: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

const Skills = () => {
    return (
        <div className="body">
            <StyleRoot>
                <div className="contact-container" style={styles.fadeIn}>
                    <div>
                        <h1>I am available for freelance work</h1>
                    </div>
                    <button style={{ marginTop: '20px' }}>Download my Resume</button>
                </div>
            </StyleRoot>
            <div className="space"></div>
        </div>
    );
}

export default Skills;
