import React from 'react';

export default function Nav() {
    const linkStyle = { paddingTop: '15px', paddingBottom: '15px', paddingRight: '60px', color: 'white', };
    const nameStyle = { marginRight: '30%', marginLeft: '8%', padding: '10px', color: 'white', fontSize: '30px', fontWeight: 'bold', }

    return (
      <nav className="menu">
        <section
          style={{
            display: 'flex',
            fontFamily: 'Segoe UI',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-space-between',
            backgroundColor: 'rgba(0, 0, 0, 0.792)',
          }}
        >
          <div style={nameStyle}>
            FARRAH HODGSON
          </div>
          <div style={linkStyle}>
            <a href="#About">ABOUT</a>
          </div>
          <div style={linkStyle}>
            <a href="#Work">WORK</a>
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
  