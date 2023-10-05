import React from 'react';

export default function Contact(props) {
    const titleStyle = {paddingLeft: '40px', paddingTop: '10px', marginTop: '30px', marginBottom: '20px', color: 'white', fontSize: '22px', fontWeight: 'bold', };
    const { formData, handleChange, handleSubmit, errorMessage } = props;
    

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
            justifyContent: 'center',
            backgroundColor: 'black',
            margin: '-10px',
            paddingTop: '10px',
            paddingBottom: '40px',
          }}
          
        >
<div style={{marginTop: '-20px'}}>
    <img src="https://media.giphy.com/media/dyhZ03Pqoivt4aDkYN/giphy.gif" width='200px' height='auto'></img>
</div>
<form style={{color: 'white'}}>
            
<div className = "form-box">
            <div className = "field1">
            <label> Send me a message! </label>
            <input placeholder="Name" type="text" required name="name" value={formData.name} onChange={handleChange} />        
            <input placeholder="E-mail" type= "email" required name="email" value={formData.email} onChange={handleChange} />
            <textarea placeholder="Message" type="text" required name="message" value={formData.message} onChange={handleChange} />
            </div>

            <button onClick={handleSubmit} type = "submit" id= "submitBtn" className = "submitBtn" > Submit</button>
            </div>
        </form>
        {errorMessage && (
        <div>
          <p style={{color: 'red'}}>{errorMessage}</p>
        </div>
      )}
        

        </section>
      </contact>
    );
  }