import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 10);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Add event listener for scroll
  useEffect(() => {
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
        
        {/* Desktop Navigation */}
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
        
      

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-background/90 backdrop-blur-sm shadow-sm md:hidden">
            <nav className="flex flex-col items-start ml-4 space-y-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={toggleMenu} // Close menu on link click
                  className={`font-medium transition-colors hover:text-accent ${
                    location.pathname === link.path 
                      ? 'text-accent' 
                      : 'text-text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}

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
        </div>
          {/* Mobile Menu Button */}
          <button 
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button> 
      </div>
    </header>
  );
};

export default Header; 