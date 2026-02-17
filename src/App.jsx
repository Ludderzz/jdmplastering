import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Ensure this path is correct
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      {/* The Layout component wraps all other pages */}
      <Route path="/" element={<Layout />}>
        {/* 'index' means this shows up at the base URL (/) */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        
        {/* Catch-all route to prevent blank pages on typos */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;