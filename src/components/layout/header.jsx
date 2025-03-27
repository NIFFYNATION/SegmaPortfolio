import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          SegmaDesigns
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-medium transition-colors hover:text-accent ${
                location.pathname === link.path 
                  ? 'text-accent' 
                  : 'text-text-primary'
              }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full" />
              )}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-background-alt hover:bg-primary-light transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <span>☀️</span> // Sun icon for light mode
            ) : (
              <span>🌙</span> // Moon icon for dark mode
            )}
          </button>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <span className="sr-only">Open menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 