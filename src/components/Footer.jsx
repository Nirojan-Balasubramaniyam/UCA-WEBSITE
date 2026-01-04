import { useState } from 'react';
import CAppsLogo from '../assets/CAppsLogo.png';

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

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
            <button 
              onClick={() => setShowPrivacy(true)}
              className="hover:text-primary-400 transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setShowTerms(true)}
              className="hover:text-primary-400 transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Overlay */}
      {showPrivacy && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={() => setShowPrivacy(false)}
        >
          <div 
            className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-primary-500 px-6 py-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">Privacy Policy</h3>
              <button
                onClick={() => setShowPrivacy(false)}
                className="text-white hover:text-gray-200"
                type="button"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 140px)' }}>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Privacy Policy</h4>
              <p className="text-sm text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">1. Information We Collect</h5>
                  <p>We collect information that you provide directly to us, including when you contact us, use our services, or interact with our website.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">2. How We Use Your Information</h5>
                  <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and respond to your inquiries.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">3. Data Security</h5>
                  <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">4. Your Rights</h5>
                  <p>You have the right to access, update, or delete your personal information at any time. Contact us at info@unicornconnectedapps.com.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">5. Cookies</h5>
                  <p>Our website may use cookies to enhance your experience. You can choose to disable cookies through your browser settings.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">6. Contact Us</h5>
                  <p>If you have any questions about this Privacy Policy, please contact us at info@unicornconnectedapps.com.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4 flex justify-end">
              <button
                onClick={() => setShowPrivacy(false)}
                type="button"
                className="bg-primary-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Overlay */}
      {showTerms && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={() => setShowTerms(false)}
        >
          <div 
            className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-primary-500 px-6 py-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">Terms of Service</h3>
              <button
                onClick={() => setShowTerms(false)}
                className="text-white hover:text-gray-200"
                type="button"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 140px)' }}>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Terms of Service</h4>
              <p className="text-sm text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">1. Acceptance of Terms</h5>
                  <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">2. Use License</h5>
                  <p>Permission is granted to temporarily access the materials on our website for personal, non-commercial transitory viewing only.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">3. Service Description</h5>
                  <p>We provide software development, AI/ML solutions, and related services. All services are provided subject to separate service agreements.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">4. Intellectual Property</h5>
                  <p>All content, features, and functionality of this website are the property of Unicorn Connected Apps and are protected by international copyright laws.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">5. Limitation of Liability</h5>
                  <p>In no event shall Unicorn Connected Apps be liable for any damages arising out of the use or inability to use the materials on our website.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">6. Revisions</h5>
                  <p>Unicorn Connected Apps may revise these terms of service at any time without notice.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">7. Contact Information</h5>
                  <p>For questions regarding these Terms of Service, please contact us at info@unicornconnectedapps.com.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4 flex justify-end">
              <button
                onClick={() => setShowTerms(false)}
                type="button"
                className="bg-primary-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

