import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { useState } from "react";

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
      <Header downArrow =<img src="https://media.giphy.com/media/KzihUjIfOxh4gvatZO/giphy.gif" width='250px' height='auto'></img> />
      <About />
      <Work />
      <Contact formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      <Resume resumeLink ='a href="/FarrahHodgsonResume2023.pdf' />
      <Footer year="2023" />

    </div>
  ) 
}

export default App;
