import CAppsLogo from '../assets/CAppsLogo.png';

export default function Footer() {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={CAppsLogo} 
                alt="Unicorn CApps Logo" 
                className="w-8 h-8 object-contain"
              />
              <h3 className="text-white text-xl font-bold">Unicorn Connected Apps</h3>
            </div>
            <p className="text-sm">
              Transforming ideas into intelligent, tailored software solutions enhanced by AI and machine learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-primary-400 transition-colors text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-primary-400 transition-colors text-left">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('technologies')} className="hover:text-primary-400 transition-colors text-left">
                  Technologies
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('careers')} className="hover:text-primary-400 transition-colors text-left">
                  Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-primary-400 transition-colors text-left">
                  Custom Software
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-primary-400 transition-colors text-left">
                  AI & ML Solutions
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-primary-400 transition-colors text-left">
                  Web & Mobile Apps
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-primary-400 transition-colors text-left">
                  Cloud Solutions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@unicornconnectedapps.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  info@unicornconnectedapps.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+9421xxxxxxx"
                  className="hover:text-primary-400 transition-colors"
                >
                  +94 21 xxxxxxx
                </a>
              </li>
              <li className="text-gray-400">
                83 Chetty Street, Nallur, Jaffna
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Unicorn Connected Apps Limited. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="hover:text-primary-400 transition-colors">Privacy Policy</button>
            <button className="hover:text-primary-400 transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

