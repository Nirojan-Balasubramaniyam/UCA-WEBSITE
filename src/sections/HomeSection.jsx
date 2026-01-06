// Import home background image
import homeDeveloperImg from '../assets/home-developer.png';

export default function HomeSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
      <section id="home" className="relative m-0 p-0">
        {/* Hero Section - Modern Full Screen Layout */}
        <div className="relative md:min-h-screen overflow-hidden m-0 p-0">
          {/* Desktop: Background Image with Gradient Overlay */}
          <div 
            className="hidden md:flex absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${homeDeveloperImg})`,
            }}
          />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#004166] via-[#004166]/90 to-transparent"></div>
          
          {/* Mobile Layout: Image First, Then Text */}
          <div className="md:hidden bg-[#004166] w-full">
            {/* Mobile: Centered Image - Larger Size */}
            <div >
              <img 
                src={homeDeveloperImg} 
                alt="Developer working" 
                className="absolute "
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#004166]/60 via-[#004166]/40 to-[#004166]"></div>
            </div>
            
            {/* Mobile: Text Content Below Image - No Gap */}
            <div className="bg-[#004166] pt-6 pb-12 px-4 m-0">
              <div className="max-w-7xl mx-auto">
                <div className="inline-block mb-4">
                  <span className="bg-primary-500/20 backdrop-blur-sm text-primary-300 px-4 py-2 rounded-full text-sm font-semibold border border-primary-400/30">
                    Intelligent Software Solutions
                  </span>
                </div>
<h1 className="text-4xl font-bold mb-10 leading-tight text-white drop-shadow-2xl max-w-[18ch]">
  Transforming Ideas Into <span className="text-primary-300">Intelligent</span>, Tailored Software
</h1>

                <p className="text-lg mb-10 leading-relaxed text-white/95 drop-shadow-lg">
                  We design, build and optimize digital products that are as unique as your business. 
                  Our team crafts tailored software solutions enhanced by artificial intelligence and 
                  machine learning to help you scale smarter, faster and stronger.
                </p>
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Get Started
                  </button>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Discover Our Services
                  </button>
                  <button
                    onClick={() => scrollToSection('technologies')}
                    className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Explore Our Technologies
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop: Text Content Overlay */}
          <div className="hidden md:flex items-center absolute inset-0">
            <div className="container-custom relative z-10 py-20 px-4 md:px-20 w-full">
              <div className="max-w-6xl">
                <div className="inline-block mb-4">
                  <span className="bg-primary-500/20 backdrop-blur-sm text-primary-300 px-4 py-2 rounded-full text-sm font-semibold border border-primary-400/30">
                    Intelligent Software Solutions
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
                  Transforming Ideas Into <span className="text-primary-300">Intelligent</span>, Tailored Software
                </h1>
                <p className="text-xl md:text-2xl mb-10 leading-relaxed text-white/95 drop-shadow-lg max-w-xl">
                  We design, build and optimize digital products that are as unique as your business. 
                  Our team crafts tailored software solutions enhanced by artificial intelligence and 
                  machine learning to help you scale smarter, faster and stronger.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Get Started
                  </button>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Discover Our Services
                  </button>
                  <button
                    onClick={() => scrollToSection('technologies')}
                    className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Explore Our Technologies
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Decorative Elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl hidden lg:block"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary-400/10 rounded-full blur-3xl hidden lg:block"></div>
        </div>


      {/* Why Intelligent & Tailored Section */}
      <div className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-primary-500 uppercase text-sm font-semibold tracking-wide mb-3">WHY CHOOSE US</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">Why Intelligent & Tailored?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine cutting-edge AI with custom software development to deliver solutions that truly transform your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Decision-Making</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                AI and ML technologies extract insights from your data to support informed decisions, improving efficiency.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Operational Efficiency</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Automation reduces manual work and minimizes errors, allowing your team to focus on high-value activities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Experiences</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Machine learning algorithms enable customized user experiences that resonate with your customers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable Architecture</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Our custom solutions adapt to your evolving needs, whether you're a start-up or an enterprise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
