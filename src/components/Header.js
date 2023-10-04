import React from 'react';

export default function Header(props) {
    const {downArrow} = props;
    const arrowStyle = { marginBottom: '24px', marginTop: '-10px', }

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
          <div style={arrowStyle}>
          {downArrow}
            
          </div>
        </section>
      </header>
    );
  }
  