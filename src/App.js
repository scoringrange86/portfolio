import './App.css';
// import Carousel from './components/Carousel';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header >
      <AboutMe/>
      </header>
        <main>
        {/* <AboutMe/> */}
          <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
            {/* <Carousel
            >
              <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
              <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
              <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
            </Carousel> */}
          </div>
          <Projects />
          <Skills/>
          <Contact/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;



// ########## To Do 

// - Add carousel 
// - Add skills item 
// - Final decision on Project items 
// - Adjust font / background / theme
