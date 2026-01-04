import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:info@unicornconnectedapps.com?subject=${encodeURIComponent('Contact Form Submission')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`)}`;
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <p className="text-primary-500 uppercase text-sm font-semibold mb-2">CONTACT US</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's Build Something Amazing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to discuss how our tailored, AI-driven solutions can help your business thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center"
              >
                Send Message
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>

          {/* Right - Contact Info */}
          <div className="space-y-6">
            {/* Get in Touch Card */}
            <div className="bg-gray-900 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a
                    href="mailto:info@unicornconnectedapps.com"
                    className="text-white hover:text-primary-400 transition-colors"
                  >
                    info@unicornconnectedapps.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a
                    href="tel:+9421xxxxxxx"
                    className="text-white hover:text-primary-400 transition-colors"
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
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3">Jaffna, Sri Lanka</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Unicorn Connected Apps Limited<br />
                  83 Chetty Street, Nallur, Jaffna
                </p>
                <div className="w-full h-80 rounded-lg overflow-hidden border border-gray-200">
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

