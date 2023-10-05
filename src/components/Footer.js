import React from 'react';

export default function About(props) {
    const {year} = props;

    return (
      <footer className="footer"
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Segoe UI',
            marginTop: '60px',
            marginLeft: '-10px',
            marginRight: '-10px',
        }}
      >

          <div style={{width: '100%', backgroundColor: 'black', color: 'white'}}>
            <center><p style={{fontWeight: 'bold', fontSize: '14px', alignText: 'center'}}>"Courage is knowing it might hurt, and doing it anyway. Stupidity is the same. 
            And that's why life is hard."</p>
            <p style={{fontStyle: 'italic', fontSize: '14px',}}>(my favourite quote)</p>
            <p style={{fontWeight: 'lighter', fontSize: '14px',}}>-author unknown</p></center>
          </div>

        <div style={{textAlign: 'center', display: 'flex', alignSelf: 'center'}}>
           <p><a  href="mailto:365farrah@gmail.com"><img src="https://firene11.github.io/Personal-Portfolio/images/icons8-email-30.png" className= 'icon'></img></a></p>
           <p><a href="https://www.linkedin.com/in/farrah-hodgson-30b896259/"><img src="https://firene11.github.io/Personal-Portfolio/images/icons8-linkedin-30.png" className= 'icon'></img></a></p>
           <p><a href="https://github.com/Firene11"><img src="https://firene11.github.io/Personal-Portfolio/images/icons8-github-30.png" className= 'icon'></img></a></p>
        </div>

        <p style={{textAlign: 'center', marginTop: '-10px'}}>© Farrah Hodgson {year}.</p>

        <div>
        <img src="./downside_banner.jpg" className= 'headerimg'></img>
        </div>



      </footer>
    );
  }
  
  