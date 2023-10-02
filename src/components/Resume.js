import React from 'react';

export default function Resume() {

    const textStyle = { marginLeft: '105px', color: 'black', fontSize: '14px', paddingBottom: '10px', };
    const titleStyle = {paddingLeft: '105px', paddingTop: '10px', marginTop: '30px', marginBottom: '20px', color: 'black', fontSize: '22px', fontWeight: 'bold', };


    return (
      <resume className="resumeStuff">
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Segoe UI',
            margin: '-10px',
        }}
      >

        <div style={titleStyle}>
            RESUME
          </div>

          <section
          style={{
            display: 'flex',
            flex: '1',
            fontFamily: 'Segoe UI',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-space-between',
          }}
          
        ></section>

        <div style={textStyle}>
            DOWNLOAD MY <a href="/FarrahHodgsonResume2023.pdf">RESUME</a>
          </div>
          <div style={textStyle}>
            <h3>FRONT-END PROFICIENCIES</h3>
            <p>HTML</p>
            <p>CSS</p>
          </div>

        </section>
      </resume>
    );
  }