import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";


function App() {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    return setFormData({...formData, [name]: value})
  };

  const handleSubmit = () => {
    console.log('Data Submitted', formData)
    return;
  }

  return ( 
    <div style={{backgroundColor: 'white', margin: '0px', fontFamily: 'Segoe UI', }}>
      <Nav home="./" />
      <Header downArrow =<img src="https://media.giphy.com/media/fisQRnqJsyhCKKngYm/giphy.gif" className= 'downArrow'></img> />
      

      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/contact' element={<Contact formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />} />
        <Route path='/resume' element={<Resume resumeLink ='/FarrahHodgsonResume2023.pdf' />} />
        </Routes>
      

      
      

      <Footer year="2023" />

    </div>
  ) 
}

export default App;
