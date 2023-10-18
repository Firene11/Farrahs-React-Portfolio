import React from 'react';

export default function About() {

    const titleStyle = {paddingLeft: '40px', paddingTop: '30px', color: 'black', fontSize: '22px', fontWeight: 'bold', };
    const imageStyle = { padding: '10px',};
    const textStyle = { padding: '20px', color: 'black', fontFamily: 'Segoe UI', fontSize: '16px', }


    return (
      <about className="aboutMe" id="About"
        style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            fontFamily: 'Segoe UI',
            marginTop: '10px',
        }}
      >

<div style={titleStyle}>
            ABOUT
          </div>

        <section className='aboutTwo'
          style={{
            display: 'flex',
            flex: '1',
            fontFamily: 'Segoe UI',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '20px',
            paddingLeft: '40px',
            paddingRight: '40px',
            paddingBottom: '60px',
          }}
          
        >


          <div style={imageStyle}>
          <img src="https://firene11.github.io/Personal-Portfolio/images/profile_Fih.jpg" width="300px" height="auto"></img>
          </div>

          <div style={textStyle}>
          <span style={{color: 'blue', fontWeight: 'bold'}}>Farrah Hodgson - Fredericton - New Brunswick - Canada<br></br>
          <b>FULL STACK WEB DEVELOPER ←</b></span><br></br>
          <hr></hr>
          <p>
          Hello! I'm a passionate full-stack web developer with a love for both the digital and natural 
          worlds. When I'm not coding, you can find me exploring the great outdoors, where I often seek
           adventure and inspiration. I'm a fitness enthusiast, always up for a good workout or hike,
            and I find solace in vegetable gardening and tending to a colorful array of plants.</p>

        <p>Creativity flows through me, whether it's in the lines of code I write, the art I create, 
            or my fascination with interior design. I appreciate the beauty in all forms of design, 
            and I'm constantly on the lookout for new ways to express myself artistically. In my 
            downtime, I enjoy the soothing and meditative practice of crochet, turning yarn into 
            intricate and cozy creations.</p>

        <p>Life is a canvas, and I'm here to explore and fill it with the vibrant colors of my interests and passions. Welcome to my journey! </p>

        
          </div>
        </section>
      </about>
    );
  }
  
  