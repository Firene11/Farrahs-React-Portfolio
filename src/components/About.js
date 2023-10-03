import React from 'react';

export default function About() {

    const titleStyle = {paddingLeft: '105px', paddingTop: '30px', color: 'white', fontSize: '22px', fontWeight: 'bold', };
    const imageStyle = { padding: '10px',};
    const textStyle = { padding: '20px', color: 'white', fontFamily: 'Segoe UI', fontSize: '16px', fontWeight: 'lighter', }


    return (
      <about className="aboutMe" id="About"
        style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'black',
            fontFamily: 'Segoe UI',
            margin: '-10px',
        }}
      >

<div style={titleStyle}>
            ABOUT
          </div>

        <section
          style={{
            display: 'flex',
            flex: '1',
            fontFamily: 'Segoe UI',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
            margin: 'auto',
            paddingTop: '20px',
            paddingLeft: '105px',
            paddingRight: '90px',
            paddingBottom: '60px',
          }}
          
        >


          <div style={imageStyle}>
          <img src="https://firene11.github.io/Personal-Portfolio/images/profile_Fih.jpg" width="250px" height="auto"></img>
          </div>

          <div style={textStyle}>
          Farrah Hodgson<br></br>
          <b>FULL STACK WEB DEVELOPER ←</b><br></br>
          <hr color="blue"></hr>
          <p>
          I live in Fredericton NB; although a grew up in a small town outside fo the city, but Calgary AB was
          my home for a good portion of my life. After working in the paint sales industry for too many years,
           I decided to go back to doing something that I loved in the past... and that is coding! I am a 
           Full Stack Web Developer graduating from a Coding Bootcamp hosted by the University of New Brunwsick in 
           October 2023.
          </p>

        My hobbies include anything outdoors and learning ways to be self-sustainable. I also enjoy things 
        related to design. I've been selling my crochet pattern designs on Etsy since 2009 and also own 
        and manage an online clothing store.
          </div>
        </section>
      </about>
    );
  }
  
  