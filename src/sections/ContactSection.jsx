import { useState } from 'react';
import emailjs from '@emailjs/browser';
// Import development image for contact section
import developmentImage from '../assets/developement.jpg';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS configuration
    // Note: Hardcoded for GitHub Pages deployment (env vars not available in build)
    // These are safe to expose as EmailJS public keys are meant to be public
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_cgb3uao';
    const TEMPLATE_ID_INQUIRY = import.meta.env.VITE_EMAILJS_TEMPLATE_INQUIRY || 'template_6f6hbtq';
    const TEMPLATE_ID_REPLY = import.meta.env.VITE_EMAILJS_TEMPLATE_REPLY || 'template_m85q866';
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YN6HqrhEsi_cs5Njd';

    // Debug: Log environment variables (check browser console)
    console.log('EmailJS Config Check:', {
      SERVICE_ID,
      TEMPLATE_ID_INQUIRY,
      TEMPLATE_ID_REPLY,
      PUBLIC_KEY: PUBLIC_KEY ? 'Set' : 'Not set',
      allEnvVars: import.meta.env
    });

    // Check if EmailJS is configured
    const isEmailJSConfigured = 
      SERVICE_ID && 
      SERVICE_ID !== '' &&
      TEMPLATE_ID_INQUIRY && 
      TEMPLATE_ID_INQUIRY !== '' &&
      TEMPLATE_ID_REPLY && 
      TEMPLATE_ID_REPLY !== '' &&
      PUBLIC_KEY && 
      PUBLIC_KEY !== '';

    if (!isEmailJSConfigured) {
      // Fallback to mailto if EmailJS is not configured
      const subject = encodeURIComponent('Contact Form Submission');
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.company || 'N/A'}\n\n` +
        `Message:\n${formData.message}`
      );
      window.location.href = `mailto:nirojan.baala@gmail.com?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    try {
      console.log('=== EmailJS Debug Info ===');
      console.log('Service ID:', SERVICE_ID);
      console.log('Inquiry Template ID:', TEMPLATE_ID_INQUIRY);
      console.log('Reply Template ID:', TEMPLATE_ID_REPLY);
      console.log('Public Key:', PUBLIC_KEY ? 'Set (' + PUBLIC_KEY.substring(0, 10) + '...)' : 'Not set');

      // Send inquiry email to nirojan.baala@gmail.com
      // Template uses: {{name}}, {{time}}, {{message}}
      console.log('Sending inquiry email...');
      const inquiryParams = {
        name: formData.name,
        time: new Date().toLocaleString(),
        message: `Email: ${formData.email}\nCompany: ${formData.company || 'Not provided'}\n\nMessage:\n${formData.message}`,
      };
      console.log('Inquiry params:', inquiryParams);
      
      const inquiryResult = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID_INQUIRY,
        inquiryParams,
        PUBLIC_KEY
      );

      console.log('✓ Inquiry email sent successfully:', inquiryResult);

      // Send auto-reply to client
      // Template uses: {{name}}, {{title}}, and {{email}} for To Email field
      console.log('Sending auto-reply email...');
      const replyParams = {
        name: formData.name, // Template uses {{name}}
        title: 'Contact Form Submission', // Template uses {{title}}
        email: formData.email, // Template uses {{email}} for To Email field
      };
      console.log('Reply params:', replyParams);
      
      const replyResult = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID_REPLY,
        replyParams,
        PUBLIC_KEY
      );

      console.log('✓ Auto-reply email sent successfully:', replyResult);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Clear status message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('❌ ========== EMAIL ERROR ==========');
      console.error('Error object:', error);
      console.error('Error status:', error.status);
      console.error('Error text:', error.text);
      console.error('Error message:', error.message);
      console.error('Full error:', JSON.stringify(error, null, 2));
      console.error('=====================================');
      
      let errorMessage = 'Failed to send message.\n\n';
      if (error.text) {
        errorMessage += `EmailJS Error: ${error.text}\n`;
      }
      if (error.status) {
        errorMessage += `Status Code: ${error.status}\n`;
      }
      if (error.message) {
        errorMessage += `Error: ${error.message}\n`;
      }
      errorMessage += '\nPlease check the browser console (F12) for full details.';
      
      setSubmitStatus('error');
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-0 sm:px-4 lg:px-8 bg-white overflow-x-hidden">
      <div className="container-custom w-full max-w-full mx-auto px-4 sm:px-6">
        {/* Hero Section - Modern Style */}
        <div className="text-center mb-12 sm:mb-16 w-full min-w-0 px-2 sm:px-0">
          <div className="inline-block mb-4">
            <span className="bg-primary-100 text-primary-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
              CONTACT US
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2 sm:px-0 break-words">
            Let's Build Something <span className="text-primary-500">Amazing</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0 break-words">
            We'd love to discuss how our tailored, AI-driven solutions can help your business thrive.
          </p>
        </div>

        {/* Development Image - Modern Overlapping Design */}
        <div className="relative mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <img 
              src={developmentImage} 
              alt="Contact Us" 
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent"></div>
            
            {/* Floating Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="max-w-2xl">
                <div className="bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl border border-white/50">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Get in touch with our team and discover how we can help you achieve your goals with cutting-edge technology solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl -z-10 hidden lg:block"></div>
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary-400/10 rounded-full blur-3xl -z-10 hidden lg:block"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-full min-w-0 max-w-full">
          {/* Left - Contact Form */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-shadow duration-300 w-full min-w-0 overflow-hidden">
            <div className="flex items-center mb-6 sm:mb-8 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 break-words min-w-0 flex-1">Send Us a Message</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 w-full min-w-0">
              <div className="w-full min-w-0">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full max-w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-white hover:border-primary-300 box-border"
                />
              </div>
              
              <div className="w-full min-w-0">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                  className="w-full max-w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-white hover:border-primary-300 box-border"
                />
              </div>
              
              <div className="w-full min-w-0">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full max-w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-white hover:border-primary-300 box-border"
                />
              </div>
              
              <div className="w-full min-w-0">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full max-w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-white hover:border-primary-300 resize-none box-border"
                ></textarea>
              </div>
              
              {submitStatus === 'success' && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 text-green-800 px-6 py-4 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-semibold">Message sent successfully! We'll get back to you soon.</p>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-300 text-red-800 px-6 py-4 rounded-xl shadow-lg">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="font-semibold">Failed to send message. Please try again or contact us directly at info@unicornconnectedapps.com</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full max-w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-[1.02] transform box-border"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right - Contact Info */}
          <div className="space-y-6 w-full min-w-0">
            {/* Get in Touch Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-700/50 hover:shadow-3xl transition-shadow duration-300 w-full min-w-0 overflow-hidden">
              <div className="flex items-center mb-6 sm:mb-8 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-500/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 border border-primary-400/30 flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold min-w-0 flex-1 break-words">Get in Touch</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-white/5 transition-colors duration-300 group min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500/30 transition-colors flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a
                    href="mailto:info@unicornconnectedapps.com"
                    className="text-white hover:text-primary-400 transition-colors text-sm sm:text-base md:text-lg font-medium break-all min-w-0 flex-1"
                  >
                    info@unicornconnectedapps.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-white/5 transition-colors duration-300 group min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500/30 transition-colors flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a
                    href="tel:+9421xxxxxxx"
                    className="text-white hover:text-primary-400 transition-colors text-sm sm:text-base md:text-lg font-medium break-words min-w-0 flex-1"
                  >
                    +94 21 xxxxxxx
                  </a>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="grid gap-4">
              {/* London Office */}
              {/* <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3">London, United Kingdom</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Unicorn Connected Apps Limited<br />
                  41 Walsingham Road, Enfield EN2 6EY
                </p>
                <div className="w-full h-48 rounded-lg overflow-hidden border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps?q=41+Walsingham+Road,+Enfield+EN2+6EY,+United+Kingdom&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="London Office Location"
                  ></iframe>
                </div>
              </div> */}

              {/* Jaffna Office */}
              <div className="bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 w-full min-w-0 overflow-hidden">
                <div className="flex items-center mb-4 min-w-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 min-w-0 flex-1 break-words">Jaffna, Sri Lanka</h4>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 break-words">
                  Unicorn Connected Apps Limited<br />
                  83 Chetty Street, Nallur, Jaffna
                </p>
                <div className="w-full h-80 rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg">
                  <iframe
                    src="https://www.google.com/maps?q=83+Chetty+Street,+Nallur,+Jaffna,+Sri+Lanka&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Jaffna Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

