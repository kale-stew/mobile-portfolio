import React from 'react';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './styles/Home.css';

const styles = {
  fadeIn: {
    animation: 'x 3s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

const Home = () => {
    return (
        <div className="body">
            <h1 className="reveal-text">Kylie Stewart</h1>
            <div className="aboutme">
                <p></p>
            </div>
            <StyleRoot>
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
            <div className="space"></div>
            </StyleRoot>
        </div>
    );
}

export default Home;
