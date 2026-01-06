import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import CAppsLogo from '../assets/CAppsLogo.png';

export default function Header() {
  const { toggleTheme, currentTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'careers', label: 'Careers' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 flex-shrink-0"
          >
            <img 
              src={CAppsLogo} 
              alt="Unicorn CApps Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-gray-900 hover:text-primary-500 transition-colors">
              Unicorn Connected Apps
            </span>
          </button>
          
          {/* Navigation - Center */}
          <div className="hidden lg:flex items-center justify-center space-x-8 flex-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-medium text-base transition-colors ${
                  activeSection === link.id
                    ? 'text-primary-500'
                    : 'text-gray-700 hover:text-primary-500'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Contact Button - Right */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button - Desktop Only */}
            <button
              onClick={() => {
                console.log('Theme toggle clicked, current theme:', currentTheme);
                toggleTheme();
              }}
              className="hidden lg:block fixed top-4 right-4 z-50 bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors text-xs shadow-lg capitalize"
              title="Toggle Theme"
            >
              {currentTheme === 'cyan' && '☀️ Cyan'}
              {currentTheme === 'pink' && '🌙 Pink'}
              {currentTheme === 'grey' && '⚫ Grey'}
            </button>
            
            <button
              onClick={scrollToContact}
              className="hidden lg:block bg-primary-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-600 transition-colors text-sm"
            >
              Contact
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left font-medium transition-colors py-2 ${
                  activeSection === link.id
                    ? 'text-primary-500'
                    : 'text-gray-700 hover:text-primary-500'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={scrollToContact}
              className="block w-full text-left bg-primary-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => {
                toggleTheme();
                setIsMenuOpen(false);
              }}
              className="block w-full text-left font-medium transition-colors py-2 text-gray-700 hover:text-primary-500 border-t border-gray-200 pt-3 mt-2"
            >
              <span className="flex items-center gap-2">
                <span>Theme:</span>
                <span className="capitalize">
                  {currentTheme === 'cyan' && '☀️ Cyan'}
                  {currentTheme === 'pink' && '🌙 Pink'}
                  {currentTheme === 'grey' && '⚫ Grey'}
                </span>
              </span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
