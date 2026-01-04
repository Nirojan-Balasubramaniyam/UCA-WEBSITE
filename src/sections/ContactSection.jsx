import { useState } from 'react';
import emailjs from '@emailjs/browser';

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

    // EmailJS configuration - Replace these with your actual credentials
    // Get them from https://www.emailjs.com/ after setting up your account
    // Note: Environment variables are not available in GitHub Pages build
    // You'll need to set these in your EmailJS dashboard or use a different approach
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    const TEMPLATE_ID_INQUIRY = import.meta.env.VITE_EMAILJS_TEMPLATE_INQUIRY || '';
    const TEMPLATE_ID_REPLY = import.meta.env.VITE_EMAILJS_TEMPLATE_REPLY || '';
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

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
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  <p className="text-sm font-medium">✓ Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  <p className="text-sm font-medium">✗ Failed to send message. Please try again or contact us directly at info@unicornconnectedapps.com</p>
                  {/* <p className="text-xs mt-2 text-red-600">
                    Check the browser console (F12) for error details. Common issues:
                    <br />• Verify EmailJS credentials in .env file are correct
                    <br />• Make sure you restarted the dev server after updating .env
                    <br />• Check that EmailJS templates match the variable names used
                  </p> */}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && (
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
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

