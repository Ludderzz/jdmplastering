import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TopBar from './Announcement';

const Layout = () => {
  const { pathname } = useLocation();

  // UX/SEO: Ensuring the page resets to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* STICKY HEADER GROUP 
        We wrap Nav and TopBar together so they stick as one unit.
        z-[100] ensures it stays above all page content.
      */}
        <header className="sticky top-0 z-[9999] w-full bg-white shadow-sm"> 
         <Navbar />
        <TopBar />
      </header>

      {/* MAIN CONTENT
        Added a bit of top padding (pt-4) so content doesn't 
        flush directly against the sticky bar.
      */}
      <main className="flex-grow pt-0">
        <Outlet /> 
      </main>

      <Footer />
    </div>
  );
};

export default Layout;