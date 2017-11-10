import React from 'react';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './styles/Home.css';

const styles = {
  fadeIn: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

const Home = () => {
    return (
        <div className="body">
            <StyleRoot>
            <h1 className="reveal-text">Kylie Stewart</h1>
            <div className="aboutme-wrap">
                <div className="aboutme" style={styles.fadeIn}>
                    <div style={{ height: '3px' }}></div>
                    <h3>
                        Hi, I'm Kylie! I've like to build things and solve problems. 
                    </h3>
                    <div style={{ height: '3px' }}></div>
                    <p>
                        These interests have been supported by my fascination with technology ever since I first worked with a desktop computer, at age five. 
                        From building web pages with simple HTML and CSS to studying chemical compounds, there has never been a time in my life I am not surrounding myself with tech. 
                        I began attending one of the most prestigious coding bootcamps in the country this past August of 2017, learning all of the latest standards and tools in full-stack web development. 
                        With these skills, and my background in customer service as well as product management, I am eager to get to work in the tech community of Phoenix, Arizona.
                    </p>
                    <div style={{ height: '8px' }}></div>
                    <p>
                        Below are some projects I am working on and things I'm interested in:
                    </p>
                </div>
            </div>
            <div className="welcome" style={styles.fadeIn}>
                <div className="welcome-div">
                    <h2>Should I Hike Today?</h2>
                    <p>More about this thing</p></div>
                <div className="welcome-div">
                    <h2>Machine Learning 101</h2>
                    <p>More about this thing</p></div>
                <div className="welcome-div">
                    <h2>Locus: News Aggregator</h2>
                    <p>More about this thing</p></div>
                <div className="welcome-div">
                    <h2>Responsive Web Design</h2>
                    <p>More about this thing</p></div>
                <div className="welcome-div">
                    <h2>React-Native in Action</h2>
                    <p>More about this thing</p></div>
                <div className="welcome-div">
                    <h2>Purple Blue Green</h2>
                    <p>More about this thing</p></div>
                </div>
            </StyleRoot>
        </div>
    );
}

export default Home;
