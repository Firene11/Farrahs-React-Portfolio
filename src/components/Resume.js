import React from 'react';

export default function Resume(props) {
    const {resumeLink} = props;

    const textStyle = { marginLeft: '105px', color: 'black', fontSize: '14px', paddingBottom: '10px', };
    const titleStyle = {paddingLeft: '105px', paddingTop: '10px', marginTop: '30px', marginBottom: '20px', color: 'black', fontSize: '22px', fontWeight: 'bold', };

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

          <div style={{marginLeft: '200px', fontWeight: 'bold', fontSize: '16px'}}>
            DOWNLOAD MY <a href={resumeLink}>RESUME</a>
            
          </div>

          <section
          style={{
            display: 'flex',
            flex: '1',
            fontFamily: 'Segoe UI',
            flexDirection: 'row',
            justifyContent: 'flex-space-between',
            marginLeft: '95px',
          }}
        >

          <div style={textStyle}>
            <h3>FRONT-END PROFICIENCIES</h3>
            <hr></hr>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>jQuery</p>
            <p>responsive design</p>
            <p>React</p>
          </div>

          <div style={textStyle}>
            <h3>BACK-END PROFICIENCIES</h3>
            <hr></hr>
            <p>APIs</p>
            <p>Node</p>
            <p>Express</p>
            <p>MySQL, Sequelize</p>
            <p>MongoDB, Mongoose</p>
            <p>GraphQL</p>
          </div>

          <div style={{paddingLeft: '60px'}}>
          <img src="https://media.giphy.com/media/icCkic4rahmhR1ch82/giphy.gif" width="380px" height="auto"></img>
          </div>
        </section>
      </resume>
    );
  }