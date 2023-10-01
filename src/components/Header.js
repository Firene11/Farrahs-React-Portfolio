import React from 'react';

export default function Header() {
    const headerStyle = { paddingTop: '10px', paddingBottom: '0px', marginBottom: '-30px', color: 'black', fontSize: '48px' };
    const arrowStyle = { margin: '0px', padding: '0px', }

    return (
      <header className="headerBox">
        <section
          style={{
            display: 'flex',
            fontFamily: 'Segoe UI',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={headerStyle}>
            Portfolio
          </div>
          <div style={arrowStyle}>
          <img src="https://media.giphy.com/media/KzihUjIfOxh4gvatZO/giphy.gif" width='250px' height='auto'></img>
            
          </div>
        </section>
      </header>
    );
  }
  