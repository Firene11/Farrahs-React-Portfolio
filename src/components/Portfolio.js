import React from 'react';

export default function Work() {

    const titleStyle = {paddingLeft: '105px', paddingTop: '10px', color: 'black', fontSize: '22px', fontWeight: 'bold', };
    const cardStyle = { width: '40%', height: 'auto', color: 'black', margin: '30px', fontSize: '20px', fontWeight: 'bold', border: 'solid', boxShadow: '6px 1px 10px #000000', };

    return (
        <work className="workSection" id="Work"
          style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'white',
              fontFamily: 'Segoe UI',
              marginBottom: '40px',
              marginTop: '50px',
          }}
        >
              <div style={titleStyle}>
              PORTFOLIO
            </div>
  
          <section
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              flex: '1',
              fontFamily: 'Segoe UI',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 'auto',
              paddingRight: '10px',
              marginTop: '40px',
            }}
            
          >
  
            <card style={cardStyle}>
            <center><p style={{marginBottom: '-20px'}}><a href="https://fact-v-tech-lounge-client-f58d96d137e5.herokuapp.com/">↓ FACT-V TECH LOUNGE ↓</a></p></center><br></br>
            <a href="https://fact-v-tech-lounge-client-f58d96d137e5.herokuapp.com/"><img src="/src/images/fact-v-main.jpg" width="100%" height="auto"></img></a>
            <center><a href="https://github.com/Firene11/fact-v-tech-lounge">VIEW GITHUB REPO</a></center>
            </card>

            <card style={cardStyle}>
            <center><p style={{marginBottom: '-20px'}}><a href="https://atlantic-glamping-6972d1dfb7e3.herokuapp.com">↓ ATLANTIC GLAMPING ↓</a></p></center><br></br>
            <center><a href="https://atlantic-glamping-6972d1dfb7e3.herokuapp.com"><img src="https://firene11.github.io/Personal-Portfolio/images/AG.jpg" width="100%" height="auto"></img></a></center>
            <center><a href="https://github.com/Firene11/Atlantic-Glamping">VIEW GITHUB REPO</a></center>
            </card>
            

            <card style={cardStyle}>
            <center><p style={{marginBottom: '-20px'}}><a href="https://firene11.github.io/cosmic-cocktail/">↓ COSMIC COCKTAILS ↓</a></p></center><br></br>
            <a href="https://firene11.github.io/cosmic-cocktail/"><img src="https://firene11.github.io/Personal-Portfolio/images/screenshot.jpg" width="100%" height="auto"></img></a>
            <center><a href="https://github.com/Firene11/cosmic-cocktail">VIEW GITHUB REPO</a></center>
            </card>
  
            <card style={cardStyle}>
            <center><p style={{marginBottom: '-20px'}}><a href="https://firene11.github.io/Week-01-Challenge/">↓ WEEK ONE CHALLENGE ↓</a></p></center><br></br>
            <a href="https://firene11.github.io/Week-01-Challenge/"><img src="https://firene11.github.io/Personal-Portfolio/images/Week-01-challenge.jpg" width="100%" height="auto"></img></a>
            <center><a href="https://github.com/Firene11/Week-01-Challenge">VIEW GITHUB REPO</a></center>
            </card>

            <card style={cardStyle}>
            <center><p style={{marginBottom: '-20px'}}><a href="https://https://firene11.github.io/odin-recipes/">↓ ODIN RECIPES ↓</a></p></center><br></br>
            <a href="https://firene11.github.io/odin-recipes/"><img src="https://firene11.github.io/Personal-Portfolio/images/recipes.jpg" width="100%" height="auto"></img></a>
            <center><a href="https://github.com/Firene11/odin-recipes">VIEW GITHUB REPO</a></center>
            </card>

            <card style={cardStyle}>
            <center><p style={{marginBottom: '-20px'}}><a href="https://https://firene11.github.io/Color-State/">↓ COLOR STATE ↓</a></p></center><br></br>
            <a href="https://firene11.github.io/Color-State/"><img src="https://firene11.github.io/Personal-Portfolio/images/color-state.jpg" width="100%" height="auto"></img></a>
            <center><a href="https://github.com/Firene11/Color-State">VIEW GITHUB REPO</a></center>
            </card>

          </section>
        </work>
      );
    }
    
    