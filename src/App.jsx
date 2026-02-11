import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout wrapper
import Layout from './components/Layout';

// Individual Pages
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        {/* The Layout route acts as a parent. 
            All routes inside it will render within the <Outlet /> in Layout.jsx */}
        <Route path="/" element={<Layout />}>
          
          {/* This is the default page (Home) */}
          <Route index element={<Home />} />
          
          {/* Other pages */}
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          
          {/* Catch-all for 404 - redirects to Home if they type a wrong URL */}
          <Route path="*" element={<Home />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;