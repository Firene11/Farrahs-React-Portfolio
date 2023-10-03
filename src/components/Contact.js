import React from 'react';

export default function Contact(props) {
    const titleStyle = {paddingLeft: '105px', paddingTop: '10px', marginTop: '30px', marginBottom: '20px', color: 'white', fontSize: '22px', fontWeight: 'bold', };
    const { formData, handleChange, handleSubmit } = props;

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

<form style={{color: 'white'}}>
            
<div className = "form-box">
            <div className = "field1">
            <label> Send me a message! </label>
            <input placeholder="Name" name="name" value={formData.name} onChange={handleChange} />        
            <input placeholder="E-mail" name="email" value={formData.email} onChange={handleChange} />
            <textarea placeholder="Message" name="message" value={formData.message} onChange={handleChange} />
            </div>

            <button onClick={handleSubmit} type = "submit" id= "submitBtn" className = "submitBtn" > Submit</button>
            </div>
        </form>
        

        </section>
      </contact>
    );
  }