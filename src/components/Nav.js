import React from 'react';

export default function Nav(props) {
    const {home} = props;

    const linkStyle = { paddingTop: '10px', paddingBottom: '10px', paddingRight: '60px', textDecoration: 'none', color: 'white', fontSize: '14px', };
    const nameStyle = { marginRight: '30%', marginLeft: '10%', padding: '5px', color: 'white', fontSize: '24px', fontWeight: 'bold', }


    return (
      <nav className="navbar">
        <section
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flex: '1',
            fontFamily: 'Segoe UI',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-space-between',
            backgroundColor: 'black',
            margin: '-10px',
          }}
        >
          <div style={nameStyle}>
            <a href={home}>FARRAH HODGSON</a>
          </div>
          <div style={linkStyle}>
            <a href="#About">ABOUT</a>
          </div>
          <div style={linkStyle}>
            <a href="#Work">PORTFOLIO</a>
          </div>
          <div style={linkStyle}>
            <a href="#Contact">CONTACT</a>
          </div>
          <div style={linkStyle}>
            <a href="/FarrahHodgsonResume2023.pdf">RESUME</a>
          </div>
        </section>
      </nav>
    );
  }
  
  