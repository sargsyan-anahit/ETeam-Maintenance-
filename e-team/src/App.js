import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Homepage from './pages/Homepage/Homepage';
import Benefits from './pages/Benefits';
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
