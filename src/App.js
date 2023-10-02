import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return ( 
    <div style={{backgroundColor: 'white', margin: '0px', fontFamily: 'Segoe UI', }}>
      <Nav />
      <Header />
      <About />
      <Work />
      <Contact />
      <Resume />
      <p style={{textAlign: 'center', paddingTop: '20px'}}>© Farrah Hodgson 2023.</p>

    </div>
  ) 
}

export default App;
