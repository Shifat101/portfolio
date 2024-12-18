import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ShowcasePage from './pages/ShowcasePage';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/showcase" element={<ShowcasePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;