import React from 'react';

export default function Contact() {

    const titleStyle = {paddingLeft: '105px', paddingTop: '10px', marginTop: '30px', marginBottom: '20px', color: 'white', fontSize: '22px', fontWeight: 'bold', };
    const iconStyle = { padding: '20px',}


    return (
      <contact className="contactMe" id="Contact"
        style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'black',
            fontFamily: 'Segoe UI',
            margin: '-10px',
        }}
      >

<div style={titleStyle}>
            CONTACT
          </div>

        <section
          style={{
            display: 'flex',
            flex: '1',
            fontFamily: 'Segoe UI',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-space-between',
            backgroundColor: 'black',
            margin: '-10px',
            paddingTop: '10px',
            paddingBottom: '40px',
          }}
          
        >

          <div style={{iconStyle}}>
          <a href="mailto:365farrah@gmail.com"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXx05-rxyBx3TAlZRDWvCs2NECQNDmzLikp030-hY&s" height="30px"></img></a>
          <a href="https://www.linkedin.com/in/farrah-hodgson-30b896259/"><img src="data:image/png;base64,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" height="30px"></img></a>
          <a href="https://github.com/Firene11"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOn3tj1rnoT9sNnjQydhVOiZZenRsqJYyXJQ&usqp=CAU" height="30px"></img></a>
          </div>

          <div>
            <hr></hr>
          <p style={{fontWeight: 'bold', fontSize: '14px',}}>"Courage is knowing it might hurt, and doing it anyway. Stupidity is the same. 
            And that's why life is hard."</p>
          <p style={{fontStyle: 'italic', fontSize: '14px',}}>(my favourite quote)</p>
          <p style={{fontWeight: 'lighter', fontSize: '14px',}}>-author unknown</p>
          </div>
        </section>
      </contact>
    );
  }