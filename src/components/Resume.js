import React from 'react';

export default function Resume(props) {
    const {resumeLink} = props;

    const textStyle = { marginLeft: '40px', color: 'black', fontSize: '14px', paddingBottom: '10px', };
    const titleStyle = {paddingLeft: '40px', paddingTop: '10px', marginTop: '30px', marginBottom: '20px', color: 'black', fontSize: '22px', fontWeight: 'bold', };

    return (
        <resume className="resume" id="About"
          style={{
              display: 'flex',
              flexDirection: 'column',
              fontFamily: 'Segoe UI',
              margin: '-10px',
              marginBottom: '40px',
          }}
        >
        
        <div style={titleStyle}>
            RESUME
          </div>
          <div>
            <hr></hr>
          </div>

          <section class='resumeTwo'
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            fontFamily: 'Segoe UI',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <div style={{ fontWeight: 'bold', fontSize: '14px', paddingTop: '20px'}}>
            DOWNLOAD MY <a href={require('src/images/FarrahHodgsonResume2023.pdf')} target="_blank">RESUME</a>
          </div>

          <div style={textStyle}>
            <h3 style={{background: 'black', color: 'white', padding: '5px 10px'}}>FRONT-END PROFICIENCIES</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>jQuery</p>
            <p>responsive design</p>
            <p>React</p>
          </div>

          <div style={textStyle}>
          <h3 style={{background: 'black', color: 'white', padding: '5px 10px'}}>BACK-END PROFICIENCIES</h3>
            <p>APIs</p>
            <p>Node</p>
            <p>Express</p>
            <p>MySQL, Sequelize</p>
            <p>MongoDB, Mongoose</p>
            <p>GraphQL</p>
          </div>

        </section>
      </resume>
    );
  }