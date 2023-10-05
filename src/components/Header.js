import React from 'react';

export default function Header(props) {
    const {headerImage} = props;

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
          <div>
          {headerImage}
            
          </div>
        </section>
      </header>
    );
  }
  