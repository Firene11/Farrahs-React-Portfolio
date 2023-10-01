import React from 'react';

export default function Nav() {
    const linkStyle = { border: '1px black' , padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.792)', color: 'white', };
    const nameStyle = { padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.792)', color: 'white', }

    return (
      <nav className="menu">
        <section
          style={{
            display: 'flex',
            fontFamily: 'helvetica',
            flexDirection: 'row',
            alignItems: 'flex-center',
            justifyContent: 'flex-space-between',
            width: '100%',
            margin: '0px',
          }}
        >
          <div style={nameStyle}>
            Farrah Hodgson
          </div>
          <div style={linkStyle}>
            <a href="#About">About</a>
          </div>
          <div style={linkStyle}>
            <a href="#Work">Work</a>
          </div>
          <div style={linkStyle}>
            <a href="#Contact">Contact</a>
          </div>
          <div style={linkStyle}>
            <a href="/FarrahHodgsonResume2023.pdf">Resume</a>
          </div>
        </section>
      </nav>
    );
  }
  