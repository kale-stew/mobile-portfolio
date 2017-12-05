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
                        Hi, I'm Kylie. I am a JavaScript developer.
                    </h3>
                    <div style={{ height: '3px' }}></div>
                    <p>
                    When I'm not working, you can usually find me hiking somewhere in the southwest with my dog. 
                    I've recently developed a news aggregator web app and a universal list native iOS app, which you can check out on my portfolio. 
                    Prior to developing, I worked in customer service and studied Forensic Chemistry, dabbling in RaspberryPi and twitter bots on the side. 
                    While I enjoyed that work, I found that I love the challenge of constantly problem solving and creating solutions that programming provides. 
                    I'd like to combine my love for education and my programming skill set into a full time position at your company!
                    </p>
                    <div style={{ height: '8px' }}></div>
                </div>
            </div>

            <div className="aboutme-wrap">
                <div className="aboutme" style={styles.fadeIn}>
                    <h3>Some things I'm currently working on:</h3>
                </div>
            </div>

            <div className="welcome" style={styles.fadeIn}>
                <div className="welcome-div">
                    <h2><i>Coding:</i> sockets.io</h2>
                    <p>I am working to display live twitter feeds on <a href="https://github.com/kale-stew/should-i-hike-today">one of my completed personal projects</a> using sockets.
                        The <a>twitter accounts</a> I will be displaying were self-built using node.js and twit.</p></div>
                <div className="welcome-div">
                    <h2><i>Reading:</i> Eloquent JavaScript</h2>
                    <p>I was recommended <a href="http://eloquentjavascript.net/">this book</a> so many times, I finally allowed it to jump to the top of my book queue.</p></div>
                <div className="welcome-div">
                    <h2><i>Coding:</i> Über Responsive Web Design</h2>
                    <p>More about this thing</p></div> 
                </div>
            </StyleRoot>
        </div>
    );
}

export default Home;
