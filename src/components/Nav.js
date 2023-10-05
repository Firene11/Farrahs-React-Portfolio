import React from 'react';

export default function Nav(props) {
    const {home} = props;
    const linkStyle = { paddingTop: '10px', paddingBottom: '10px', paddingRight: '20px', textDecoration: 'none', color: 'white', fontSize: '14px', };
    const nameStyle = { marginRight: '60px', marginLeft: '40px', padding: '5px', color: 'white', fontSize: '24px', fontWeight: 'bold', }


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
            padding: '10px',
            gap: '30%',
          }}
        >
            
          <div style={nameStyle}>
            <a href={home}>FARRAH HODGSON</a>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'row', margin: 'auto', justifyContent: 'flex-end', gap: '14px'}}>
          <div style={linkStyle}>
            <a href="/About">ABOUT</a>
          </div>

          <div style={linkStyle}>
            <a href="/Work">PORTFOLIO</a>
          </div>

          <div style={linkStyle}>
            <a href="/Contact">CONTACT</a>
          </div>
          <div style={linkStyle}>
            <a href="/Resume">RESUME</a>
          </div>
          </div>

        </section>
      </nav>
    );
  }
  
  