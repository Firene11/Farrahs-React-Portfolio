import React from 'react';

export default function Header() {
    const headerStyle = { paddingTop: '10px', paddingBottom: '0px', marginBottom: '-30px', marginTop: '50px', color: 'black', fontSize: '78px', fontWeight: 'bolder',};
    const arrowStyle = { marginBottom: '70px', marginTop: '-30px', padding: '0px', }

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
          <img src="https://media.giphy.com/media/KzihUjIfOxh4gvatZO/giphy.gif" width='500px' height='auto'></img>
            
          </div>
        </section>
      </header>
    );
  }
  