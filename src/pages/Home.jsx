import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
{/* Hero Section */}
<section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
  <div className="container-custom">
    
    {/* Wrapper */}
    <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
      
      {/* TEXT CONTENT – 70% */}
      <div className="w-full lg:w-[70%] text-left">
        
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
          Intelligent Software Solutions
        </span>

        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Transforming Ideas <br />
          Into <span className="text-primary-600">Intelligent,</span><br />
          Tailored Software
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl">
          We design, build and optimize digital products that are as unique as your business.
          Our team crafts tailored software solutions enhanced by artificial intelligence and
          machine learning to help you scale smarter, faster and stronger.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link to="/contact" className="btn-primary">
            Get Started
          </Link>

          <Link to="/services" className="btn-secondary">
            Discover Our Services
          </Link>

          <Link to="/technologies" className="btn-secondary">
            Explore Our Technologies
          </Link>
        </div>
      </div>

      {/* IMAGE – 30% */}
      <div className="w-full lg:w-[30%] flex justify-center">
        <img
          src="/images/hero-woman-laptop.png"  // replace with your image path
          alt="Software Development"
          className="w-full max-w-sm object-contain"
        />
      </div>

    </div>
  </div>
</section>


      {/* Why Intelligent & Tailored Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Intelligent & Tailored?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our approach combines cutting-edge AI/ML technologies with custom software development 
              to deliver solutions that truly fit your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Decision-Making</h3>
              <p className="text-gray-600">
                AI and ML technologies extract insights from your data to support informed decisions, 
                improving efficiency and outcomes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Operational Efficiency</h3>
              <p className="text-gray-600">
                Automation reduces manual work and minimizes errors, allowing your team to focus on 
                high-value activities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Experiences</h3>
              <p className="text-gray-600">
                Machine learning algorithms enable customized user experiences that resonate with 
                your customers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable Architecture</h3>
              <p className="text-gray-600">
                Our custom solutions adapt to your evolving needs, whether you're a start-up or 
                an enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our intelligent, tailored software solutions can help you achieve your goals.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-block">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}




